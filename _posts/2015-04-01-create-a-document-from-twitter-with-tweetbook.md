---
id: 317
title: 'Create a Document From Twitter with TweetBook'
date: '2015-04-01T10:48:56-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'http://arnesonium.com/?p=317'
permalink: /2015/04/create-a-document-from-twitter-with-tweetbook/
categories:
    - Programming
    - Projects
tags:
    - golang
    - 'google cloud'
    - programming
    - publishing
    - tweetbook
    - twitter
    - 'web development'
image: /wp-content/uploads/2015/04/Screenshot-from-2015-04-01-102456-1024x294.png    
---

I just released <a href="http://tweetbook.arnesonium.com/" title="TweetBook" target="_blank">TweetBook</a>, a web application to transform a Twitter stream into a simple document that can easily be turned into a photo album.
<!--more-->

<h2>The Problem</h2>
A client came to me complaining that there was no available solution to export a Twitter feed as a document filled with images. There are various other Twitter-to-document converters out there, but they all focus on the text. The client asked me to build a tool to fill this void.

<h2>The Solution</h2>
Since I've been working with Google App Engine a lot lately, I used Go to write a tool that retrieves Tweets from a search or timeline. It provides a number of formatting options, and then creates a simple document suitable for exporting into an HTML or PDF file.

<h2>Try It Out!</h2>

<em>As of 2022, this application is seven years old and probably doesn't work anymore.</em>

The client told me to do whatever I wanted with the code, so I'm making it available for use! <strong><a href="http://tweetbook.arnesonium.com/" title="TweetBook" target="_blank">Click here to try TweetBook!</a></strong> If you find it useful, please consider funding further development by contributing a small amount with this button:

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
 <button type="submit" class="btn">Contribute $1.99 &raquo;</button><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="3PNSJJHRF9XWA">
 <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

<h2>Do You Have a Suggestion? A Bug Report?</h2>
If you have additional ideas for TweetBook, please visit my <a href="http://arnesonium.com/contact/" title="Contact">Contact page</a>. I'm eager to hear your feedback and get suggestions and bug reports!
