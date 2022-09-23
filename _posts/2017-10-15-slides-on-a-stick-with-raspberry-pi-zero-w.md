---
id: 754
title: 'Slides on a Stick with Raspberry Pi Zero W'
date: '2017-10-15T12:38:19-07:00'
author: 'Erik Arneson'
layout: post
guid: 'https://arnesonium.com/?p=754'
permalink: /2017/10/slides-on-a-stick-with-raspberry-pi-zero-w/
wp-syntax-cache-content:
    - "a:2:{i:1;s:747:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n</pre></td><td class=\"code\"><pre class=\"bash\" style=\"font-family:monospace;\"><span style=\"color: #c20cb9; font-weight: bold;\">sudo</span> apt update <span style=\"color: #000000; font-weight: bold;\">&amp;&amp;</span> <span style=\"color: #c20cb9; font-weight: bold;\">sudo</span> apt upgrade <span style=\"color: #660033;\">-y</span>\n<span style=\"color: #c20cb9; font-weight: bold;\">sudo</span> apt <span style=\"color: #c20cb9; font-weight: bold;\">install</span> <span style=\"color: #660033;\">-y</span> apvlv</pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">sudo apt update &amp;&amp; sudo apt upgrade -y\nsudo apt install -y apvlv</p></div>\n\";i:2;s:906:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n</pre></td><td class=\"code\"><pre class=\"ini\" style=\"font-family:monospace;\">set fullscreen <span style=\"color: #000066; font-weight:bold;\">=</span><span style=\"color: #660066;\"> yes</span>\nset zoom <span style=\"color: #000066; font-weight:bold;\">=</span><span style=\"color: #660066;\"> fitwidth</span>\nset continuous <span style=\"color: #000066; font-weight:bold;\">=</span><span style=\"color: #660066;\"> no</span>\nset scrollbar <span style=\"color: #000066; font-weight:bold;\">=</span><span style=\"color: #660066;\"> no</span>\nset content <span style=\"color: #000066; font-weight:bold;\">=</span><span style=\"color: #660066;\"> no</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">set fullscreen = yes\nset zoom = fitwidth\nset continuous = no\nset scrollbar = no\nset content = no</p></div>\n\";}"
image: /wp-content/uploads/2017/10/RaspberryPiZeroW-MiniKeyboard.jpg
categories:
    - Projects
    - Writing
tags:
    - 'best practices'
    - 'public speaking'
    - 'raspberry pi'
    - tutorial
    - writing
---

If you give presentations often, you will know that one of the biggest headaches is managing slides. You have to figure out software, hardware, and connectors. I've usually resorted to bringing a USB thumb drive with my slides in PDF and ODP format, but then I came across an even better idea: the Raspberry Pi Zero W (or RPi0W).
<!--more-->

Previously, I had been playing with using <a href="https://arnesonium.com/2017/04/raspberry-pi-gpio-with-erlang/">Erlang on the RPi0W to control stepper motors</a>, but this seemed more useful. Follow along to see how I created a portable presentation machine that's about the size of a pack of gum.

## Hardware Used

<iframe style="width:120px;height:240px;float:right;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=aarggaminggroup&marketplace=amazon&region=US&placement=B01HG8DB5E&asins=B01HG8DB5E&linkId=5a34d4956347681153b14f52f9ee75a1&show_border=true&link_opens_in_new_window=true"></iframe>
I purchased the RPi0W as part of a kit so it would have a nice case and all of the connectors I needed. I also wanted a good way to control it, so I found an inexpensive mini wireless keyboard and mouse on Amazon. You can follow my example or find your own alternatives.

* <a href="https://www.adafruit.com/product/3410" rel="noopener" target="_blank">Raspberry Pi Zero W Budget Pack from Adafruit</a>
* <a href="http://amzn.to/2yq8A3E" rel="noopener" target="_blank">Aerb 2.4GHz Mini Wireless Keyboard with Mouse Touchpad</a>

## Installing and Configuring Software

I'm not the first person to think of using a Raspberry Pi for slides and presentations. Rob Reilly wrote a <a href="http://www.raspberry-pi-geek.com/Archive/2014/06/Equip-your-Pi-for-slide-and-video-presentations" rel="noopener" target="_blank">great article on this topic for Raspberry Pi Geek</a> which provides some great tips and recommendations. However, I wanted to create a presentation machine that was even faster and more portable.

I used <a href="https://www.raspberrypi.org/downloads/raspbian/" rel="noopener" target="_blank">Raspbian Stretch with Desktop</a>, but knew that I would run into memory and performance issues on the RPi0W. It only has 512MB of RAM, so I would need to use small, efficient applications and cut out unnecessary services and applications on the device. It's really important that the machine boots up fast and gets running quickly.

Quickly I gave up on the idea of running LibreOffice Impress. Instead, I would use a lightweight full-screen PDF viewer. I tested out a number of the smaller PDF readers available on Raspbian before finally settling on <a href="https://naihe2010.github.io/apvlv/" rel="noopener" target="_blank">apvlv</a>. This reader is tiny, fast, and configurable. It also requires some additional setup.

Install apvlv on your system with the following commands.

<pre lang="bash" line="1">
sudo apt update && sudo apt upgrade -y
sudo apt install -y apvlv
</pre>

These commands might take a while. When you are done, edit the apvlv preferences file. You will probably do this using the command `nano ~/.apvlvrc` but you might want a different text editor. Edit to look like this.

<pre lang="ini" line="1">
set fullscreen = yes
set zoom = fitwidth
set continuous = no
set scrollbar = no
set content = no
</pre>

## Displaying Slides

You will need to get your PDF slides onto the RPi0W. I usually use a webpage to download them, or copy them over via `scp`. Do whatever feels best to you.

Simply use the `apvlv` command from a terminal or the menu to load your PDF file. The interface is a little arcane, but easy to get the hang of. You can use the up and down arrows on the mini keyboard to go forward and backward one slide. To exit, hit `q` and to go to a specific slide type `:go <number>` and replace "&lt;number&gt;" with the slide number.

The RPi0W still takes a little while to boot, but you now have an extremely portable device that plugs into any HDMI screen or projector and displays your slides with as little fuss as possible!
