---
id: 268
title: 'How to Test Your Frontend Against Internet Explorer Without Booting Windows'
date: '2015-02-11T11:15:26-08:00'
author: 'Erik L. Arneson'
layout: post
guid: 'http://arnesonium.com/?p=268'
permalink: /2015/02/test-internet-explorer-without-booting-windows/
categories:
    - Programming
tags:
    - debugging
    - epub
    - 'internet explorer'
    - javascript
    - programming
    - testing
    - 'web development'
    - windows
---

Internet Explorer (IE) has been frustrating me. I want to use stronger words than that, but it would be unprofessional.
<!--more-->

I recently launched the <a href="http://arnesonium.com/2015/01/philalethes-e-bulletin-online-reader/" title="Philalethes E-Bulletin Online Reader"><em>Philalethes E-Bulletin</em> Online Reader</a>, which uses EPUB.js and an implementation of XPath that, for some strange reason, isn't available in IE. I found a few solutions which would work, but all of them require testing in IE. Of course.

This seems like it wouldn't be a problem, except that I run Linux all the time. All of my work happens on the Linux side of things, so booting into Windows just to run IE for one tiny bug fix is an inconvenience and a chore.
<!--more-->

A friend of mine pointed me to <a href="https://www.modern.ie/" title="modern.IE: Virtual Machines for running Internet Explorer" target="_blank">modern.IE</a>. Microsoft has graciously released virtual machines usable under MacOS and Linux for running IE and testing. Be warned, however, that the license only lasts 90 days.

I downloaded the 3.5GB virtual machine image and loaded it up in VirtualBox. This might be unusual, but I don't do a lot of work with virtual machines on my development box. I was immediately greeted with this:
[caption id="attachment_269" align="aligncenter" width="530"]<img src="http://arnesonium.com/wp-content/uploads/2015/02/Screenshot-from-2015-02-11-094245.png" alt="Don&#039;t worry, the loading time was a lie. It only took 5 minutes." width="530" height="423" class="size-full wp-image-269" /> Don't worry, the loading time was a lie. It only took 5 minutes.[/caption]

This solution is not the best for my setup. My computer is getting long in the tooth, so VirtualBox runs neither quickly nor smoothly. However, in this situation, I only needed to test a few lines of code, so it worked.

In my next blog post, which should be coming out shortly, I'll talk about how I got the <em>Philalethes E-Bulletin</em> Online Reader working for IE.
