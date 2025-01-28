---
title: Configuring Orgzly Interaction with Directory Local Variables
author: "Erik L. Arneson"
layout: post
permalink: /2025/01/configuring-orgzly-with-directory-local-variables
comments: true
tags:
- emacs
- org-mode
- howto
---

I use [Orgzly Revived](https://github.com/orgzly-revived/orgzly-android-revived) on my phone to capture to-do items, tasks, writing ideas, and projects. Its files are then synced with an ownCloud server. Those same files are also constantly open in Emacs on my computer, which means there can be some gnarly issues with things getting out of sync. It took me a while to figure out a good way to manage this, and in this brief blog post, I would like to share my solution.

<!--more-->

Setting up a remote storage system is outside the scope of this server. Orgzly Revived works well with Dropbox, ownCloud, and nextCloud, though support for the other two is nicer as it can support automatic syncing in more situations. The [Orgzly Revived documentation](https://github.com/orgzly-revived/documentation) has an excellent description of how that configuration works.

Note that to keep things simple, I keep my Orgzly Revived files and *only* those files in a directory on my remote server. On my computer, the location for these files is `~/org/orgzly/`, which is how I shall refer to it later on.

## Configuring Orgzly Revived Auto-sync

To configure the auto-sync capabilities in Orgzly Revived, go to the settings screen in the app and then navigate to **Sync > Auto-sync**. Ensure that the following options are toggled on:

- Auto-sync
- Note created
- Note updated or deleted
- App started or resumed

This ensures that Orgzly Revived is constantly checking your remote storage and both fetching and uploading changes.

## Configuring Emacs and Org-mode

On my computer, I want any changes that Orgzly Revived has updated to be automatically loaded into Emacs. Since I always leave Emacs running, that means it needs to detect changes on the disk for those particular files. I use two different methods to do this. First, in my init file, I have the following piece of code:

```lisp
(setq orgzly-directory (expand-file-name "~/org/orgzly/"))
(add-to-list 'revert-without-query (rx bol 
                                       (eval orgzly-directory) 
                                       (+ (not "/")) ".org" 
                                       eol))
```

This uses the `rx` macro to easily create a regular expression that matches any filename ending in `".org"` in the directory containing Orgzly Revived files. You may need to play around with the regular expression to get the right match. By adding those files to `revert-without-query`, Emacs will not bug you with extra questions and confirmations when changes are detected. However, this only works when `auto-revert-mode` is enabled!

At first, I thought there may be a way to enable `auto-revert-mode` on a file-by-file basis, but quickly realized that this could cause too many problems with creating new files in the Orgzly Revived app. Eventually, I realized that the solution would be to make a `.dir-locals.el` file in `~/org/orgzly/`. Open that file in Emacs, and stick the following in it.

```lisp
((nil . ((eval . (auto-revert-mode 1)))))
```

That ensures that any file in that directory will have `auto-revert-mode` enabled.

Once you have done this, you can add task files or inbox files in `~/org/orgzly` to your `org-agenda-files` variable, and they will show up in your agenda views as usual.

Hopefully these instructions work for you. Please let me know if you can see any improvements or problems with the way I have implemented this. Happy task tracking!

