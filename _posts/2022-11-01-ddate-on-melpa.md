---
title: "New MELPA Package: ddate"
author: "Erik L. Arneson"
layout: post
permalink: /2022/11/new-melpa-package-ddate
comments: true
tags:
    - emacs
    - discordian
    - melpa
    - lisp
---

I recently wrote an Emacs Lisp package to support the [ddate](https://github.com/bo0ts/ddate) command, a classic
command-line utility to display dates from the [Discordian calendar](https://en.wikipedia.org/wiki/Discordian_calendar).
<!--more-->

The package is now [available on MELPA](https://melpa.org/#/ddate)! That means that if you have [`use-package`
installed](https://ianyepan.github.io/posts/setting-up-use-package/), you can get `ddate` easily like this:

```emacs-lisp
(use-package ddate :ensure t)
```

Once you have the `ddate` package installed, you can use it to add the Discordian date to your [dashboard](https://github.com/emacs-dashboard/emacs-dashboard) with code like
this:

```emacs-lisp
(defun ela/dashboard-insert-ddate (list-size)
  "Insert the Discordian date into the dashboard."
  (let ((ddate-string (ddate-pretty)))
    (dashboard-center-line ddate-string)
    (insert ddate-string)))

(use-package dashboard
  :init (dashboard-setup-startup-hook)
  :config
  ;; Add the ddate item provider to the list.
  (add-to-list 'dashboard-item-generators
               '(ddate . ela/dashboard-insert-ddate))

  ;; Set up your items with ddate at the top.
  (setq dashboard-items '((ddate)
                          (recents   . 5)
                          (bookmarks . 5)
                          (registers . 5))))
```

You can view the [source code for `ddate` on Sourcehut](https://git.sr.ht/~earneson/emacs-ddate).
