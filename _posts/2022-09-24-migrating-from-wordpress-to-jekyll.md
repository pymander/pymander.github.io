---
title: "Migrating from WordPress to Jekyll"
author: "Erik L. Arneson"
layout: post
permalink: /2022/09/migrating-from-wordpress-to-jekyll
comments: true
tags:
    - wordpress
    - jekyll
    - website development
    - github
categories:
    - Jekyll
    - WordPress
    - Development
---

Since launching this site in 2014, it has run on WordPress. I have always wanted to move the site to another blogging platform,
especially since I wasn't really taking advantage of all of the WordPress features.
<!--more-->

- **I kept running WordPress for many years for two reasons.** 

First, I needed to show off my WordPress skills to attract clients. Second, I
thought it would be difficult to migrate away from WordPress. Once I got some experience with [Jekyll](https://jekyllrb.com/) and 
[GitHub Pages](https://pages.github.com/), I knew I wanted to eventually move to that platform. 

- **I followed [these simple instructions](https://talk.hyvor.com/blog/migrate-from-wordpress-to-jekyll/)**
  by [Supun  Kavinda](https://talk.hyvor.com/blog/author/supun/) and
  used a plugin to export all of my content from WordPress to Jekyll.

The process **only took about an hour** to get everything set up.

I then spent many hours tweaking everything until it looked good. Probably too many hours.

## Why migrate to Jekyll?

Jekyll is a static site generator, and pages and posts are all
generated with very easy Markdown. This makes it easy to keep the
layout simple and easy to do things like share source code.

- **Here is some simple Go code** just to show you how it looks.

```go
func main() {
  	fmt.Println("Welcome to the playground!")
	fmt.Println("The time is", time.Now())
}
```

**GitHub Pages makes it easy to use source control** to track changes to your website. I have been loving this function on other websites I
maintain. As an added bonus, I was tired of the WordPress theme I had been using, and didn't relish the thought of finding a new one.

## What about missing features?

Indeed, I will need to figure out how to handle all of the little broken things in all of my old posts going back to 2014. Here are some
features I will miss:

- Automatically embedded Tweets.
- Automatic sharing of new posts to Twitter and LinkedIn.
- Password-protected web pages.

Also, my Disqus account doesn't seem to be loading correctly. Will I
fix that? Who knows! In the meantime, if you want to respond to this,
you can [find me on Twitter](https://twitter.com/pymander).
