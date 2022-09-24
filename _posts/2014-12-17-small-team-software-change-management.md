---
id: 169
title: 'Small Team Software Change Management'
date: '2014-12-17T17:45:51-08:00'
author: 'Erik Arneson'
layout: post
guid: 'http://arnesonium.com/?p=169'
permalink: /2014/12/small-team-software-change-management/
categories:
    - Programming
tags:
    - freshbooks
    - git
    - github
    - management
    - programming
    - 'web development'
---

Until October, I'd been using a paid <a href="http://github.com/" target="_blank">GitHub</a> account to manage source code changes and issue tracking for private projects. GitHub is a software-as-a-service (SaaS) product providing a web-based interface for source control management and various project tracking tasks. <a href="http://blogs.perl.org/users/jt_smith/2011/12/github-is-an-amazing-service-that-much-of-the-perl-community-has.html" target="_blank">Some people love it</a> and <a href="http://laurent.bachelier.name/2012/05/github-kinda-sucks/" target="_blank">some aren't fond of it</a>.
<!--more-->

My software development clients are typically small companies wanting fairly simple web applications. They hire me because having a developer on staff doesn't fit into their budget or business plan. They don't usually care what the source code for their project looks like, but they do care about tracking issues.

Because of the scope of these applications, it's rare that I work with other programmers. This meant that I wasn't using any of the special features of GitHub for private code repositories, so in October I cancelled my subscription.

<a href="https://eriklarneson.freshbooks.com/refer/www"><img src="/wp-content/uploads/2014/12/FreshBooks_Cloud_Accounting_Logo.png#right" alt="FreshBooks" /></a>My private repositories are now self-hosted, and I browse them using <a href="http://gitlist.org/" target="_blank">GitList</a>, which bills itself as "an elegant and modern git repository viewer." It looks nice, and I've got no complaints. For issue tracking, I use <a href="https://eriklarneson.freshbooks.com/refer/www" target="_blank">Freshbooks</a>, a SaaS accounting system. With Freshbooks, I can not only keep track of bug reports and issues, but I can record time spent on bug reports, feature creep, and other client-related issues.

GitList and Freshbooks isn't a perfect solution. At some point, I will be working with another developer, and we will need a way to track bugs and issues internally. When that happens, I plan to deploy <a href="http://gitolite.com/gitolite/index.html" target="_blank">Gitolite</a> and find some new issue-tracking solution.

By the way, another reason I stopped using paid GitHub features is because <a href="http://www.businessweek.com/articles/2013-06-20/github-got-silly-rich-dot-next-step-make-more-awesome" target="_blank">they've already made plenty of money</a>, and I'm not sure they're doing the right things with all of that money.

I'm curious about what others are using. How does your incredibly small team track code changes and issues? Are all of your software issues internal, or are you developing for clients? I'd love to hear some ideas.
