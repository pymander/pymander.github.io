---
id: 197
title: 'Handling Widows and Orphans in EPUB Files'
date: '2014-12-19T06:46:32-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=197'
permalink: /2014/12/handling-widows-and-orphans-in-epub-files/
categories:
    - Programming
    - Uncategorized
tags:
    - design
    - epub
    - publishing
---

For a little over a year, I've been working with the <a href="http://idpf.org/epub" target="_blank">EPUB format</a> to build electronic books. I've been working on a software package to build EPUB files in Emacs, in fact. ((Sorry, it's not available for the general public yet. Someday!)) This has required learning more about design, and a great deal more about book layout. As with many design elements, once you're made aware of them, you notice them all of the time. EPUBs, for instance, are not very good at handling <a href="http://www.magazinedesigning.com/typographic-widows-and-orphans/" target="_blank">widows and orphans</a>.

Since EPUB uses HTML, it doesn't have all of the tools available to print for handling these design issues. However, I've recently learned that there is hope. Over on <a href="http://www.pigsgourdsandwikis.com/2010/06/goodbye-widows-and-orphans-or-yes-you.html">Pigs, Gourds, and Wikis</a>, I learned about the CSS <code>div</code> property, <code>display:&nbsp;inline-block</code>. I'm looking forward to using this in future EPUBs to improve format even more.

<img src="http://arnesonium.com/wp-content/uploads/2014/12/Fraktur-300x106.png" alt="Typesetting" width="300" height="106" class="aligncenter size-medium wp-image-200" />