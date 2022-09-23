---
id: 307
title: "Don't Modify the Clipboard with JavaScript"
date: '2015-03-02T08:42:53-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=307'
permalink: /2015/03/dont-modify-the-clipboard-with-javascript/
categories:
    - Programming
tags:
    - 'best practices'
    - javascript
    - programming
    - 'web design'
    - 'web development'
---

<img src="http://arnesonium.com/wp-content/uploads/2015/02/3429454121_9a93f53855_o-300x200.jpg#right" alt="3429454121_9a93f53855_o" width="300" height="200" class="alignright size-medium wp-image-309" />

Recently, I was reading an article about a newly published book that I'm interested in. However, the article didn't include a link to the book, so I copied the title by highlighting it with the mouse and hitting 'Ctrl-C', and opened a new browser tab to do a search. However, upon pasting, I saw the book title along with an annoying addition: "To read more, visit our website at [redacted]."

This sort of website behavior is not okay.
<!--more-->

I've seen the behavior on a number of websites, and it is among my least favorite trends in web development. The user is probably using his clipboard for one of two reasons. First, the website has a UX problem, and it has neglected to link to something important. Second, the user needs the text either for a quote, or to look up an unrelated term. For instance, this sentence has the word "bucolic" in it, and that's an uncommon word that you might want to look up. 
<!--[obnoxious_fnords]-->

But you can't easily, because I've included JavaScript on this page that modifies your copy buffer. Do you see how annoying that is? Please don't go mucking about in your users' copy buffers.

*(Note that as of September 2022, the JavaScript is living elsewhere. This is from my old WordPress site.)*

If you want to see what happens when you try to copy and paste on this page, highlight some text on the page and hit 'Ctrl-C' (or 'Cmd-C' for OS X users). Then go to the handy text area below and paste with 'Ctrl-V'.

<textarea style="width:100%"></textarea>

That's really obnoxious, isn't it?

<small><em>The image for this post comes from <a href="https://www.flickr.com/photos/shimelle/" target="_blank">Flickr user Shimelle Laine</a>.</em></small>
