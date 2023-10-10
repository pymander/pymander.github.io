---
title: Configuring Emacs 29.1 for Go Development 
author: "Erik L. Arneson"
layout: post
permalink: /2023/08/configuring-emacs-29-1-for-golang
comments: true
tags:
  - emacs
  - programming
  - golang
  - lisp
  - emacs-lisp
---

Now that I have [installed Emacs 29.1](https://arnesonium.com/2023/07/emacs-29-1-on-ubuntu-22-04-lts), I needed to get it set up for Go development for a project. I was interested in taking advantage of both the new Tree-Sitter integration, and the new Eglot language server client. However, they were mildly tricky to set up! Here is what I did.
<!--more-->

## Configuring Tree-Sitter for Go

If you follow the excellent [How to Get Started with Tree-Sitter](https://www.masteringemacs.org/article/how-to-get-started-tree-sitter) instructions from Mickey Peterson, you will have a great head-start on getting Tree-Sitter working for most of your favorite languages (and probably Java, too). However, those instructions didn't cover everything I needed for Go. When I tried running `M-x go-ts-mode`, Emacs complained about a missing `gomod` module. Baffling!

I couldn't find any information in the Emacs documentation about where to find this missing module. I looked around on the net and found [Camden Cheek's tree-sitter-go-mod](https://github.com/camdencheek/tree-sitter-go-mod), and added that to my list of recipes. My `treesit-language-source-alist` then looked like this:

```elisp
(setq treesit-language-source-alist
 '((bash "https://github.com/tree-sitter/tree-sitter-bash")
   (cmake "https://github.com/uyha/tree-sitter-cmake")
   (css "https://github.com/tree-sitter/tree-sitter-css")
   (elisp "https://github.com/Wilfred/tree-sitter-elisp")
   (go "https://github.com/tree-sitter/tree-sitter-go")
   (gomod "https://github.com/camdencheek/tree-sitter-go-mod")
   (dockerfile "https://github.com/camdencheek/tree-sitter-dockerfile")
   (html "https://github.com/tree-sitter/tree-sitter-html")
   (javascript "https://github.com/tree-sitter/tree-sitter-javascript" "master" "src")
   (json "https://github.com/tree-sitter/tree-sitter-json")
   (make "https://github.com/alemuller/tree-sitter-make")
   (markdown "https://github.com/ikatyang/tree-sitter-markdown")
   (python "https://github.com/tree-sitter/tree-sitter-python")
   (toml "https://github.com/tree-sitter/tree-sitter-toml")
   (tsx "https://github.com/tree-sitter/tree-sitter-typescript" "master" "tsx/src")
   (typescript "https://github.com/tree-sitter/tree-sitter-typescript" "master" "typescript/src")
   (yaml "https://github.com/ikatyang/tree-sitter-yaml")))
```

Note that the package is named `go-mod` but `go-ts-mode` expects it to be named `gomod`. I wish this were documented somewhere! In any case, I was then able to use `M-x treesit-install-language-grammar` for both `go` and `gomod`. Finally, `M-x go-ts-mode` worked!

After going through this process, I found [Robert Enzmann's post about automatically using Tree-Sitter](https://robbmann.io/posts/emacs-treesit-auto/). He has created the `treesit-auto` package, now available on MELPA, that does most of this work for you. It is a much faster way of solving the `gomod` mystery, so give it a shot! 

## Configuring Eglot for Go

I'd been using [lsp-mode](https://github.com/emacs-lsp/lsp-mode) for ages, but with Emacs 29.1 including [Eglot](https://joaotavora.github.io/eglot/), I decided to make the switch.

In my Go project, I ran `M-x eglot` and was immediately met with an error:

```
[eglot] Server reports (type=1): Error loading workspace folders (expected 1, got 0)
failed to load view for file:///path/to/my/project: err: go command required, not found: exec: "go": executable file not found in $PATH: stderr: 
```

I've got Go installed in `/usr/local/go`, and `/usr/local/go/bin` is definitely in my `exec-path` variable in Emacs. It looked like Eglot wasn't propagating `exec-path` down to its subprocesses. How annoying! I did a quick search through the list of Eglot-related variables and the Eglot documentation and no solution seemed immediately forthcoming.

So I took the cheap way out and made a symlink. In my shell, I ran:

```bash
sudo ln -sf /usr/local/go/bin/go /usr/local/bin/go
```

It is a dumb trick, and I am sure there is a better way to solve it. Do you know of one? Please comment and let me know!

## What Else?

My exploration has revealed that there's a lot of work left to do in the Emacs Tree-Sitter world. There are plenty of languages major modes that don't yet have a `ts-mode` equivalent, and plenty of others that still need a lot of work. 

It's too soon for me to say if this setup is preferrable to my previous configuration. But I am really looking forward to playing around with Eglot's features and exploring the capabilities of Tree-Sitter.

