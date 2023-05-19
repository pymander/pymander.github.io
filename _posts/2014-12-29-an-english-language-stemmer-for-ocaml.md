---
id: 80
title: 'An English-language Stemmer for OCaml'
date: '2014-12-29T08:47:38-08:00'
author: 'Erik L. Arneson'
layout: post
guid: 'http://arnesonium.com/?p=80'
permalink: /2014/12/an-english-language-stemmer-for-ocaml/
wp-syntax-cache-content:
    - "a:1:{i:1;s:2605:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</pre></td><td class=\"code\"><pre class=\"ocaml\" style=\"font-family:monospace;\"><span style=\"color: #06c; font-weight: bold;\">let</span> <span style=\"color: #06c; font-weight: bold;\">rec</span> replace_end word <span style=\"color: #a52a2a;\">&#40;</span>rule_list <span style=\"color: #a52a2a;\">:</span> <span style=\"color: #a52a2a;\">&#40;</span><span style=\"color: #06c; font-weight: bold;\">int</span> <span style=\"color: #a52a2a;\">*</span> <span style=\"color: #06c; font-weight: bold;\">string</span> <span style=\"color: #a52a2a;\">*</span> <span style=\"color: #06c; font-weight: bold;\">string</span> <span style=\"color: #a52a2a;\">*</span> <span style=\"color: #06c; font-weight: bold;\">int</span><span style=\"color: #a52a2a;\">&#41;</span> <span style=\"color: #06c; font-weight: bold;\">list</span><span style=\"color: #a52a2a;\">&#41;</span> <span style=\"color: #a52a2a;\">=</span>\n  <span style=\"color: #06c; font-weight: bold;\">match</span> rule_list <span style=\"color: #06c; font-weight: bold;\">with</span>\n      hd <span style=\"color: #a52a2a;\">::</span> tl <span style=\"color: #a52a2a;\">-&gt;</span>\n        <span style=\"color: #06c; font-weight: bold;\">if</span> <span style=\"color: #a52a2a;\">&#40;</span>match_rule word hd<span style=\"color: #a52a2a;\">&#41;</span> <span style=\"color: #06c; font-weight: bold;\">then</span>\n          <span style=\"color: #06c; font-weight: bold;\">let</span> <span style=\"color: #a52a2a;\">&#40;</span>rule, _, _, _<span style=\"color: #a52a2a;\">&#41;</span> <span style=\"color: #a52a2a;\">=</span> hd <span style=\"color: #06c; font-weight: bold;\">in</span>\n            <span style=\"color: #a52a2a;\">&#40;</span>rule, apply_rule word hd<span style=\"color: #a52a2a;\">&#41;</span>\n        <span style=\"color: #06c; font-weight: bold;\">else</span>\n          replace_end word tl\n    <span style=\"color: #a52a2a;\">|</span> <span style=\"color: #a52a2a;\">&#91;</span><span style=\"color: #a52a2a;\">&#93;</span> <span style=\"color: #a52a2a;\">-&gt;</span>\n        <span style=\"color: #a52a2a;\">&#40;</span><span style=\"color: #c6c;\">0</span>, word<span style=\"color: #a52a2a;\">&#41;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">let rec replace_end word (rule_list : (int * string * string * int) list) =\n  match rule_list with\n      hd :: tl -&gt;\n        if (match_rule word hd) then\n          let (rule, _, _, _) = hd in\n            (rule, apply_rule word hd)\n        else\n          replace_end word tl\n    | [] -&gt;\n        (0, word)</p></div>\n\";}"
categories:
    - Programming
tags:
    - C
    - ocaml
    - opam
    - programming
---

A stemming algorithm attempts to reduce words to their stem. For instance, "swimming" would be reduced to "swim", and "avocados" would become "avocado". This is useful in a number of situations, most especially in searching text. This library is a direct port of the Porter English stemming algorithm.
<!--more-->

It was one of my first OCaml projects. I wrote it back in 2003, when I was still new to the language. I had been spending a lot of time writing C libraries that were being called by Perl scripts for my day job. Perl has, or had, a cumbersome, messy interface to C that made such interfaces very difficult to write and maintain.

When I discovered how easy it was to link C libraries into OCaml, I was overjoyed! This was my first attempt. Before reading further, check out my <a href="https://github.com/pymander/ocaml-stemmer">ocaml-stemmer library on GitHub</a>.

<h2>Updating the Code</h2>

Recently, while overhauling all of my publicly-available code, I decided to update my English-language stemmer for OCaml. It's not a very large piece of code, but its age really shows. It wouldn't compile cleanly with the latest version of OCaml. It looks like the code of somebody who hasn't really grokked functional programming yet. Just look at this.

```ocaml
let rec replace_end word (rule_list : (int * string * string * int) list) =
  match rule_list with
      hd :: tl ->
        if (match_rule word hd) then
          let (rule, _, _, _) = hd in
            (rule, apply_rule word hd)
        else
          replace_end word tl
    | [] ->
        (0, word)
```

Ouch, right?

I decided that the scary code would stand as a good message ((Or maybe I should say a good warning.)) to future functional programmers. For now, I just wanted to get this code to compile and not look messy. That ended up being easy.

<h2>Finding The Bug</h2>

Once I got it compiled cleanly, however, I found a bug. Back in 2003, I was big on test-driven development. I wrote tests for lots of code. The OCaml stemmer, it turns out, has been broken for quite a while. It doesn't handle words with apostrophes correctly!

I thought that fixing the bug it would be a challenge. However, I quickly I discovered in the OCaml manual that the <code>or</code> operator was deprecated, and that <code>||</code> should be used instead. Embarrassingly, the <code>or</code> operator was deprecated back in 2002. That never should have been in the code! You can view the <a href="https://github.com/pymander/ocaml-stemmer/commit/40cb816c4d97eea0d51de0f66533c09011f6cbd0" target="_blank">commit which fixed the bug here</a>.

<h2>My Stemmer Library is Now on OPAM</h2>

This is my second library on <a href="http://opam.ocaml.org/" target="_blank">OPAM</a>, including my <a href="http://arnesonium.com/2014/12/camlprime-now-on-opam/" title="Camlprime Now on OPAM" target="_blank">prime number library</a>. You can <a href="http://opam.ocaml.org/packages/stemmer/stemmer.0.2/" target="_blank">view it on OPAM here</a>.
