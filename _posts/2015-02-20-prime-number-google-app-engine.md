---
id: 295
title: 'Prime Number Service on Google App Engine'
date: '2015-02-20T14:37:41-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=295'
permalink: /2015/02/prime-number-google-app-engine/
categories:
    - Programming
tags:
    - cloud
    - github
    - golang
    - 'google cloud'
    - php
    - plugin
    - 'prime numbers'
    - programming
    - 'web development'
    - wordpress
image: /wp-content/uploads/2014/12/640px-Enigma-plugboard-300x204.jpg    
---

As I <a href="http://arnesonium.com/2015/02/random-link-rodeo/" title="Random Link Rodeo">mentioned earlier this week</a>, I've decided to learn the <a href="http://golang.org/" target="_blank">Go programming language</a>. I've also been very interested in Google App Engine, which lets you deploy applications to the cloud from a development sandbox. It's like magic for web and mobile applications!
<!--more-->

Since I'm so fond of prime numbers, I thought I'd build a web service for calculating them. It does some other fun stuff, too, like figuring out if a number is happy. It also caches primes in the Google Cloud Datastore with some minimal statistics. If you'd like to see the source code for the prime number service, it's <a href="https://github.com/pymander/prime-json-service" target="_blank">available on GitHub</a>.
<!--more-->

The next thing I did was write the simplest of all WordPress plugins to query the service and return the latest prime number in the sequence. This all happens in a post using the [[nextprime]] shortcode. ((Including this information has the side-effect of revealing how much traffic this page gets.))

<h1>[nextprime]</h1>

You can also <a href="http://sigma-crow-364.appspot.com/" title="Prime Number Web App" target="_blank">visit the app itself</a> and read about querying the service to get prime numbers for your own web page!

Learning Go and writing for the Google App Engine has been really fun. I'm ready for a new challenge! If you have a web application in mind, <a href="http://arnesonium.com/contact/" title="Contact">contact me and let's figure out how to build it</a>!
