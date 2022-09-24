---
id: 49
title: 'Prime Number Library for OCaml'
date: '2014-11-13T09:08:39-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=49'
permalink: /2014/11/prime-number-library-for-ocaml/
wp-syntax-cache-content:
    - "a:1:{i:1;s:2150:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"code\"><pre class=\"ocaml\" style=\"font-family:monospace;\"><span style=\"color: #a52a2a;\">#</span> <span style=\"color: #06c; font-weight: bold;\">open</span> <span style=\"color: #06c; font-weight: bold;\">Num</span> <span style=\"color: #a52a2a;\">;;</span>\n<span style=\"color: #a52a2a;\">#</span> <span style=\"color: #06c; font-weight: bold;\">let</span> prime_list <span style=\"color: #a52a2a;\">=</span> Prime<span style=\"color: #a52a2a;\">.</span>make <span style=\"color: #a52a2a;\">&#40;</span>Prime<span style=\"color: #a52a2a;\">.</span>miller_rabin <span style=\"color: #c6c;\">500</span><span style=\"color: #a52a2a;\">&#41;</span> <span style=\"color: #a52a2a;\">&#40;</span>num_of_int <span style=\"color: #c6c;\">500</span><span style=\"color: #a52a2a;\">&#41;</span> <span style=\"color: #a52a2a;\">;;</span>\n<span style=\"color: #06c; font-weight: bold;\">val</span> prime_list <span style=\"color: #a52a2a;\">:</span> <span style=\"color: #06c; font-weight: bold;\">Num</span><span style=\"color: #a52a2a;\">.</span>num LazyList<span style=\"color: #a52a2a;\">.</span>t <span style=\"color: #a52a2a;\">=</span> LazyList<span style=\"color: #a52a2a;\">.</span>Node <span style=\"color: #a52a2a;\">&#40;</span>Int <span style=\"color: #c6c;\">503</span>, <span style=\"color: #a52a2a;\">&lt;</span>lazy<span style=\"color: #a52a2a;\">&gt;</span><span style=\"color: #a52a2a;\">&#41;</span>\n<span style=\"color: #a52a2a;\">#</span> Prime<span style=\"color: #a52a2a;\">.</span>nth prime_list <span style=\"color: #c6c;\">500</span> <span style=\"color: #a52a2a;\">;;</span>\n<span style=\"color: #a52a2a;\">-</span> <span style=\"color: #a52a2a;\">:</span> <span style=\"color: #06c; font-weight: bold;\">Num</span><span style=\"color: #a52a2a;\">.</span>num <span style=\"color: #a52a2a;\">=</span> Int <span style=\"color: #c6c;\">4363</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\"># open Num ;;\n# let prime_list = Prime.make (Prime.miller_rabin 500) (num_of_int 500) ;;\nval prime_list : Num.num LazyList.t = LazyList.Node (Int 503, &lt;lazy&gt;)\n# Prime.nth prime_list 500 ;;\n- : Num.num = Int 4363</p></div>\n\";}"
categories:
    - Programming
tags:
    - math
    - ocaml
    - programming
---

A couple of weeks ago, I cleaned up my prime number library for <a href="https://ocaml.org/">OCaml</a>. This library has a number of primality-testing methods in it, but my favorite is the <a href="http://jeremykun.com/2013/06/16/miller-rabin-primality-test/">Miller-Rabin primality test</a>. It's fast and rather accurate.
<!--more-->

If you'd like to take a look at the library, please check out the <a href="https://github.com/pymander/camlprime">camlprime GitHub page</a>. The library is pretty easy to use. If you download and compile the library, you'll end up with a toplevel that you can play with.

The <code>test.ml</code> file has some examples of how to use the primality tests. However, my favorite thing about this library is that it includes a <a href="https://www.haskell.org/haskellwiki/Lazy_evaluation">lazy list</a> implementation of prime numbers. The following example shows how to set up a lazy list of prime numbers proved using the MR algorithm in the toplevel.

```ocaml
# open Num ;;
# let prime_list = Prime.make (Prime.miller_rabin 500) (num_of_int 500) ;;
val prime_list : Num.num LazyList.t = LazyList.Node (Int 503, <lazy>)
# Prime.nth prime_list 500 ;;
- : Num.num = Int 4363
```

The library is pretty fast, even for really large numbers. I've tested it on 300-digit prime numbers, and I'm sure it will scale to sizes much larger than that.

Any thoughts or improvements? Let me know in the comments.
