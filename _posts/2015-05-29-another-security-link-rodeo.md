---
id: 408
title: 'Security Link Rodeo: The Patriot Act, Logjam, and Hacked Websites'
date: '2015-05-29T10:51:59-07:00'
author: 'Erik Arneson'
layout: post
guid: 'https://arnesonium.com/?p=408'
permalink: /2015/05/another-security-link-rodeo/
image: /wp-content/uploads/2015/05/800px-Log_Jam.jpg
categories:
    - Security
    - Uncategorized
tags:
    - cryptography
    - 'link rodeo'
    - logjam
    - NSA
    - security
---

Kind of good news: Senators Ron Wyden and Rand Paul teamed up to <a href="http://boingboing.net/2015/05/23/ron-wyden-and-rand-paul-kill-t.html" target="_blank">squash the Patriot Act extension</a>. It's going to expire on June 1st unless another vote is called on the 31st. The <a href="https://en.wikipedia.org/wiki/USA_Freedom_Act" target="_blank">USA Freedom Act</a> (which I think is good?) unfortunately didn't make it through Senate, either.

https://twitter.com/RonWyden/status/601979044318547969

Regarding the Logjam vulnerability that <a href="https://arnesonium.com/2015/05/security-link-rodeo/">I mentioned last week</a>, if you've got a cloud server and you're generating new Diffie-Hellman parameters, make sure you've got good random numbers! Digital Ocean has <a href="https://www.digitalocean.com/community/tutorials/how-to-setup-additional-entropy-for-cloud-servers-using-haveged" target="_blank">advice on generating sufficient random data on cloud servers</a>. The short version is that you should be running <a href="http://www.issihosts.com/haveged/" target="_blank">haveged</a> on all of your servers.

https://twitter.com/dholmesf5/status/601848616525942784
<!--more-->
Here's an <a href="http://blog.cryptographyengineering.com/2015/05/attack-of-week-logjam.html" target="_blank">informative and easy-to-understand description</a> of the Logjam attack by Matthew Green. He just happens to be one of the cryptographers who helped discover the problem. And the EFF talks about the implications of Logjam and how the <a href="https://www.eff.org/deeplinks/2015/05/logjam-part-2-did-nsa-know-years-internet-was-broken" target="_blank">NSA is a bunch of jerks who really don't care about our privacy at all</a>. Seriously, NSA. It's like you don't even want to be our friend!

The creepy mobile spyware app mSpy was recently hacked, resulting in a <a href="http://krebsonsecurity.com/2015/05/mspy-denies-breach-even-as-customers-confirm-it/">leak of about 400,000 user accounts</a>. They spent a long time denying it. You can check <a href="https://haveibeenpwned.com/PwnedWebsites#mSpy" target="_blank">HaveIBeenPwned</a> to see if you're one of the users.


Last week it was also revealed that <a href="http://gizmodo.com/huge-adultfriendfinder-hack-might-have-exposed-your-sex-1706181502" target="_blank">AdultFriendFinder was hacked</a>, leaking about 3.9 million user records. Even worse, it is possible that "AdultFriendFinder may not get rid of data after customers leave." This is just a reminder that you need to <a href="http://blog.trendmicro.com/trendlabs-security-intelligence/being-mindful-about-what-you-share/" target="_blank">be mindful about what you share</a> on the Internet. If you want to keep information secret and secure, make sure that <strong>you are the only one in control of it.</strong>

https://twitter.com/SwiftOnSecurity/status/601854610018414592

<small><i>The featured image for this post is from Flickr user <a href="http://www.flickr.com/people/7147684@N03" target="_blank">Jason Hollinger</a>.</i></small>