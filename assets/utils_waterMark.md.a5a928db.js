import{_ as a,c as s,o as t,O as e}from"./chunks/framework.54e68f16.js";const l="/ui/assets/waterMark.bceb3437.png",F=JSON.parse('{"title":"waterMark 水印","description":"","frontmatter":{},"headers":[],"relativePath":"utils/waterMark.md","lastUpdated":1679652625000}'),n={name:"utils/waterMark.md"},r=e('<h1 id="watermark-水印" tabindex="-1">waterMark 水印 <a class="header-anchor" href="#watermark-水印" aria-label="Permalink to &quot;waterMark 水印&quot;">​</a></h1><h2 id="添加水印" tabindex="-1">添加水印 <a class="header-anchor" href="#添加水印" aria-label="Permalink to &quot;添加水印&quot;">​</a></h2><p><img src="'+l+`" alt="An image"></p><details class="details custom-block"><summary>显示代码</summary><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">waterMark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@big0range/utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">waterMark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是水印~~</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details><h2 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h2><p><code>waterMark.set(value,color)</code></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认</th></tr></thead><tbody><tr><td>value</td><td>水印内容</td><td><code>string</code></td><td>—</td><td>—</td></tr><tr><td>color</td><td>水印文字颜色</td><td><code>string</code></td><td>—</td><td>rgba(17, 17, 17, 0.2)</td></tr></tbody></table><h2 id="清除水印" tabindex="-1">清除水印 <a class="header-anchor" href="#清除水印" aria-label="Permalink to &quot;清除水印&quot;">​</a></h2><details class="details custom-block"><summary>显示代码</summary><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">waterMark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@big0range/utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">waterMark</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details><h2 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h2><p><code>waterMark.clear()</code></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认</th></tr></thead><tbody><tr><td>无</td><td>—</td><td>—</td><td>—</td><td>—</td></tr></tbody></table>`,12),o=[r];function p(c,d,i,h,y,D){return t(),s("div",null,o)}const m=a(n,[["render",p]]);export{F as __pageData,m as default};