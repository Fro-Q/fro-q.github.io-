
      <template>
        <div class="main-content-container">
          <div class="post-header">
            <h1 class="post-title">Prompt 入门</h1>
          </div>
          <div class="post-meta">
            <span class="post-date">2023-06-29</span>
            <span class="post-tags">ChatGPT, Prompt</span>
          </div>
          <div class="post-content">
          <p>前面提到过，在使用 ChatGPT 之类的 LLM 时，prompt 的质量决定了生成回复的质量，prompt 的质量则取决于其提供的信息。一个 prompt 所包含的信息可以有：&lt;u&gt;instruction、qusetion、context、inputs、examples&lt;/u&gt;[^1] 等，它们将引导模型给出更符合预期的结果。</p>
<h1>一个简单的 prompt 格式</h1>
<p>LLM 的本质是<strong>概率模型</strong>,即根据已有的 token 来预测下一个 token 的概率分布。如果<strong>提供的信息不充分</strong>或<strong>给出的引导不明确</strong>，LLM——如 ChatGPT——可能会给出一些预期之外的回答，所以早期的 LLM 会出现下面这类问题：
<em>input:</em></p>
<pre><code class="language-text">I want to
</code></pre>
<p><em>ouput:</em></p>
<pre><code class="language-text">see a movie.
</code></pre>
<p>目前，ChatGPT 已经在一定程度上解决了这个问题。对于以上输入，ChatGPT 给出的回复是：</p>
<pre><code class="language-text">Certainly! How can I assist you today? Please provide me with more details or let me know what you would like to do, and I'll do my best to help you.
</code></pre>
<p>但无论如何，在 prompt 中向 LLM 明确其需要完成的任务是非常重要的。一个简单的 prompt 格式——Question Answering(<strong>QA</strong>) 模式，可以表示为：</p>
<pre><code class="language-text">Q: &lt;Question&gt;?
A:
</code></pre>
<h1>两种常用的 Prompt 类型</h1>
<p>向 ChatGPT 询问「<strong>什么是 GPT？</strong>」：</p>
<pre><code class="language-text">Q: What is GPT?
A:
</code></pre>
<p>上面这种<strong>不提供 examples</strong> 的 prompt 被称为「<strong>Zero-shot Prompt</strong>」。虽然 LLM 具备应答 Zero-shot Promp 的能力，但如果问题过于复杂、描述具有歧义或者需要指定输出格式，则通常需要提供一些 examples 以增强对于<strong>任务类型</strong>、<strong>涉及领域</strong>、<strong>回答格式</strong>等的指向性。如：</p>
<pre><code class="language-text">Q: What is LLM?
A: LLM stands for Large Language Model.
Q: What is NLP?
A: NLP stands for Natural Language Processing.
Q: What is GPT?
A:
</code></pre>
<p>得到的结果会更加符合预期（虽然在这一个例子、这一次实践中，仍没有做到格式上与 examples 的完全统一）：</p>
<pre><code class="language-text">GPT stands for &quot;Generative Pre-trained Transformer.&quot; It is a type of large language model developed by OpenAI.
</code></pre>
<p>上面这种提供 examples 的 prompt 被称为「<strong>Few-shot Prompt</strong>」。</p>
<h1>Prompt 的组成</h1>
<p>关于 prompt 的组成，学者们给出了不同的意见。</p>
<p>澳大利亚未来学家 <em>Ross Dawson</em> 认为 prompt 的主要组成元素包括[^2]：</p>
<ul>
<li>Persona（角色）</li>
<li>Context（语境）</li>
<li>Audience（受众）</li>
<li>Instructions（指令）</li>
<li>Style（风格）</li>
<li>Format（格式）</li>
<li>Examples（范例）</li>
<li>Variability（变量）</li>
<li>Constraints（限制）</li>
<li>Refinement（改进）</li>
</ul>
<p>Microsoft 在 <em>Azure OpenAI Service Documentation</em> 中将 prompt 的组成阐述为[^3]：</p>
<ul>
<li>Instructions（指令）</li>
<li>Primary content（主要内容）</li>
<li>Examples（范例）</li>
<li>Cue（提示）</li>
<li>Supporting content（支持内容）</li>
</ul>
<p>虽然各种观点看似差异较大，但总地来说，prompt 的组成元素可以被形容为[^4]：</p>
<ul>
<li>Instructions（指令）</li>
<li>Context（语境）</li>
<li>Input data（输入数据）</li>
<li>Output Indicator（输出指示）</li>
</ul>
<h1>TIPS</h1>
<p>具体的 prompt 设计技巧与规范我会在后面的文章里详细介绍，这里先罗列出一些在使用 ChatGPT 时需要注意的原则。</p>
<h2>明确表达</h2>
<p>对于一些特定的要求（如字数要求（基本就没听话过）），即使提供了非常明确的信息，ChatGPT 也时常给出不符合要求的回答。但无论如何，<strong>进行尽可能明确的表达</strong>能够显著提高回答的可靠性与有效性。注意，这里的「明确」包括<strong>词意</strong>、<strong>语意</strong>以及<strong>语境</strong>层面。下面提供了一些负面案例：</p>
<pre><code class="language-text">用几句话来解释一下写 prompt 需要注意的事。
----------
用 3 - 5 句话阐述 prompt 编写中能够提高回复质量的技巧。
</code></pre>
<p>或：</p>
<pre><code>我今天要写一个实验报告，有点多，老师让我们明天交，我都不知道怎么开头。你帮我写一个开头吧。
----------
我需要写一篇实验报告，课程名称是《GIS 算法与数据结构》，实验报告的结构为：实验预习报告（实验目的、实验原理、实验设备）、实验过程记录、实验结果（结论、小结、建议、体会）。以下是实验内容的更多信息：
    {content}
