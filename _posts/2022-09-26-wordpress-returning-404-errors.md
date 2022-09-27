---
title: Solving a Returning 404 Error in WordPress
author: "Erik L. Arneson"
layout: post
permalink: /2022/09/wordpress-returning-404-errors
comments: true
---

A WordPress website that I maintain was running into a problem. The most recently published post would periodically lose its permalink and
return a 404 error. I tried to find a solution.
<!--more-->

## Save the Permalink Settings Page

The solution you see frequently mentioned for this error is to visit the settings page for Permalinks and save the settings again. From the
WordPress admin dashboard, go to **Settings > Permalinks** and click to open that page. Then scroll down and click **Save**.

This worked *temporarily* for me. Something else was periodically causing the permalink for *only the latest article* to be lost.

## Finding the plugin to blame

My next step was to examine all of the installed plugins, to see if something else was to blame. Since the problem was recurring
periodically, I used the [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin to watch the various 
[wp-cron jobs]({% post_url 2016-03-05-alternate-ways-to-call-wp-cron %}). There were a lot of them!

I immediately suspected the caching plugin. This WordPress site uses [W3 Total Cache](https://www.boldgrid.com/w3-total-cache/), which is a
pretty sophisticated and large plugin with a lot of options. It provides a page cache, database cache, and a number of other caches which
*seemed* like they could be responsible for the problem.

I went through the W3 Total Cache settings, made sure they were up to date, and clicked **Save** on a few of the settings pages.

The returning 404 problem seems to have stopped.

What did I do to fix it?

*I don't know.*

Sometimes WordPress is a pain to work with. This problem frustrated me for a week and I do not know what it was nor if it will return.
