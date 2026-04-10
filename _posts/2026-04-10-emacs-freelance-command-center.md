---
title: Emacs as the Freelancer's Command Center
author: "Erik L. Arneson"
layout: post
permalink: /2026/04/emacs-freelance-command-center
image: /assets/img/featured/ramelli-artifisioso-machine-1200px.jpg
comments: true
tags:
- emacs
- org-mode
- programming
- writing
- music
- wordpress
- emacs-lisp
- email
- git
- tools
---

Freelancing for small businesses and organizations leads to a position where you are juggling a
number of projects for multiple clients. You need to keep track of a number of tasks ranging from
software development to sending emails to project management. This is a lot easier when you have a
system that can do a bunch of the work for you, which is why I use Emacs as my freelancer command
center.

I would like to share some of the tools and workflows I use in Emacs to help me keep on top of
multiple clients' needs and expectations.

<!--more-->

## Organization with org-mode

It should be no surprise that at the center of my Emacs command center is [org-mode](https://orgmode.org/). I have already
[written about it a lot](file:///tags/org-mode). Every org-mode user seems to have their own way of keeping track of things,
so please don't take my organizational scheme as some kind of gospel. A couple of years ago, I wrote
about [how I handle to-do lists in org-mode](file:///2024/10/todo-lists-in-org-mode), and I am still using that method for to-do keywords.
However, file structure is also important. I have a number of core files.


### `Freelance.org`

This top-level file contains all of my ongoing business tasks, such as tracking potential new
clients, recurring tasks like website maintenance and checking my [MainWP dashboard](https://mainwp.com/). I also have
recurring tasks for invoicing, tracking expenses, and other important business things.

This file is also where I have my primary time tracking and reporting. Org-mode already supports
this pretty nicely, I just use the built-in [clocktable feature](https://orgmode.org/manual/The-clock-table.html).


### `Clients/*.org`

Clients that have large projects or ongoing business get their own file. This makes organization a
lot easier. All tasks associated with a client and their various projects end up in these individual
files. The important part is making sure that these files are included in the time-tracking
clock table *and* your org-mode agenda, so you can see what is going on every week.


### References and Linking

I have `C-c l` bound to `org-store-link` and use it all the time to link to various files,
directories, URLs, and even emails. I can then use those links in my client notes, various tasks in
my to-do list, and so on. This helps me keep my agenda organized even when my filesystem and
browser bookmarks are a bit of a mess.


## Email with mu4e

I have been reading and managing my email in Emacs for over 25 years. There have been a few breaks
here and there where I have tried out other software or even web mail clients, but it has always been
a headache. I return to Emacs! Long ago, I used [VM](https://gitlab.com/emacs-vm/vm) (which seems to have taken on new life!), but
currently I use [mu4e](https://djcbsoftware.nl/code/mu/mu4e/index.html).

This gives me a ton of power and flexibility when dealing with email. I have custom functions to
help me compose and organize my email, and I can use `org-store-link` to keep track of individual
emails from clients as they relate to agenda items. I even have a function to convert emails that I
have written in Markdown into HTML email, and one that searches for questions in a client email to
make sure I haven't missed anything.

The ability to write custom code to both process and create email is extremely powerful and a great
time saver.


## Writing Code

I don't know what else to say about this, I use Emacs for doing all of my software development. I
make sure to use [Eglot](https://github.com/joaotavora/eglot) whenever there is a language server available, and I try to leverage all the
fancy features offered by Emacs whenever possible. The vast majority of projects for clients are PHP
(thanks [WordPress](file:///wordpress)), Go, JavaScript, and TypeScript.


## Writing Words

Previously, I have shared quite a bit about [writing in Emacs](file:///tags/writing/). I like to start everything in
org-mode, but I also write quite a bit in Markdown. Emacs has become a powerful tool for writing. I
use the [Harper language server](https://writewithharper.com/) along with Eglot to check grammar and spelling.


## Track All Changes with Magit

Version control is essential, a lesson I have learned over 30+ years of software development. While
[Git](https://git-scm.com/) is not part of Emacs, the software I use to interface with Git is. [Magit](https://magit.vc/) is a Git user interface
that runs entirely in Emacs. I use it to track my writing, my source code, and even all of my
org-mode files. Using version control is so essential that I have a weekly repeating agenda task
reminding me to check all of my everyday files to make sure I have checked-in my changes for the
week.


## Thinking Music with EMMS

I like to have some soothing background music when I am programming, writing, or otherwise working
on my computer. However, if that background music has lyrics, it can be really distracting. It is
easy to make a playlist for various suitable [SomaFM](https://somafm.com/) channels to load into [EMMS (the Emacs Multimedia
System)](https://www.gnu.org/software/emms/) using the command `M-x emms-play-playlist`.

Try saving the following into `playlist.el` somewhere, and using it the next time you are writing:

```emacs-lisp
 ;;; This is an EMMS playlist file Play it with M-x emms-play-playlist
 ((*track* (type . url) (name . "https://somafm.com/synphaera.pls"))
  (*track* (type . url) (name . "https://somafm.com/gsclassic.pls"))
  (*track* (type . url) (name . "https://somafm.com/sonicuniverse.pls"))
  (*track* (type . url) (name . "https://somafm.com/groovesalad.pls")))
```

And make sure to check out SomaFM's selection to find some good background music that suits your
tastes!

## And the tools I have missed

There are undoubtedly Emacs tools that I have missed in this brief overview. I have been wracking my
brain as I write, trying to see what I have forgotten or overlooked. Frankly, Emacs has become such
a central part of the organization for my freelancing that there are probably many tools, packages,
and processes that I use every day without thinking about it too much.

Emacs makes it possible for me to freelance for multiple clients and small businesses without losing
my mind with organization and task management. The tools it provides allow me to stay on top of
multiple projects, handle client relationships, and keep track of years worth of tasks,
communications, and projects. Without it, I'd be sunk!

What Emacs tools are you using to manage your freelance business? I am always looking for ways to
improve or streamline my process.

