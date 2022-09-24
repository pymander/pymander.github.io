---
id: 64
title: 'Handy Tools for the Bourne Again Shell'
date: '2014-12-01T08:38:30-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=64'
permalink: /2014/12/handy-tools-for-the-bourne-again-shell/
wp-syntax-cache-content:
    - "a:1:{i:1;s:620:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"code\"><pre class=\"shell-script\" style=\"font-family:monospace;\">[user@host:~]$ cd /tmp\n[user@host:/tmp]$ cd /var/log\n[user@host:/var/log]$ dl\n1   ~\n2   /tmp\n3 * /var/log\n[user@host:/var/log]$ go 1\n1   /home/user\n[user@host:~]$ go log\n3   /var/log\n[user@host:/var/log]$</pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">[user@host:~]$ cd /tmp\n[user@host:/tmp]$ cd /var/log\n[user@host:/var/log]$ dl\n1   ~\n2   /tmp\n3 * /var/log\n[user@host:/var/log]$ go 1\n1   /home/user\n[user@host:~]$ go log\n3   /var/log\n[user@host:/var/log]$</p></div>\n\";}"
categories:
    - Programming
tags:
    - bash
    - programming
    - shell
---

If you're a Unix geek, you've probably used bash, the Bourne-Again Shell. If you've been around a while, you've probably spent a lot of time customizing bash.
<!--more-->

Back when I worked for Yahoo!, my friend Bryan gave me a great directory stack for bash. I loved it, so I rewrote it and have been hacking on it and using it ever since. Observe.

```
[user@host:~]$ cd /tmp
[user@host:/tmp]$ cd /var/log
[user@host:/var/log]$ dl
1   ~
2   /tmp
3 * /var/log
[user@host:/var/log]$ go 1
1   /home/user
[user@host:~]$ go log
3   /var/log
[user@host:/var/log]$ 
```

In addition to the handy new <code>go</code> command, it also includes <code>b</code> and <code>f</code> for moving backwards and forwards on the stack. It was inspired by <code>pushd</code> and <code>popd</code>, but it's so much more.

<a href="http://arnesonium.com/wp-content/uploads/2014/11/sea_shell.jpg"><img src="http://arnesonium.com/wp-content/uploads/2014/11/sea_shell-300x211.jpg#left" alt="Not this kind of shell." width="300" height="211" class="size-medium wp-image-65" /></a>

If you'd like to check it out, take a look at my <a href="https://github.com/pymander/bashtools">bashtools repository on GitHub</a> or just <a href="https://github.com/pymander/bashtools/archive/v1.0.tar.gz" title="bashtools 1.0">download version 1.0</a>. I don't change it very often, but I'm thinking of hammering out a long-standing bug in the directory stack code.

N.B. If you use all of my scripts, you'll get some great prompts for your xterms. You're welcome!

