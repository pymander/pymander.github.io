---
id: 4645
title: 'Some Great Fish Shell Plugins'
date: '2022-09-23T10:44:00-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=4645'
permalink: /2022/09/some-great-fish-shell-plugins/
categories:
    - Programming
tags:
    - automation
    - 'command line'
    - emacs
    - 'fish shell'
    - howto
    - ide
    - shell
comments: true    
---

<p> As a long-time Linux user, I am pretty comfortable with command line interfaces. However, as I started learning more about automation and how important it is to get your computer to do more work for you, I leaned toward wanting my command line shell to do more. Eventually I switched to <a href="https://fishshell.com/">fish shell</a>, a very user-friendly shell with excellent scripting capabilities that is far more readable and less obscure than bash. </p>
<!--more-->
<div id="outline-container-orgbd4e930" class="outline-2">
<h2 id="orgbd4e930">Plugins for fish</h2>
<div class="outline-text-2" id="text-orgbd4e930">
<p> There have been a few plugin managers over the years, but the one that seems to be the best maintained and most usable is <a href="https://github.com/jorgebucaran/fisher">fisher</a>, created by <a href="https://twitter.com/jorgebucaran">Jorge Bucaran</a>. It allows you to easily install plugins straight from GitHub repositories, while updates can be executed with a simple <code>fisher update</code> on the command line. </p>
</div>

<div id="outline-container-org0108c85" class="outline-3">
<h3 id="org0108c85">z</h3>
<div class="outline-text-3" id="text-org0108c85">
<p> <b>One of the greatest command-line time savers ever</b> is the <code>z</code> command. Originally a bash script, it has been ported to fish and, frankly, I love it. </p>

<ul class="org-ul">
<li><b>What does it do?</b> <code>z</code> provides shorthand for visiting directories based on a combination of frequency and recency&#x2014;or "frecency".</li>
</ul>

<p> If you frequently visit the <code>/opt/calibre</code> directory, a <code>z calib</code> command will allow you to jump straight there. </p>

<p> If you already have fisher installed, just use <code>fisher install jethrokuan/z</code> and start playing around with <code>z</code>. </p>

<p> <a href="https://github.com/jethrokuan/z">You can read more about <code>z</code> here.</a> </p>
</div>
</div>

<div id="outline-container-orga78b5fb" class="outline-3">
<h3 id="orga78b5fb">pisces</h3>
<div class="outline-text-3" id="text-orga78b5fb">
<p> <b>Your IDE has been handling your parenthesis for ages.</b> Now your shell can do the same! The <a href="https://github.com/laughedelic/pisces">pisces</a> plugin has automatic matching symbol management for parenthesis, braces, quotes, and others. </p>

<ul class="org-ul">
<li><b>Install it with fisher</b> using the command <code>fisher install laughedelic/pisces</code> and be matching parens in seconds!</li>
</ul>

<p> <a href="https://github.com/laughedelic/pisces">You can read more about the pisces plugin here.</a> </p>
</div>
</div>

<div id="outline-container-orgc02da30" class="outline-3">
<h3 id="orgc02da30">plugin-emacs</h3>
<div class="outline-text-3" id="text-orgc02da30">
<p> <b>Automation can help you interact with your editor</b> from your shell. The <a href="https://github.com/pymander/plugin-emacs">Emacs plugin for fish</a> was originally written for an unmaintained plugin manager called <a href="https://github.com/oh-my-fish/oh-my-fish">Oh My Fish</a>. However, I wanted the plugin to work with fisher, so I made <a href="https://github.com/pymander/plugin-emacs">my own fork</a>. </p>

<ul class="org-ul">
<li><b>How does it work?</b> This plugin adds easy commands like <code>ef</code> and <code>ed</code> that allow you to open files and directories in Emacs quickly.</li>
</ul>

<p> Install it quickly using the command <code>fisher install pymander/plugin-emacs</code> and <a href="https://github.com/pymander/plugin-emacs">read more about it here</a>. </p>
</div>
</div>

<div id="outline-container-orga8ddcd0" class="outline-3">
<h3 id="orga8ddcd0">vfish</h3>
<div class="outline-text-3" id="text-orga8ddcd0">
<p> <b>Emacs users have probably heard of vterm,</b> which is the <a href="https://github.com/akermu/emacs-libvterm">Emacs package that interacts with libvterm</a>. It is a powerful terminal emulator that runs in an Emacs buffer. I wrote <a href="https://github.com/pymander/vfish">a fish plugin called vfish</a> that simplifies using fish in vterm. </p>

<ul class="org-ul">
<li><b>How does it work?</b> Inside a vterm session, this plugin adds fish commands like <code>vf</code> and <code>vd</code> to open files and directories quickly. It mirrors the Emacs plugin.</li>
</ul>

<p> Install it using the command <code>fisher install pymander/vfish</code> and <a href="https://github.com/pymander/vfish">read more about it here</a>. Note that <b>it will require some code</b> to be added to your Emacs startup file.</p>
</div>
</div>

<div id="outline-container-orgf6c1785" class="outline-3">
<h3 id="orgf6c1785">apt</h3>
<div class="outline-text-3" id="text-orgf6c1785">
<p> For Debian and Ubuntu users, the <a href="https://github.com/oh-my-fish/plugin-apt">Oh My Fish apt plugin</a> works seamlessly with fisher. </p>

<ul class="org-ul">
<li><b>What does it do?</b> The apt plugin adds a wrapper around the <code>apt</code> and <code>apt-get</code> commands that simplify package management from the command line.</li>
</ul>

<p> Install this plugin quickly with <code>fisher install oh-my-fish/plugin-apt</code> and then <a href="https://github.com/oh-my-fish/plugin-apt">read more about it</a>. </p>
</div>
</div>
</div>

<div id="outline-container-orgef254fe" class="outline-2">
<h2 id="orgef254fe">What's your favorite fisher plugin?</h2>
<div class="outline-text-2" id="text-orgef254fe">
<p> I love finding plugins that can help me automate more of my everyday tasks and workflows. What's your favorite fisher plugin? </p>

<p> Leave a comment below and let me know! Be sure to include a link. </p>
</div>
</div>
