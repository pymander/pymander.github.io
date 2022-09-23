---
id: 647
title: 'Installing Ansible 2.2.0 on a Raspberry Pi'
date: '2016-11-29T10:19:14-08:00'
author: 'Erik Arneson'
layout: post
guid: 'https://arnesonium.com/2016/11/installing-ansible-2-2-0-on-a-raspberry-pi/'
permalink: /2016/11/installing-ansible-2-2-0-on-a-raspberry-pi/
categories:
    - Programming
tags:
    - ansible
    - devops
    - 'raspberry pi'
---

[Ansible](https://www.ansible.com/) is a powerful IT automation tool with lots of modules and active development. Unfortunately, the only version available for stock Raspberry Pi is old. I wanted to use some of the newer modules and features, so I needed to install at least version 2.2. This tutorial will walk you through installing Ansible 2.2.0 on a Raspberry Pi running Raspbian "jessie". The version of Raspbian I did this on was tagged "2016-09-23".

Creating a Debian package for Ansible requires a lot of prerequisites, including [TeX Live](https://www.tug.org/texlive/), which can take up almost 2GB of space. If you don't want to do this yourself, you can try downloading the [Ansible package I built](http://arnesonium-downloads.s3.amazonaws.com/ansible_2.2.0.0-100.git201611010320.cdec853.HEAD~unstable_all.deb). It might be old by the time you read this, though!

## Install Prerequisite Packages

Log into the terminal of your Raspberry Pi and run the following command to install the required packages.

``` shell
sudo apt install asciidoc devscripts python-dev libffi-dev libssl-dev cdbs sshpass -y
```

## Download and Prepare the Ansible Repo

Ansible is available for download from GitHub. Use the following commands to retrieve the Ansible source code and modules.

``` shell
git clone git://github.com/ansible/ansible.git --recursive
cd ansible/
```

Use these commands as a guide to select and checkout a stable Ansible release. The list of tags should give you clues as to which tag is the latest and not a development version.

``` shell
git tag -l
git checkout v2.2.0.0-1
make deb
```

Your new .deb package will be located in **./deb-build/unstable/**. You can install it with the `dpkg` command like this.

``` shell
sudo dpkg -i ./deb-build/unstable/ansible_2.2.0.0-100.git201611010320.cdec853.HEAD~unstable_all.deb
```

## Using the Newest Ansible Features

My goal was to use Ansible on my Raspberry Pi to implement [my poor-man's dynamic DNS solution](https://arnesonium.com/2016/07/a-poor-mans-dynamic-dns-with-ansible-and-amazon-route53/). However, you might also want to use your RPi as a centralized Ansible hub to control a cluster like [the Raspberry Pi Dramble](http://www.pidramble.com/).  Also consider checking out the [ansible-simple-slurm-cluster repo](https://github.com/ajdecon/ansible-simple-slurm-cluster) on GitHub for more ideas.

Let me know how you're using Ansible on your Raspberry Pi in the comments!

