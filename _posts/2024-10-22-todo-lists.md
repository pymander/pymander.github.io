---
title: Examining To-Do Lists in Org-mode
author: "Erik L. Arneson"
layout: post
permalink: /2024/10/todo-lists-in-org-mode
comments: true
tags:
- emacs
- org-mode
- tools
---

When you are self-employed, you need to be very well organized. There is never anybody looking over your shoulder, reminding you of everything on your to-do list. You don't have a project manager reminding you of every step in your big projects. I use [Org-mode](https://orgmode.org/) in Emacs to manage all of my tasks, to-do lists, and projects.
<!--more-->

Many people have already [written about](https://www.badykov.com/emacs/be-productive-with-org-mode/) [why Org-mode](https://medium.com/emacs/how-i-tackle-projects-with-org-mode-ee5d6b08f41) [is a good choice](https://dl.acm.org/doi/fullHtml/10.5555/1344170.1344179) [for this](https://karl-voit.at/orgmode/), so I am not going to. I will just mention that many years ago, perhaps around 2007, I read [*Getting Things Done* by David Allen](https://amzn.to/3YgIo6j) and got inspired to implement something like it in Org-mode. The system has slowly evolved over the years, but it has also become unweildy.

For the past few years, I had been tagging my tasks with the states `TODO`, `NEXT`, and `DONE`, primarily. I had some extra states sitting around for things that got canceled or delegated, and at some point I added a `WAITING` tag for when I needed somebody else to finish something, first. But the problem was, the `TODO` items really piled up. They became uncomfortable to sort through.

Inspired by a [blog post by Sacha Chua](https://sachachua.com/blog/2024/10/shuffling-my-org-mode-unscheduled-tasks/) earlier this week, I cleaned up my to-do states. I added `STARTED` and `SOMEDAY`, then went through the big list of outstanding items and re-evaluated their proper states. `SOMEDAY` won in 80% of cases, which really cleaned up the list. Now I can begin my day with a custom agenda command that looks for just `NEXT` and `STARTED` tasks, so I know what is most important. And I can end my day looking at `TODO` tasks to see if any should be switched to `NEXT`.

Here is what my configuration looks like now. First, I configure `org-todo-keywords` to handle the various states that my to-do items need. I am hoping that someday I'll pare this down, but for now, this works.

```emacs-lisp
(setq org-todo-keywords 
      '((sequence "TODO(t)" "NEXT(n)" "STARTED(s!)" "WAITING(w@/!)" "|" "DONE(d!)")
        (sequence "SOMEDAY(o)" "|")
        (sequence "|" "DELEGATED(g@/!)" "CANCELLED(c!)")))
```

I then added a "daily driver" command to my agenda to let me see the most important tasks today. This would probably be a good place for `add-to-list` instead of `setq`, but it's just an example!

```emacs-lisp
(setq org-agenda-custom-commands
      '(("n" "Next tasks" ((todo "STARTED")
                           (todo "NEXT")))
```

Next, after Sacha suggested it in a post on Mastodon, I configured to-do items to automatically switch to the `STARTED` state when I clock-in to them.

```emacs-lisp
(setq org-clock-in-switch-to-state "STARTED")
```       

Finally, I have been playing around with configuring `org-stuck-projects` to be more useful. I tag all of my projects with a `@project` tag, and then have my to-do entries underneath them as keywords. I do not think that this works as intended yet. I don't think I will be able to figure out the proper settings here until I have another stuck project; let's hope that never happens, and I never need this report.

```emacs-lisp
(setq org-stuck-projects '("+@project/-DONE-SOMEDAY"
                          ;; Keywords to identify non-stuck projects
                          ("TODO" "NEXT" "STARTED")
                          ;; Keywords to identify stuck projects.
                          ("WAITING")
                          ""))
```

The only lesson that I can really hope to share with you, dear reader, is that it is a good idea to examine your task management system regularly to fine-tune it to your needs. What I have noticed is that I can come up with great task management plans, but the implementation rarely survives contact with the real world.

If, upon reading this, you have questions or suggestions, especially for `org-stuck-projects`, I would love to hear about it in the comments, or [on Mastodon](https://fosstodon.org/@pymander). Thank you for reading!
