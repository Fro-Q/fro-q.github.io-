const fs = require('fs');

const filePath = 'src/router/index.js';
const targetLine = 18;
const targetColumn = 7;
const jsonFilePath = 'posts/posts.json';
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
const posts = jsonData.posts;
let ContentToAdd = '';

posts.forEach((post) => { 
    const fileName = post.fileName;
    const contentForEach = `
    {
      path: '/${fileName}',
      name: '${fileName}',
      components: {
        sidebarLeft: Menubar,
        sidebarRight: TagList,
        mainContent: () => import('@/components/posts-vue/${fileName}.vue'),
      }
    },`;
    ContentToAdd += contentForEach;
})

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
    
  if (data.includes(ContentToAdd)) {
    console.log('File already contains the specified content');
    return;
  }

  const lines = data.split('\n');
  let currentIndex = 0;

  // 循环计数，找到目标行之前的字符数
  for (let i = 0; i < targetLine - 1; i++) {
    currentIndex += lines[i].length + 1; // +1 是为了包括换行符
  }

  // 加上目标列号，得到插入索引位置
  const insertIndex = currentIndex + targetColumn;

  // 在指定位置插入新内容
  const updatedContent = data.slice(0, insertIndex) + ContentToAdd + data.slice(insertIndex);

  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Successfully updated file:', filePath);
  });
});
