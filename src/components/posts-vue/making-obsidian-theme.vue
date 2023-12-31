
      <template>
        <div class="main-content-container">
          <div class="post-header">
            <h1 class="post-title">正在做一个OB主题</h1>
          </div>
          <div class="post-meta">
            <span class="post-date">2023-07-09</span>
            <span class="post-tags">obsidian, CSS</span>
          </div>
          <div class="post-content">
          <p>为什么突然想到自己做一个 theme 呢？</p>
<h2>metion——初识 Markdown</h2>
<p>我用 <a href="https://obsidian.md/">Obsidian</a> 快一年了，但是第一次接触它是在高考完的暑假。当时通过 <a href="https://apps.apple.com/cn/app/metion-%E4%B8%AD%E6%96%87%E5%86%99%E4%BD%9C%E8%80%85%E7%9A%84%E7%AC%94%E8%AE%B0%E5%B7%A5%E5%85%B7/id1530965242">metion</a>（由于没找到官网所以放了 App Store 的链接）第一次接触到 <em>Markdown</em>，心想文本编辑还能这么玩？</p>
<p><img src="/public/img/metion-for-mac-ui.png" alt="metion Mac 版的 UI"></p>
<blockquote>
<p>metion 宣传为「&lt;u&gt;颜值高也好用，懂中文也懂 Markdown&lt;/u&gt;」。它的确成功地为中文写作进行了很大程度的优化：它支持在中英文字词之间自动添加空格；它支持中文的词性分析；它使用左右 shift 键能够在不切换输入法的情况下键入不同的符号（如对于中文的左书名号键，使用 <code>左shift</code> 能够键入 <code>《</code> ，而使用 <code>右shift</code> 能够键入 <code>&gt;</code> ）；它支持将文本直接导出为公众号格式（懒得调格式的公众号作者福音）……</p>
</blockquote>
<p>在那之后，我陷入了一阵对 Markdown 的狂热。我在 iPad 上下载了一大批支持 Markdown 的笔记软件，其中就包括 <strong>Obsidian</strong>。但是当时由于不太会用，加上 iPadOS 端的 Obsidian 还存在一些 bug，导致当时<strong>没有能够成功使用</strong>。其他的诸如 <a href="https://bear.app/cn/">Bear</a>、 <a href="https://www.notion.so/product?fredir=1">Notion</a>、 <a href="https://agenda.com"><em>Aganda</em></a>（严格意义上来说不算<strong>笔记</strong>软件）、 <a href="https://www.mweb.im/cn/index.html">MWeb</a> 等等，我都进行了一定程度的体验。它们都是合格的 Markdown 编辑器，只是&lt;u&gt;我口味比较刁&lt;/u&gt;。所以在一番尝试之后，我暂时还是用着 iPad 上的 metion 作为码字工具。</p>
<h2>MarkText——初识 CSS</h2>
<p>metion 在很长一段时间内是我的主力写作工具，公众号前期的文章也都是用 metion 直接导出的格式。后来由于转战 Windows 平台，我又开始了一波试用和筛选，尝试了 <a href="https://typora.io/#download">Typora</a>、 <a href="https://www.effie.co">Effie</a>、 <a href="https://www.zybuluo.com/cmd/">CMD Markdown</a> 等软件。后来由于 &lt;u&gt;Typora 收费与不开源&lt;/u&gt;、&lt;u&gt;Effie 对 Markdown 的不完整的支持&lt;/u&gt;、&lt;u&gt;CMD Markdown 不支持即时渲染&lt;/u&gt;等原因，我选择了一款号称 <strong>Typora 平替</strong>的<strong>开源免费</strong>Markdown 编辑器： <a href="https://github.com/marktext/marktext">MarkText</a>。</p>
<p>作为一个免费的软件，MarkText 几乎是超出了我的预期。在将近半年的使用中，我感到相当的舒适。在主要的编辑功能中，它与 Typora 基本无异，至少我没发现什么特别残缺的功能与特别恶性的 bug。但是由于&lt;u&gt;失去了 metion 的「导出为公众号格式」&lt;/u&gt;，我需要折腾文章的格式的再复制上去。这个时期我用到了两个 Markdown 转公众号格式的网页来帮我进行格式化： <a href="http://md.aclickall.com">Md2All</a> 和 <a href="https://md.openwrite.cn">openwrite</a>。Generally speaking，后者的默认格式更符合我的审美，但是其缺少了对部分 Markdown 语法的支持，如使用 <code>[TOC]</code> 来生成一个 TOC 的功能。所以在后期，我放弃了 openwrite，<strong>被迫</strong>学习了一部分 CSS 知识，用于在 Md2All 里对样式、排版等进行设计。</p>
<p><img src="https://Jay-Qing.github.io/post-images/css-in-md2all.png" alt="Md2All 里的 CSS 片段"></p>
<h2>Obsidian——NOW WE'RE TALKING</h2>
<p>MarkText 说到底只是<strong>编辑器</strong>，而随着对笔记体系的逐渐完善，我开始产生对更高维度的功能的需求。恰逢此时，我接触到了 <em>Zettelkasten</em>。</p>
<blockquote>
<p><a href="https://en.wikipedia.org/wiki/Zettelkasten">Zettelkasten</a> 是德国社会学家 Niklas Luhmann 提出的概念，翻译成英语就是 Box of Notes，也即<strong>卡片盒笔记法</strong>，在这里不进行过多解释，感兴趣的朋友可以自己去了解。Obsidian 的理念与 Zettelkasten 非常兼容，它提供了<strong>双向链接</strong>、<strong>图谱视图</strong>、<strong>tag</strong>和<strong>搜索</strong>等功能，便于创建、连接和浏览笔记，从而建立<strong>知识网络</strong>并使其逐渐丰富。</p>
</blockquote>
<p>也正是这个时候，我开始<strong>正式地</strong>使用上了 Obsidian。不得不说，在接近两个学期的使用中，它确实为我提供了极大的帮助。虽然在初期，由于&lt;u&gt;插件社区&lt;/u&gt;和&lt;u&gt;主题社区&lt;/u&gt;生态过于优秀，我陷入过一阵疯狂捣鼓插件和主题的时期，不过后来由于精力不足，加之我逐渐了「形式主义」，便退烧了。</p>
<p><img src="https://Jay-Qing.github.io/post-images/theme-store-obsidian.png" alt="Obsidian 的插件市场"></p>
<h2>投身主题开发</h2>
<p>退烧归退烧，<strong>需求</strong>还是有的。但我始终感觉用别人做的东西不太舒服。制作者毕竟很难无微不至地考虑到每一个客户端的需求。在刚萌生开发主题这个想法的时候，我的策略是&lt;u&gt;对已有的、相对较完善的主题 CSS 进行修改&lt;/u&gt;，基于 <a href="https://github.com/mgmeyers/obsidian-style-settings">Style Settings</a> 插件对其提供的设置接口进行调整，并增加我认为重要的、常用的设置选项。</p>
<p><img src="https://Jay-Qing.github.io/post-images/change-based-on-serenity.png" alt="基于 Serenity 主题进行修改的过程"></p>
<p>但是在一段时间后，我发现这样的方式极度依赖于原作者的代码，导致我对代码的理解能力与几乎没有进步，操作流程基本上是&lt;u&gt;注掉、看区别、适当修改&lt;/u&gt;，效率极低且没有收益。所以再三思考后还是决定自己从头开始写一个，也当作学前端了。</p>
<p><img src="https://Jay-Qing.github.io/post-images/writing-css.png" alt="test.css"></p>
<p>目前整个开发还处于很前期的阶段，除了提供了一些配色更改的设置、对一些内置样式如 <strong>strong</strong>、<em>emphasis</em>、==highlight== 进行了修改之外，UI 的美化、其他元素（ol、il、code、callout 等）的样式设计、文章排版之类的任务还暂时没有进行。不过问题不大，早晚而已。</p>
<p>前两天在 puq 发的那个「调查」，就是由于我发现在中文编辑中，<strong>斜体</strong> <em>italic</em> 的应用面似乎很窄，所以在考虑要不要弃用掉 italic 的设计而将 em 元素应用其他的样式。还在思考中。</p>
<hr>
<p>这次扯得有点多。希望下次能少扯点。</p>

          </div>
        </div>
      </template>
      
      <script>
        export default {
          name: 'making-obsidian-theme', // 使用文件名作为组件名
        }
      </script>
    