const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const yaml = require('js-yaml');
const dayjs = require('dayjs');

const mdFilesDir = path.join(__dirname, '../../posts/md');
const vueComponentsDir = path.join(__dirname, '../components/posts-vue');
const postsJsonPath = path.join(__dirname, '../../posts/posts.json');

const md = new markdownIt();

function extractYamlAndContent(markdownContent) { 
  const matches = markdownContent.match(/^---([\s\S]+?)---([\s\S]*)/);
  if (matches && matches.length > 2) {
    const yaml = matches[1].trim();
    const content = matches[2].trim();
    return { yaml, content };
  }
}

function convertMarkdownToHtml(filePath) {
  const markdownContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = extractYamlAndContent(markdownContent);
  const htmlContent = md.render(content);
  return htmlContent;
}

function generateMetaJson(mdFilesDir, postsJsonPath) {
  const mdFiles = fs.readdirSync(mdFilesDir);
  const posts = [];

  mdFiles.forEach((file) => {
    if (file.endsWith('.md')) {
      const filePath = path.join(mdFilesDir, file);
      const markdownContent = fs.readFileSync(filePath, 'utf-8');
      const { yaml: yamlContent } = extractYamlAndContent(markdownContent);

      if (yamlContent) {
        const postInfo = yaml.load(yamlContent);
        postInfo.fileName = path.parse(file).name;

        if (postInfo.date) {
          const formattedDate = dayjs(postInfo.date).format('YYYY-MM-DD');
          postInfo.date = formattedDate;
        }
        posts.push(postInfo);
      }
    }
  })

  const postData = { posts: posts };
  // sort by date
  postData.posts.sort((a, b) => { 
    return dayjs(a.date).valueOf() - dayjs(b.date).valueOf();
  });
  
  fs.writeFileSync(postsJsonPath, JSON.stringify(postData, null, 2));
  return postData;
}

const postData = generateMetaJson(mdFilesDir, postsJsonPath);

const mdFiles = fs.readdirSync(mdFilesDir);
mdFiles.forEach((file) => { 
  if (file.endsWith('.md')) {
    const fileNameWithoutExtension = file.replace('.md', '');
    const filePath = path.join(mdFilesDir, file);

    // get metadata from postData
    const postInfo = postData.posts.find((post) => {
      return post.fileName === fileNameWithoutExtension;
    });
    const title = postInfo.title;
    const date = postInfo.date;
    const tags = postInfo.tags;

    const vueComponentContent = `
      <template>
        <div class="main-content-container">
          <div class="post-header">
            <h1 class="post-title">${title}</h1>
          </div>
          <div class="post-meta">
            <span class="post-date">${date}</span>
            <span class="post-tags">${tags.join(', ')}</span>
          </div>
          <div class="post-content">
          ${convertMarkdownToHtml(filePath)}
          </div>
        </div>
      </template>
      
      <script>
        export default {
          name: '${fileNameWithoutExtension}', // 使用文件名作为组件名
        }
      </script>
    `;

    const vueFilePath = path.join(vueComponentsDir, `${fileNameWithoutExtension}.vue`);
    fs.writeFileSync(vueFilePath, vueComponentContent);
  }
});
