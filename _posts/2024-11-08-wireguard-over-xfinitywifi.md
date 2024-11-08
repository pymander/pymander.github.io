---
title: Using WireGuard over xfinitywifi
author: "Erik L. Arneson"
layout: post
permalink: /2024/11/using-wireguard-over-xfinitywifi
comments: true
tags:
- security
- networking
- howto
---

If you are a Comcast Xfinity customer, you hopefully know that you can log into WiFi hotspots wherever other Xfinity customers have them enabled, all using the SSID `xfinitywifi`. You may have also figured out by now that [WireGuard](https://www.wireguard.com/) doesn't seem to work over this WiFi service without additional tweaking.

Well, I have tweaked a WireGuard configuration until it seems to work.
<!--more-->

I searched the Web for quite a while to find a good solution, and there seemed to be a general *feeling* that the MTU needed to be adjusted. Lots of people offered various solutions.

Through some experimentation, I discovered that on the client-side WireGuard configuration, the maximum transmission unit (MTU) needed to be set to 1280. Apparently this is a significant number because it's the [lowest possible MTU for an IPv6 network](https://en.wikipedia.org/wiki/Maximum_transmission_unit#MTUs_for_common_media). Setting the MTU so low will impact performance, but if you are going through a WireGuard VPN, performance probably isn't your biggest concern.

In the end, your client-side WireGuard configuration, which is located in `/etc/wireguard/wg0.conf` if you are on Linux, should look like the example below. Note in particular the `MTU` and `AllowedIPs` line.


```
[Interface]
PrivateKey = <your private key>
Address = <your ip address and netmask>
DNS = <your DNS server>
# This MTU line is the important one!
MTU = 1280

[Peer]
PublicKey = <your public key>
PresharedKey = <your pre-shared key>
Endpoint = <your endpoint>:51820
# This is important for client-side routing!
AllowedIPs = 0.0.0.0/0, ::0/0
PersistentKeepalive = 25
```

[![GL.iNet GL-SFT1200 Opal](/assets/img/sft1200_1.webp#right)](https://amzn.to/4hI6hMI)
This became important to me because I've been shifting over to using a secure travel router when I am out and about. The router I chose to go with is the [GL.iNet GL-SFT1200 Opal](https://amzn.to/4hI6hMI), and it has built-in WireGuard support that you can enable with a switch on the side. It is very cute and effective. This allows me to use WireGuard to create a VPN tunnel back to [my home network](/2016/07/a-poor-mans-dynamic-dns-with-ansible-and-amazon-route53/), which gives me the ability to use my dual [pi-hole](https://pi-hole.net/) setup from anywhere in the world!

If you have been struggling with that pesky `xfinitywifi` network and its weird settings, I hope this helps. It took me too long to find the right solution!
