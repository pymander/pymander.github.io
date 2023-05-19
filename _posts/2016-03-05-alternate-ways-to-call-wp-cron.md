---
id: 585
title: 'Alternate Ways to Call wp-cron'
date: '2016-03-05T09:09:28-08:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=585'
permalink: /2016/03/alternate-ways-to-call-wp-cron/
wp-syntax-cache-content:
    - "a:3:{i:1;s:763:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n</pre></td><td class=\"code\"><pre class=\"php\" style=\"font-family:monospace;\"><span style=\"color: #009933; font-style: italic;\">/** Use alternate WP_CRON method with redirects. */</span>\n<span style=\"color: #990000;\">define</span><span style=\"color: #009900;\">&#40;</span><span style=\"color: #0000ff;\">'ALTERNATE_WP_CRON'</span><span style=\"color: #339933;\">,</span> <span style=\"color: #009900; font-weight: bold;\">true</span><span style=\"color: #009900;\">&#41;</span><span style=\"color: #339933;\">;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">/** Use alternate WP_CRON method with redirects. */\ndefine('ALTERNATE_WP_CRON', true);</p></div>\n\";i:2;s:1241:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n</pre></td><td class=\"code\"><pre class=\"bash\" style=\"font-family:monospace;\"><span style=\"color: #666666; font-style: italic;\"># Call wp-cron regularly</span>\n<span style=\"color: #000000; font-weight: bold;\">*/</span><span style=\"color: #000000;\">15</span> <span style=\"color: #000000; font-weight: bold;\">*</span> <span style=\"color: #000000; font-weight: bold;\">*</span> <span style=\"color: #000000; font-weight: bold;\">*</span> <span style=\"color: #000000; font-weight: bold;\">*</span> curl http:<span style=\"color: #000000; font-weight: bold;\">//</span>www.example.com<span style=\"color: #000000; font-weight: bold;\">/</span>wp-cron.php <span style=\"color: #000000; font-weight: bold;\">&gt;</span> <span style=\"color: #000000; font-weight: bold;\">/</span>dev<span style=\"color: #000000; font-weight: bold;\">/</span>null <span style=\"color: #000000;\">2</span><span style=\"color: #000000; font-weight: bold;\">&gt;&amp;</span><span style=\"color: #000000;\">1</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\"># Call wp-cron regularly\n*/15 * * * * curl http://www.example.com/wp-cron.php &gt; /dev/null 2&gt;&amp;1</p></div>\n\";i:3;s:767:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n</pre></td><td class=\"code\"><pre class=\"php\" style=\"font-family:monospace;\"><span style=\"color: #009933; font-style: italic;\">/** Disable built-in cron in favor of system crontab */</span>\n<span style=\"color: #990000;\">define</span><span style=\"color: #009900;\">&#40;</span><span style=\"color: #0000ff;\">'DISABLE_WP_CRON'</span><span style=\"color: #339933;\">,</span> <span style=\"color: #009900; font-weight: bold;\">true</span><span style=\"color: #009900;\">&#41;</span><span style=\"color: #339933;\">;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">/** Disable built-in cron in favor of system crontab */\ndefine('DISABLE_WP_CRON', true);</p></div>\n\";}"
categories:
    - Programming
tags:
    - 'best practices'
    - php
    - programming
    - 'web development'
    - 'web performance'
    - wordpress
---

WordPress includes a job scheduling system called wp-cron. The default method for scheduled jobs is for wp-cron to be checked on each page load, which has the potential to slow down your website while background jobs are run. Check out these other options that help maintain the user experience on your WordPress site while still running important tasks in the background.
<!--more-->

## Using ALTERNATE_WP_CRON

The `ALTERNATE_WP_CRON` method uses a quick, nearly invisible redirect to direct an incoming user to a new request while the old one continues running, executing background jobs. This is an easy, effective method and it works really well if you don't have access to `crontab` on your hosting site. Even though this method adds some elements to the page URL, it's only triggered when background jobs need to be run. To enable it, follow these instructions:

1. Open your site's **wp-config.php** in your text editor.
1. After the lines containing your database credentials, add the following lines:
   ```php
   /** Use alternate WP_CRON method with redirects. */
   define('ALTERNATE_WP_CRON', true);
   ```

<a href="http://wordpress-hackers.1065353.n5.nabble.com/ALTERNATE-WP-CRON-Is-it-worth-it-td39843.html" target="_blank">Read more about the `ALTERNATE_WP_CRON` method here.</a>

## Using Crontab

If you have access to a shell on your web host and can run `cron` jobs, this method might be the best. It ensures that background jobs will get run, even when your website isn't getting any visitors. It also runs background jobs without requiring a redirect or any additional delays that will be noticed by users. Here's how you do it.

### Add a Crontab Entry

1. Run `crontab -e`
1. Add the following lines to the end of your crontab file:
   ```bash
   # Call wp-cron regularly
   */15 * * * * curl http://www.example.com/wp-cron.php > /dev/null 2>&1
   ```

Make sure you replace "www.example.com" with your website's hostname. The `*/15` specifies that **wp-cron.php** will be called every 15 minutes. If you would like to change this, replace the 15 with a different number.

### Disable Built-in wp-cron

The next step is to disable the built-in call to wp-cron in WordPress.

1. Open your site's **wp-config.php** in your text editor.
1. After the lines containing your database credentials, add the following lines:
   ```php
   /** Disable built-in cron in favor of system crontab */
   define('DISABLE_WP_CRON', true);
   ```

For more details on this method, <a href="https://easyengine.io/tutorials/wordpress/wp-cron-crontab/" target="_blank">check out this page on EasyEngine</a>.