请帮我写第一篇实验报告的实验预习部分，不超过 500 字。
</code></pre>
<h2>拆分任务</h2>
<p>对任务进行拆分一方面可以避免 ChatGPT 由于单次生成文字的限制而导致的<strong>回答中断</strong>，另一方面可以<strong>基于各个子任务对其进行更精确的引导</strong>以得到更可靠的回复。如对于「一篇论文的撰写」这个任务，可以将任务拆分为「确定论文框架」、「确定论文标题」、「确定写作大纲」、「各部分内容的撰写」、「检查与修正」等。</p>
<h2>善用迭代</h2>
<p>ChatGPT 毕竟不是完美的产品，所以难免会出现生成的回复与预期不符的情况。在使用时根据实际情况，<strong>修正</strong>与<strong>改进</strong> prompt，才能使回复逐渐趋近于用户的期望。</p>
<h2>扬长避短</h2>
<p>作为一个 LLM，ChatGPT 有其擅长与不擅长的领域。它<strong>擅长</strong>创造、设计方案、回答普适性知识、无中生有（「螺丝钉炒面是一道中国家常菜」）等；它<strong>不擅长</strong>数数（经常算错字数）、回答实时性问题、中文词辨识等等。在实际运用中，尽量避免涉及其不擅长的工作，对提升回答的质量与稳定用户的心情都具有莫大的益处。</p>
<p>[^1]: Prompt Engineering Guide, <a href="https://www.promptingguide.ai/introduction/basics">Basics of Prompting</a>
[^2]: Ross Dawson, <a href="https://rossdawson.com/humans-plus-ai/humans-ai-prompt_elements/">Humans + AI: Prompt Elements</a>
[^3]: Microsoft, <a href="https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/prompt-engineering#cue">Introduction to prompt engineering</a>
[^4]: Prompt Engineering Guide, <a href="https://www.promptingguide.ai/introduction/elements">Elements of a Prompt</a></p>

          </div>
        </div>
      </template>
      
      <script>
        export default {
          name: 'basics-of-prompting', // 使用文件名作为组件名
        }
      </script>
    