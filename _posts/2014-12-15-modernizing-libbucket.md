---
id: 74
title: 'Modernizing libbucket'
date: '2014-12-15T08:45:55-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=74'
permalink: /2014/12/modernizing-libbucket/
wp-syntax-cache-content:
    - "a:1:{i:1;s:579:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n6\n</pre></td><td class=\"code\"><pre class=\"m4\" style=\"font-family:monospace;\">AC_INIT([libbucket], [1.0.4])\nAC_CONFIG_SRCDIR([src/bucket.c])\nAC_CONFIG_MACRO_DIR([m4])\nAM_INIT_AUTOMAKE([foreign])\nAM_CONFIG_HEADER(config.h)\nAM_MAINTAINER_MODE</pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">AC_INIT([libbucket], [1.0.4])\nAC_CONFIG_SRCDIR([src/bucket.c])\nAC_CONFIG_MACRO_DIR([m4])\nAM_INIT_AUTOMAKE([foreign])\nAM_CONFIG_HEADER(config.h)\nAM_MAINTAINER_MODE</p></div>\n\";}"
categories:
    - Programming
tags:
    - C
    - programming
---

If you're here to learn about my experience in software development, you've probably poked around <a href="https://github.com/pymander">my GitHub page</a>. One the older projects on there is <a href="https://github.com/pymander/libbucket">libbucket</a>, a very fast dynamic string buffer library. I originally wrote it while working for Musician's Friend, and was given permission to release it as an open sourced library in 2005.
<!--more-->

<img src="http://arnesonium.com/wp-content/uploads/2014/11/bucket-303359_640-300x293.png#right" alt="Metaphorically similar to this kind of bucket." /> 

Recently I decided to update the build system in the library, which was using an old version of autoconf and automake. I haven't worked with those tools in a number of years. They are solid and flexible, but they're also a confusing tangle of m4 macros and crazy shell scripts. Also, they change a lot.

A few important things had changed. For instance, <code>aclocal</code> wanted to read from <code>configure.ac</code> instead of <code>configure.in</code>. In addition, the <code>AM_INIT_AUTOMAKE</code> macro was completely different, but the tool was nice enough to point me to <a href="http://www.gnu.org/software/automake/manual/automake.html#Modernize-AM_005fINIT_005fAUTOMAKE-invocation">the relevant part of the automake manual</a>.

Building a library is also a little different now than it was in 2002. <a href="https://www.gnu.org/software/libtool/">GNU Libtool</a> is a great program for building dynamic and shared libraries correctly for Unix systems, but its usage is different now. Luckily, it spit out all of the information I needed to update things.

One thing I didn't quite figure out is how to get automake to recognize the <code>README.org</code> file as satisfying its README requirement. I ended up with an initialization block in <code>configure.ac</code> that looked like this:

```m4
AC_INIT([libbucket], [1.0.4])
AC_CONFIG_SRCDIR([src/bucket.c])
AC_CONFIG_MACRO_DIR([m4])
AM_INIT_AUTOMAKE([foreign])
AM_CONFIG_HEADER(config.h)
AM_MAINTAINER_MODE
```

You can see the unpleasant "cheat" on line 4. Sorry about that, world.

After all of that mess, there were just a couple of small fixes to the documentation, which is written in GNU Texinfo, and the library compiled just fine.

Unfortunately, I don't have any tests. When I first developed libbucket, we had a proprietary test interface for C and C++ libraries at Musician's Friend. That never got open sourced, so I had to remove it all before making the libbucket code public. Maybe tests are next.

If you'd like to take a look at the changes I made, <a href="https://github.com/pymander/libbucket/commit/6314493fb7c8397318ac4a8d10624159aab07204">here's the Git commit</a>.

