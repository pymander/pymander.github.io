---
id: 503
title: 'How to Increase Your Privacy on the Web'
date: '2015-06-12T08:01:30-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=503'
permalink: /2015/06/privacy-on-the-web/
image: /wp-content/uploads/2015/06/Screenshot-from-2015-06-09-211510.png
categories:
    - Security
tags:
    - cryptography
    - firefox
    - howto
    - privacy
    - security
---

This week, I'm going to share a few links about how to lock down your PC to increase your privacy on the Web. There are a number of things that can be done, even if it's something as small as <a href="https://support.mozilla.org/en-US/kb/tracking-protection-firefox" target="_blank">turning on tracking protection</a> in Firefox. As I've <a href="https://arnesonium.com/?s=privacy">written about many times</a>, our privacy has been under attack since before the Internet existed. You are not powerless, <a href="http://techcrunch.com/2015/06/06/the-online-privacy-lie-is-unraveling/" target="_blank">regardless of what you may think</a>.

https://twitter.com/runasand/status/606958744396828673
<!--more-->

<h2>Why Firefox?</h2>

If you want to increase your privacy, Firefox is your best bet. The author of Security Spread wrote a <a href="http://securityspread.com/2013/08/12/private-secure-browser/" target="_blank">thorough analysis</a>, in which he said, "I’m looking at this review from just the security and privacy perspective and I must say that Mozilla’s Firefox is the best. Both when it comes to 'out of the box' features and available add-ons." He's not the only one. Many security experts, analysts, and amateurs seem to agree that Firefox provides the strongest privacy protection.

Firefox is also available for most mobile devices, as are the extensions I mention below.

<h2>Configuring For Privacy</h2>

<img src="https://arnesonium.com/wp-content/uploads/2015/06/Screenshot-from-2015-06-10-211011-300x113.png" alt="Firefox privacy settings" width="300" height="113" class="alignright size-medium wp-image-508" />Now that you've listened to me and a bunch of other strangers on the Internet, you've got Firefox installed. Let's get started! The first and easiest step is the "Do not track" setting. Go into the <strong>Privacy</strong> panel of your <strong>Preferences</strong> and check <strong>Tell sites that I do not want to be tracked.</strong>

This setting sounds good, but it might not do much. Mozilla says on their <a href="https://www.mozilla.org/en-US/firefox/dnt/" target="_blank">website</a>, "Companies are starting to support Do Not Track, but you may not notice any changes initially." This means that it's only the nice, polite companies who didn't realize they were doing something unsavory who are going to stop tracking you. 

<a href="https://arnesonium.com/wp-content/uploads/2015/06/Screenshot-from-2015-06-11-085459.png"><img src="https://arnesonium.com/wp-content/uploads/2015/06/Screenshot-from-2015-06-11-085459-300x110.png" alt="Disable third-party cookies" width="300" height="110" class="alignright size-medium wp-image-519" /></a>You should also disable <strong>third-party cookies</strong>. These are cookies set by a website that can be read by another. For example, Facebook "Like" buttons do this. Sometimes they're necessary, but you should experiment and see what works for you. You should still be on the <strong>Privacy</strong> panel, so select "Use custom settings for history" from the <strong>History > Firefox will:</strong> drop down. Then change <strong>Accept third-party</strong> cookies to "Never".

These settings are a good start, but there's more we can do. To go further, you'll need some add-ons and plugins.

<h2>Privacy-Enhancing Plugins</h2>

Remember that you need to try to protect your privacy not only from parties trying to track you via cookies, ads, and websites, but also network providers, corporations, and governments who have access to your raw Internet traffic. The add-ons below attempt to address both of these situations.

<h3>HTTPS Everywhere</h3>

<img src="https://arnesonium.com/wp-content/uploads/2015/06/https-everywhere-logo.png" alt="https-everywhere-logo" width="128" height="128" class="alignright size-full wp-image-514" />The Electronic Freedom Foundation provides <a href="https://www.eff.org/https-everywhere" target="_blank">HTTPS Everywhere</a>. This is an extension that works for Firefox, Chrome, and Opera, so even if you ignored my advice to install Firefox, you should still be able to use this. It does everything it can to try to make an encrypted connection to a website. In Firefox, it provides you with a drop down menu that lets you know how many encrypted and unencrypted connections you've made to the current page.

<h3>Ghostery</h3>

<img src="https://arnesonium.com/wp-content/uploads/2015/06/Screenshot-from-2015-06-10-220237.png" alt="Ghostery logo" width="218" height="85" class="alignright size-full wp-image-515" /><a href="https://www.ghostery.com/" target="_blank">Ghostery</a> is an extension that blocks third-party tracking. It works with Firefox, Safari, Chrome, and Opera. Currently, it claims to block 2,019 different trackers, which seems like a lot. It has a nice interface that lets you pick and choose which trackers you will block on each site. For instance, you could allow WordPress analytics to work on this website, or you could universally allow <a href="https://arnesonium.com/cedexis-radar-tracking-for-wordpress/">Cedexis Radar</a> for performance reasons.

<h3>Adblock Plus</h3>

On top of Ghostery, you'll want to install <a href="https://adblockplus.org/" target="_blank">Adblock Plus</a>. This extension is available for Firefox, Safari, Chrome, Opera, and a number of other lesser-known browsers. Addblock Plus can be used to block additional content and trackers that Ghostery might not be catching. However, it takes more configuration. You will want to visit the <a href="https://adblockplus.org/en/subscriptions" target="_blank">Addblock filter list</a> to decide what to block. 

<h3>And Others</h3>

There are other add-ons and extensions out there. <a href="http://www.makeuseof.com/tag/best-firefox-addons-for-enhancing-security-and-privacy/" target="_blank">Here's a pretty good list.</a> Note that I didn't cover some of the other staples, like <a href="https://addons.mozilla.org/en-US/firefox/addon/noscript/" target="_blank">NoScript</a>. This is because I don't want you to get frustrated by usability issues on the Web and give up on protecting your privacy all together.

<h2>Heavy-Duty Privacy: Tor</h2>

<img src="https://arnesonium.com/wp-content/uploads/2015/06/tor-logo.jpg" alt="tor-logo" width="150" height="101" class="alignleft size-full wp-image-516" />If you really want privacy, and you're really serious about it, you'll want to use <a href="https://www.torproject.org/" target="_blank">Tor</a>. Using it correctly takes some learning, though. I would advise you to read as much as you can, and then <a href="https://arnesonium.com/contact/">ask me questions about it</a>. To get started as fast as possible, you should check out the <a href="https://www.torproject.org/projects/torbrowser.html.en" target="_blank">Tor Browser</a>, which is of course based on Firefox.

<h2>That's Just a Start</h2>

Unfortunately, you have to remember that most eCommerce websites, advertisers, and governments don't want you to remain private. You will need to pay attention to what you're doing online. Be <a href="https://arnesonium.com/?s=mindful">mindful</a> of your activities and remember that anything you release into the wilds of the Internet might be traceable back to you---forever.



<blockquote>"Privacy is not something that I'm merely entitled to, it's an absolute prerequisite."
― Marlon Brando</blockquote>



<small><em>The featured image is a screenshot of the SSL certificate for <a href="https://rya.nc/" target="_blank">rya.nc</a>. RyanC writes about how he created the <a href="https://rya.nc/cert-tricks.html" target="_blank">certificate here</a>.</em></small>