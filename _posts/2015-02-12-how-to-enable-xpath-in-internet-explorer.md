---
id: 273
title: 'How to Enable XPath in Internet Explorer'
date: '2015-02-12T09:13:32-08:00'
author: 'Erik L. Arneson'
layout: post
guid: 'http://arnesonium.com/?p=273'
permalink: /2015/02/how-to-enable-xpath-in-internet-explorer/
wp-syntax-cache-content:
    - "a:1:{i:1;s:2392:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n6\n7\n8\n9\n</pre></td><td class=\"code\"><pre class=\"javascript\" style=\"font-family:monospace;\"><span style=\"color: #006600; font-style: italic;\">// Internet Explorer workaround.</span>\n<span style=\"color: #000066; font-weight: bold;\">if</span> <span style=\"color: #009900;\">&#40;</span><span style=\"color: #339933;\">!</span>window.<span style=\"color: #660066;\">XPathResult</span><span style=\"color: #009900;\">&#41;</span> <span style=\"color: #009900;\">&#123;</span>\n    EPUBJS.<span style=\"color: #660066;\">Hooks</span>.<span style=\"color: #660066;\">register</span><span style=\"color: #009900;\">&#40;</span><span style=\"color: #3366CC;\">&quot;beforeChapterDisplay&quot;</span><span style=\"color: #009900;\">&#41;</span>.<span style=\"color: #660066;\">wgxpath</span> <span style=\"color: #339933;\">=</span> <span style=\"color: #000066; font-weight: bold;\">function</span><span style=\"color: #009900;\">&#40;</span>callback<span style=\"color: #339933;\">,</span> renderer<span style=\"color: #009900;\">&#41;</span><span style=\"color: #009900;\">&#123;</span>\n       wgxpath.<span style=\"color: #660066;\">install</span><span style=\"color: #009900;\">&#40;</span>renderer.<span style=\"color: #660066;\">render</span>.<span style=\"color: #660066;\">window</span><span style=\"color: #009900;\">&#41;</span><span style=\"color: #339933;\">;</span>\n&nbsp;\n       <span style=\"color: #000066; font-weight: bold;\">if</span> <span style=\"color: #009900;\">&#40;</span>callback<span style=\"color: #009900;\">&#41;</span> callback<span style=\"color: #009900;\">&#40;</span><span style=\"color: #009900;\">&#41;</span><span style=\"color: #339933;\">;</span>\n    <span style=\"color: #009900;\">&#125;</span><span style=\"color: #339933;\">;</span>\n    wgxpath.<span style=\"color: #660066;\">install</span><span style=\"color: #009900;\">&#40;</span>window<span style=\"color: #009900;\">&#41;</span><span style=\"color: #339933;\">;</span>\n<span style=\"color: #009900;\">&#125;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">// Internet Explorer workaround.\nif (!window.XPathResult) {\n    EPUBJS.Hooks.register(&quot;beforeChapterDisplay&quot;).wgxpath = function(callback, renderer){\n       wgxpath.install(renderer.render.window);\n\n       if (callback) callback();\n    };\n    wgxpath.install(window);\n}</p></div>\n\";}"
categories:
    - Programming
tags:
    - epub
    - 'internet explorer'
    - javascript
    - programming
    - publishing
    - 'web development'
    - windows
---

Yesterday, I shared a little bit about using a virtual machine to <a href="http://arnesonium.com/2015/02/test-internet-explorer-without-booting-windows/" title="How to Test Your Frontend Against Internet Explorer Without Booting Windows">test frontend code under Internet Explorer (IE)</a>. My goal was to use <a href="https://code.google.com/p/wicked-good-xpath/" title="Wicked Good XPath" target="_blank">Wicked Good XPath</a> to add the proper XPath features to IE so that EPUB.js would work correctly, thus making the <a href="http://arnesonium.com/2015/01/philalethes-e-bulletin-online-reader/" title="Philalethes E-Bulletin Online Reader"><em>Philalethes E-Bulletin</em> Online Reader</a> work on all major browsers.
<!--more-->

Well, I'd been thinking about this problem for a while, but had delayed working on it because I just didn't want to fiddle with IE. While I'd been thinking about it, the <a href="https://github.com/futurepress/epub.js/commit/f2fa7497939e5876ff6676cf8de34d7284498495#diff-04c6e90faac2675aa89e2176d2eec7d8" target="_blank">EPUB.js instructions were updated</a> with IE-specific steps. I didn't have to look far.

After loading <code>wgxpath.install.js</code> in the header, I just had to add this bit of JavaScript before anything important happened:

<pre lang="javascript" line="1">
// Internet Explorer workaround.
if (!window.XPathResult) {
    EPUBJS.Hooks.register("beforeChapterDisplay").wgxpath = function(callback, renderer){
       wgxpath.install(renderer.render.window);

       if (callback) callback();
    };
    wgxpath.install(window);
}
</pre>

You can see on line 2 that I test for <code>window.XPathResult</code> instead of looking for a user agent or anything like that. That's because it's not really IE I'm interested in detecting. I want to find out if XPath is both available and somewhat standard. User agents are unreliable. <a href="http://learn.jquery.com/code-organization/feature-browser-detection/" target="_blank">Always test for feature availability instead!</a>

<img src="http://arnesonium.com/wp-content/uploads/2015/02/Screenshot-from-2015-02-11-133823.png" alt="Recent web browser usage" width="350" height="130" class="alignright size-full wp-image-279" />The results are good enough for now: the Online Reader works in IE, but it's not perfect. The cover image doesn't load full-size and fonts don't seem to be loading correctly. IE users account for only 10% of the traffic on the website, so obviously I need to work on the EPUB.js cross-browser support. For now, though, it works. And it looks great on Chrome, Safari, and Firefox.
