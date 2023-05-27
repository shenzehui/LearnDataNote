import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,d as c,e as i}from"./app-910a238a.js";const l={},u={href:"https://leetcode.cn/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},r=i(`<h2 id="题目说明" tabindex="-1"><a class="header-anchor" href="#题目说明" aria-hidden="true">#</a> 题目说明</h2><p>实现获取下一个排列的函数，算法需要将给定数字序列重新排序成字典序列中下一个更大的排序。如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。必须原地修改，只允许有额外常数空间。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2><h3 id="方法一-暴力法" tabindex="-1"><a class="header-anchor" href="#方法一-暴力法" aria-hidden="true">#</a> 方法一：暴力法</h3><p>最简单的想法就是暴力枚举，我们找到由给定数组的元素形成的列表的每个可能的排序，并找出给定的排列更大的排列。</p><p>但是这个方法要求我们找出所有可能的排列，这需要很长时间，实施起来也很复杂。因此，这种算法不能满足要求。 我们跳过它的实现，直接采用正确的方法。</p><p><strong>复杂度分析</strong></p><p>时间复杂度：O(n!)，可能的排列总计有 n! 个。</p><p>空间复杂度：O(n)，因为数组将用于存储排列。</p><h3 id="方法二-一遍扫描" tabindex="-1"><a class="header-anchor" href="#方法二-一遍扫描" aria-hidden="true">#</a> 方法二：一遍扫描</h3><p>首先，我们观察到对于任何给定序列的<strong>降序排序</strong>，就不会有下一个更大的排列。</p><p>例如，以下数组不可能有下一个排列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[9, 5, 4, 3, 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时应该直接返回升序排列。</p><p>所以对于一般的情况，如果有一个&quot;升序子序列&quot;，那么就一定可以找到它的下一个排列。具体来说，需要从右边找到第一对连续的数组 a[i] 和 a[i-1]，它们满足 a[i] &gt; a[i-1]。</p><p>所以一个思路是，找到最后一个的&quot;正序&quot;排列的子序列，把它改成下一个排列就行了。</p><p><img src="https://javablog-image.oss-cn-hangzhou.aliyuncs.com/blog/image-20230527145642719.png" alt="image-20230527145642719" loading="lazy"></p><p>不过具体操作会发现，如果正序子序列后没数了，那么子序列的&quot;下一个&quot;一定就是整个序列的&quot;下一个&quot;，这样做没问题，但如果后面还有逆序排列的数，这样就不对了。比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,3,8,7,6,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后的正序列子序列是[1,3,8]，但显然不能直接换成[1,8,3]就完事了。而是应该把 3 换成后面比 3 大比 8 小的数，而且选最小的那个 6。接下来，还要让 6 之后的所有数，做一个升序排列，得到结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1,6,2,3,7,8]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码实现如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 方法改进：将降序数组反转的操作提取出来
 */</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">nextPermutation2</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token comment">// 1.从后向前找到升序子序列，找到一次下降的数，位置记为 k</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        k<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 找到 k,就是需要调整位置的最高位</span>

    <span class="token comment">// 2.如果 k = -1，说明所有数降序排列，改成升序排列</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3. 一般情况，k &gt;=0</span>
    <span class="token comment">// 3.1 依次遍历剩余降序排列部分，找到要替换最高位的那个数</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> k <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">// k+1肯定比它大</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 当前的 i 就是后面部分第一个比 nums[k] 小的数，num[i-1] 就是比当前数大的最小的数，就是要替换的数</span>

    <span class="token comment">// 3.2 交换 i -1 和 k 位置上的数</span>
    <span class="token function">sway</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.3 k 之后的剩余部分变成升序排列，直接前后替换</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 定义一个方法，交换数组中两个元素
 */</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">sway</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> tmp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 定义一个反转数组的方法
 */</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sway</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        start<span class="token operator">++</span><span class="token punctuation">;</span>
        end<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p><strong>复杂度分析</strong></p><ul><li><p>时间复杂度：O(N)，其中 NN 为给定序列的长度。我们至多只需要扫描两次序列，以及进行一次反转操作。</p></li><li><p>空间复杂度：O(1)，只需要常数的空间存放若干变量。</p></li></ul>`,28);function d(k,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[n("blockquote",null,[n("p",null,[s("力扣链接："),n("a",u,[s("https://leetcode.cn/problems/two-sum/"),c(a)])])]),r])}const h=e(l,[["render",d],["__file","nextPermutation.html.vue"]]);export{h as default};
