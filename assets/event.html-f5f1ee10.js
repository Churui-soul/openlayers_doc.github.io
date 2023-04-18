import{_ as s,M as a,p as e,q as p,N as t,a1 as r}from"./framework-e921cdd2.js";const o={},c=r(`<h1 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h1><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//单击，双击会触发两次</span>
<span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//双击</span>
<span class="token literal-property property">dblclick</span><span class="token operator">:</span> <span class="token string">&#39;dblclick&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//单击，延迟250毫秒，双击不会触发</span>
<span class="token literal-property property">singleclick</span><span class="token operator">:</span> <span class="token string">&#39;singleclick&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//缩放结束或拖动结束都会触发</span>
<span class="token literal-property property">moveend</span><span class="token operator">:</span> <span class="token string">&#39;moveend&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//鼠标移动事件</span>
<span class="token literal-property property">pointermove</span><span class="token operator">:</span> <span class="token string">&#39;pointermove&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//鼠标拖动事件</span>
<span class="token literal-property property">pointerdrag</span><span class="token operator">:</span> <span class="token string">&#39;pointerdrag&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图准备渲染</span>
<span class="token literal-property property">precompose</span><span class="token operator">:</span> <span class="token string">&#39;precompose&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图渲染中</span>
<span class="token literal-property property">postcompose</span><span class="token operator">:</span> <span class="token string">&#39;postcompose&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图渲染全部结束</span>
<span class="token literal-property property">postrender</span><span class="token operator">:</span> <span class="token string">&#39;postrender&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图图层增删时触发</span>
<span class="token literal-property property">changeLayerGroup</span><span class="token operator">:</span> <span class="token string">&#39;change:layerGroup&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图窗口发生变化就会触发</span>
<span class="token literal-property property">changeSize</span><span class="token operator">:</span> <span class="token string">&#39;change:size&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图绑定的div发生更改时触发，也就是更换了地图div容器时</span>
<span class="token literal-property property">changeTarget</span><span class="token operator">:</span> <span class="token string">&#39;change:target&#39;</span><span class="token punctuation">,</span>
<span class="token comment">//地图view对象发生变化触发，为地图设置了新的view，map.setView(view)</span>
<span class="token literal-property property">changeView</span><span class="token operator">:</span> <span class="token string">&#39;change:view&#39;</span><span class="token punctuation">,</span>
<span class="token doc-comment comment">/**
 * change:size、change:target、change:view都会触发propertychange事件。
 * 地图首次加载就会触发size和propertychange事件。
 * change:target触发的时间顺序为:
 * change:size——propertychange——change:target——propertychange
 */</span>
<span class="token literal-property property">propertychange</span><span class="token operator">:</span> <span class="token string">&#39;propertychange&#39;</span><span class="token punctuation">,</span> <span class="token comment">//Map对象中任意的property值改变时触发</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件测试" tabindex="-1"><a class="header-anchor" href="#事件测试" aria-hidden="true">#</a> 事件测试</h2>`,4);function i(l,d){const n=a("EventTest");return e(),p("div",null,[c,t(n)])}const m=s(o,[["render",i],["__file","event.html.vue"]]);export{m as default};
