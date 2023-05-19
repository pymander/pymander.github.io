---
id: 337
title: 'Should WordPress Encrypt All Email?'
date: '2015-04-13T08:13:43-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'http://arnesonium.com/?p=337'
permalink: /2015/04/should-wordpress-encrypt-all-email/
categories:
    - Programming
    - Security
tags:
    - cryptography
    - openpgp
    - 'web development'
    - wordpress
---

WordPress sends out email sometimes, and it doesn't encrypt any of them by default. <a href="http://buli.waw.pl/wordpress-openpgp-emails/" title="Integration of WordPress and OpenPGP for a better security" target="_blank"><em>Integration of WordPress and OpenPGP for a better security</em></a> is a case study by Paweł Bulwan that examines the security implications of all of these emails. Are they leaking important information? Should WordPress site owners worry about them?
<!--more-->

<h2>Only Limited Security Threats</h2>

<img src="http://arnesonium.com/wp-content/uploads/2014/12/640px-Enigma-plugboard-300x204.jpg#right" alt="Enigma Plugboard" width="300" height="204" class="alignright size-medium wp-image-122" />

Mr. Bulwan only found five potential security threats, which is pretty good news. None of them are show-stoppers. However, I believe he missed something important, which is that any information that is leaked about login credentials can cause issues. Leaked information can be used to limit an attacker's problem space, reducing the complexity of an attack.

Mr. Bulwan's idea of providing OpenPGP encryption for any emails that WordPress sends is a great one. In fact, if WordPress provided an OpenPGP API, it would spell the obsolescence of my <a href="http://arnesonium.com/wordpress-openpgp/" title="OpenPGP Form Encryption for WordPress">OpenPGP Form Encryption for WordPress plugin</a>.

That would be really cool.
