---
title: Posts of Interest for 13 October 2023
author: "Erik L. Arneson"
layout: post
permalink: /2023/10/13-posts-of-interest
comments: true
tags:
- emacs
- programming
- emacs lisp
- security
---

This is the second of my "posts of interest" posts. This week, I have also included some interesting Mastodon posts, because the Emacs community on Mastodon is thriving like crazy. It is really a blast to see so much interest in Emacs and so much activity.
<!--more-->

If Mastodon interests you, [find me there](https://fosstodon.org/@pymander)!


## Programming (1)

-   [Scheme in the browser: A Hoot of a tale](https://spritely.institute/news/scheme-wireworld-in-browser.html) &#x2013; Spritely Institute
    Yes, SCHEME IN THE BROWSER. This is pretty cool, go check it out.


## Emacs (6)

-   [Text showdown: Gap Buffers vs Ropes](https://coredumped.dev/2023/08/09/text-showdown-gap-buffers-vs-ropes/) **[Programming, Rust]**
    Troy Hinckley has been working on building the core of Emacs in Rust. This sounds like a very
    difficult project, and it is informative and interesting to follow along. The latest entry in his
    saga involves various ways of storing and working with text buffers, along with many benchmarks.
    This is an interesting read!
-   [ELPA and Emacs Zine (September 2023)](https://amodernist.com/eaez/./sep23.html)
    The new ELPA and Emacs Zine has released its latest issue, with some pretty interesting stuff about
    the current state of tree-sitter and how development is progressing.
-   [Emacs Macros](https://functional.cafe/@PaniczGodek/111187231582720915) **[Mastodon]**
    Emacs macros remain kind of a mystery to me, but they were presented in an interesting way recently:
    these are ways to provide a high level of automation in Emacs without learning how to program Emacs
    Lisp. Well, they are worth checking out, then!
-   [Taking advantage of tree-sitter](https://fosstodon.org/@chmouel/111203691941968313) **[Mastodon]**
    This is a really cool Emacs function that takes advantage of tree-sitter to copy the current
    function. I think it might need something to detect if tree-sitter is active, and error out if not.
    ```emacs-lisp
    (defun my-copy-function-name-with-ts()
      (interactive)
      (let ((funcname
             (substring-no-properties
              (treesit-node-text
               (treesit-node-child-by-field-name (treesit-defun-at-point) "name")))))
        (kill-new funcname)
        (message "Copied name: %s" funcname)))
    ```
-   [XMPP in Emacs](https://octodon.social/@fabionatali/111210018767997686) **[Mastodon]**
    Fabio Natali on Mastodon reports that his XMPP usage would be more consistent if Emacs supported it
    better. In particular, he misses E2E encryption support. I've also had a lot of difficulty with
    moving to XMPP.
-   [Alex Schroeder: Posting to Oddµ from Emacs](https://alexschroeder.ch/view/2023-10-11-post-from-emacs) (Alex Schroeder)
    Alex Schroeder provides a simple, straightforward way to use the `url` package in Emacs to post
    stuff to another service. In this example, he uses Oddμ.


## Security (4)

-   [C-suite weighs in on generative AI and security](https://securityintelligence.com/posts/c-suite-weighs-generative-ai-security/) (Chris McCurdy)
    More on the adoption of generative AI and security risks. 96% of business leaders say adopting generative AI makes a security breach likely in their organization within the next three
    years! That's certainly something to think about.
-   [10 years in review: Cost of a Data Breach](https://securityintelligence.com/articles/cost-of-a-data-breach-10-years-in-review/) (Jonathan Reed)
    Data breaches are dang expensive! We all know that. This piece explores some of the most important
    factors in preventing and mitigating data breaches. There have been some changes in recent years,
    some of which are caused by the rise of importance in AI. That means you should probably read the article.
-   [The fraud was in the code](https://newsletter.mollywhite.net/p/the-fraud-was-in-the-code) (Molly White)
    In the SBF court case, they actually used a code review to show fraud.
-   [Bounty to Recover NIST’s Elliptic Curve Seeds](https://www.schneier.com/blog/archives/2023/10/bounty-to-recover-nists-elliptic-curve-seeds.html) (Bruce Schneier)
    Here is a delightful story about the history of NIST elliptic curve cryptography and how things came
    to be. Also, a cryptographic puzzle about where they may be going!

