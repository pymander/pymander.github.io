---
title: Yasnippet and Emacs for Writing
author: "Erik L. Arneson"
layout: post
permalink: /2022/09/yasnippet-emacs-writing
comments: true
tags:
    - emacs
    - writing
    - lisp
    - org-mode
    - markdown
    - podcast
categories:
    - Writing
---

As a [freelance writer](/writing/), I need to be ready to deliver high quality copy in a timely fashion. My editor of choice for writing is
Emacs. I have found that [Yasnippet](https://github.com/joaotavora/yasnippet) templates have streamlined my writing process.
<!--more-->

* Do not remove this line (it will not be displayed)
{:toc}

## What is Yasnippet?

As a templating system for Emacs, Yasnippet is well known by programmers. It can quickly expand
function definitions, control structures, and other templates into blocks of source code. Source code is just text.

Since most of my writing originates in text format, templates are great for speeding up document
creation and avoiding common errors and omissions.

## Installing Yasnippet

With [use-package](https://github.com/jwiegley/use-package), you can get started quickly with Yasnippet by including the following in your
Emacs init file.

```elisp
(use-package yasnippet
  :ensure t
  :config
  (yas-global-mode 1))

(use-package yasnippet-snippets
  :ensure t
  :after yasnippet)
```

For more detailed installation instructions, [check the Yasnippet documentation](https://joaotavora.github.io/yasnippet/).

## Markdown and Jekyll

This blog is primarily written in Markdown for Jekyll, which means that each file needs a YAML block at the top with specific
information. I have a template that looks like this:

```
# -*- mode: snippet -*-
# name: blogtop
# key: blogtop
# --
---
title: ${1:Title}
author: "Erik L. Arneson"
layout: post
permalink: `(format-time-string "/%Y/%m/")`$2
comments: ${3:$$(yas-choose-value '("true" "false"))}
tags:
    - $4
---

$0
<!--more-->
```

Not only does this template save me from needing to remember the format of the YAML block, but it ensures that frequently forgetten items
are included, such as the `permalink` setting and the `<!--more-->` tag.

### Bonus Snippets

The [official snippet collection](https://github.com/AndreaCrotti/yasnippet-snippets) contains a bunch of extra Markdown templates. 
[Check them out here.](https://github.com/AndreaCrotti/yasnippet-snippets/tree/master/snippets/markdown-mode)

## Org Mode Templates

My [Org Mode](https://orgmode.org/) files are more complex. Many writing clients expect deliveries in Microsoft Word files, but
I also frequently find myself needing to produce OpenDocument files, HTML, and even Markdown. The headers for these files need to support
all of these options.

I use the following template to support all of the Org Mode configuration and options I require.

```
# -*- mode: snippet -*-
# name: header
# key: header
# --
#+TITLE: $1
#+LANGUAGE: ${2:en}
#+AUTHOR: ${3:$$(yas/choose-value '("Erik L. Arneson" "Some Other Name"))}
#+EMAIL: ${4:$$(yas/choose-value '("list-of-email-addresses"))}${5:
#+DESCRIPTION: $6}${7:
#+KEYWORDS: $8}
#+OPTIONS: num:nil toc:nil
#+ODT_STYLES_FILE: ${9:$$(yas/choose-value '("list-of-template-files"))}
#+bibliography: /path/to/MyLibrary.bib
#+cite_export: csl ${10:$$(yas/choose-value '("chicago-fullnote-bibliography.csl" "modern-language-association.csl" "apa.csl"))}
#+WWG: ${11:$$(yas/choose-value '("0" "250" "500" "1000"))}

$0
```

### org2blog and Podcast Show Notes

I also use Org Mode to publish to WordPress websites using [org2blog](https://github.com/org2blog/org2blog). For one of these websites, I
write show notes for podcast episodes. I use a template that looks like this.

```
# -*- mode: snippet -*-
# name: podcast
# key: podcast
# --
* $1
  :PROPERTIES:
  :POST_TAGS: $2
  :BLOG:      arnemancy
  :CATEGORY:  Podcast
  :POST_DATE: `(format-time-string "[%Y-%m-%d %a %H:%M]" nil nil)`
  :END:

$0

** Links

** Credits

#+begin_export html
Support me on Patreon: <a rel="payment" href="https://www.patreon.com/arnemancy">https://www.patreon.com/arnemancy</a><br>
#+end_export
```

This template reminds me of important items I need to include in all show notes, like links, credits, and a Patreon link.

### More Bonus Snippets ###

The official snippet collection also contains a bunch of Org Mode snippets. [Here is the whole
list.](https://github.com/AndreaCrotti/yasnippet-snippets/tree/master/snippets/org-mode) Since Org Mode contains so many complicated
structures like source blocks and optional keywords, these are great time savers. There are also snippets for supporting
[org-reveal](https://github.com/yjwen/org-reveal). 

## Writing Faster is Writing Smarter ##

Don't let your tools get in the way of your writing. Frequently, Emacs is portrayed as cumbersome and filled with obscure keybindings and
weird commands. However, I have found that it is an excellent tool for writing. Yasnippet templates let me get started on new documents
quickly without fretting over different syntaxes for configuration.

And Yasnippet is just one of the tools I use when writing with Emacs. I will discuss more of these tools in the future.

