---
id: 690
title: 'Raspberry Pi GPIO with Erlang'
date: '2017-04-10T10:23:14-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=690'
permalink: /2017/04/raspberry-pi-gpio-with-erlang/
categories:
    - Programming
tags:
    - erlang
    - programming
    - 'raspberry pi'
---

Raspberry Pis are super cool. One of the neat things about them is that they have a ton of general purpose input/output (GPIO) pins, so you can use them to control all sorts of external devices. Unfortunately, most of the examples and applications are written in Python. I know, a lot of people really love Python, but it's just not my cup of tea.
<!--more-->

Enter the <a href="https://github.com/paoloo/gpio" target="_blank">Erlang πGPIO library</a> by <a href="https://paoloo.github.io/" target="_blank">Paolo Oliveira</a>! This is a simple, straightforward library that implements the RPi GPIO stuff for Erlang. Using it, I have created an Erlang library to control a 28BYJ-48 5V stepper motor with a ULN2003 controller board.

<a class="button" href="https://github.com/pymander/stepper" target="_blank">Check out the library here.</a>

https://www.instagram.com/p/BSp2ZdSA0cg/?taken-by=pymander
