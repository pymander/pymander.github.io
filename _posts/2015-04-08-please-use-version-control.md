---
id: 339
title: 'Please Use Version Control'
date: '2015-04-08T20:07:44-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'http://arnesonium.com/?p=339'
permalink: /2015/04/please-use-version-control/
wp-syntax-cache-content:
    - "a:1:{i:1;s:533:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"code\"><pre class=\"bash\" style=\"font-family:monospace;\"><span style=\"color: #666666;\">$ </span><span style=\"color: #c20cb9; font-weight: bold;\">git log</span> <span style=\"color: #660033;\">--oneline</span> <span style=\"color: #660033;\">--graph</span> <span style=\"color: #660033;\">--all</span> <span style=\"color: #660033;\">--decorate</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">$ git log --oneline --graph --all --decorate</p></div>\n\";}"
image: /wp-content/uploads/2015/04/logpile-banner.png
categories:
    - Programming
tags:
    - git
    - github
    - programming
    - 'stack overflow'
    - 'version control'
    - 'web development'
---

Stack Overflow released their <a href="http://stackoverflow.com/research/developer-survey-2015" title="Stack Overflow Developer Survey 2015" target="_blank">2015 Developer Survey</a> this week, and it has some interesting results. There are plenty of articles being written about their findings, so I'm only going to focus on one of them: version control.
<!--more-->

<h2>9.3% of Respondents Don't Use Version Control</h2>

<img src="http://arnesonium.com/wp-content/uploads/2015/04/Screenshot-from-2015-04-08-192457.png" alt="Almost 10% of programmers aren't using version control." width="300" height="188" class="size-medium wp-image-345" />

StackOverflow says that <a href="http://stackoverflow.com/research/developer-survey-2015#tech-sourcecontrol" title="Stack Overflow Developer Survey 2015" target="_blank">almost 10% of developers still aren't using version control</a>. This is terrible. If you happen to be one of the developers who hasn't adopted version control yet, <b>make it your next priority!</b>

Version control, also known as source control or revision control, is vital to best programming practices. It provides an incremental backup along with comments and notes on changes that have been made. It provides a view of changes and all kinds of handy features, such as handling conflicts between changes, release tagging, code branches, and more. If you aren't sure what version control is, check out Ilya Olevsky's post, <a href="http://www.codeservedcold.com/version-control-importance/" title="Why Version Control is Critical to Your Success" target="_blank">"Why Version Control is Critical to Your Success,"</a> and then come back here.

<h2>Essential to Collaboration and Continuity</h2>

If you are looking to hire a freelance developer, make sure you hire one that uses version control. It is essential to maintaining a healthy history of code releases, project updates, and bug fixes. What if you only need to use your freelancer every once in a while? What if you decide to add more developers, or change developers all together? Without version control, this becomes a nightmare.

A client recently brought me a project that had been built by another developer a couple of years ago. They wanted to move their web application from one host to another. However, there was a lot that needed to be cleaned up before the move could happen, including some outdated PHP code and odd database settings. In the project's main directory, there was a mess of old, unused source code files. Just the <code>index.php</code> file had multiple versions:

<ul>
	<li>index2.php</li>
	<li>index3.php</li>
	<li>indexold.php</li>
	<li>index.php_old</li>
	<li>index.php_bak</li>
</ul>

In all, there were 598 unused files that were unnecessary backups of old, broken code. This type of mess is easily avoided with version control. Please stay sane, keep your customers happy, and your source code easy to navigate. Use version control.

<h2>Getting Started with Version Control</h2>

<img src="http://arnesonium.com/wp-content/uploads/2015/04/git-logo.png" alt="git-logo" width="220" height="92" class="alignright size-full wp-image-347" />

If you've decided to make the right move and start using version control, you will see that there are many to choose from. However, if you're just going to learn one, you should start with <b>Git</b>. As you can see from the survey, it is the most widely used. The best place to start is probably in the free e-book offered by the Git development team. <a href="http://git-scm.com/book/en/v1/Getting-Started" title="Git: Getting Started" target="_blank">Click here to get started.</a>

<h2>If You're Doing It, Thank You</h2>

The first time I encountered a team that wasn't using version control, I was shocked. The second time, I sighed in exasperation. Now, I am thankful that over 90% of developers are using it, and I look forward to the day that every project I join comes with a <code>git log</code> command. If you are using version control, I hope you spread the word and make sure that your fellow programmers are doing it, too. Save the rest of us some pain!

As a bonus, here's my favorite <code>git log</code> command. Add it to your aliases.

```bash
git log --oneline --graph --all --decorate
```

<small><em>The featured image for this post is a pile of logs, to remind you that logs are important, and a vital part of version control.</em></small>
