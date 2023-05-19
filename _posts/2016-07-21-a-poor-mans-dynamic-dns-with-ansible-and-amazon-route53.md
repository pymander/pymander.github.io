---
id: 622
title: "A Poor-Man's Dynamic DNS with Ansible and Amazon Route53"
date: '2016-07-21T09:33:45-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=622'
permalink: /2016/07/a-poor-mans-dynamic-dns-with-ansible-and-amazon-route53/
image: /wp-content/uploads/2016/07/life-is-a-highway.jpeg
categories:
    - Programming
tags:
    - 'amazon web services'
    - ansible
    - aws
    - devops
    - networking
    - route53
    - yaml
---

I wanted to be able to configure a DNS hostname dynamically, but couldn't find an easy-to-use dynamic DNS client that suited my needs. Using <a href="http://ansible.com/">Ansible</a> and <a href="https://aws.amazon.com/route53/">Amazon Route53</a>, I put together a quick, effective solution.
<!--more-->

## Requirements

First, you need an AWS account with a Route53 DNS zone. I followed <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingNewSubdomain.html">these directions to create a subdomain</a>.

Next, you need a remote host that accessible via SSH. On that host, install Python and the <a href="https://github.com/boto/boto">Boto library</a>. Make sure that Boto is configured with sufficient AWS credentials to access and change your Route53 zone. 

## Ansible Configuration

*This section was updated on 2016-11-29 to reflect improvements I've made in the Ansible playbook.* 

Ansible made this task simple. In fact, the playbook below is mostly based on example recipes from the <a href="https://docs.ansible.com/ansible/route53_module.html">Ansible Route53 module documentation</a>. The YAML playbook should look like the example below. Replace `YOUR-ROUTE53-ZONE` with the zone you configured in Route53. Replace `YOUR-FULL-DYNAMIC-HOSTNAME` with the fully-qualified domain name that you'll use for dynamic DNS.

Note that this uses the [ipify_facts Ansible module](https://docs.ansible.com/ansible/ipify_facts_module.html). You can use the default value or pass `api_url` like I'm doing in this example.

``` yaml
---
- name: Update Dynamic IP
  hosts: localhost
  vars:
    dyn_zone: YOUR-ROUTE53-ZONE
    dyn_hostname: YOUR-FULL-DYNAMIC-HOSTNAME
  tasks:
    - name: Get public IP
      ipify_facts: api_url=https://arnesonium.com/api/yourip.php
      connection: local
    - name: Get existing host information
      register: dynip
      route53:
        command: get
        zone: "{{ dyn_zone }}"
        record: "{{ dyn_hostname }}"
        type: A
    - name: Delete existing host information
      when: ipify_public_ip != dynip.set.value
      route53:
        command: delete
        zone: "{{ dyn_zone }}"
        record: "{{ dynip.set.record }}"
        ttl: "{{ dynip.set.ttl }}"
        type: "{{ dynip.set.type }}"
        value: "{{ dynip.set.value }}"
    - name: Create new host record
      when: ipify_public_ip != dynip.set.value
      route53:
        command: create
        zone: "{{ dyn_zone }}"
        record: "{{ dyn_hostname }}"
        type: A
        ttl: 600
        value: "{{ ipify_public_ip }}"
```

## Running Your Playbook

I named my playbook **dyndns.yml**, so I run it with this shell command: 

```bash
ansible-playbook -vv dyndns.yml
```

The `-vv` increases the verbosity so you can see what's going on.

## The Next Step

Next, I need to convince this script to run every time my laptop's network comes back online. I'm sure there's a good way to do that, but I haven't spent much time looking into it.

Did this playbook work for you? Let me know! I'd love to get feedback on it.

