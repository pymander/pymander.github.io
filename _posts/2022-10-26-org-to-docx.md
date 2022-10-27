---
title: An Org-mode to DOCX Pipeline
author: "Erik L. Arneson"
layout: post
permalink: /2022/10/org-mode-to-docx-pipeline
comments: true
image: /assets/img/pipes-header.png
tags:
    - org-mode
    - pandoc
    - emacs
    - writing
categories:
  - Writing
---

Freelance writers need to deliver documents in the format requested by clients. However, frequently
the requested format is not the writer's preferred working format. I like to write in Org Mode, but
many clients prefer delivery in Microsoft Word's DOCX format.

This is how I generate DOCX files for my clients.
<!--more-->

## What is Org Mode?

[Org Mode](https://orgmode.org/) is an Emacs package for writing and working with Org files. Org
files are highly structured plain text files that may appear to be a text outline, but can do so
much more. Org Mode is incredibly versatile, and can be used to track projects, manage schedules,
write outlines, and even create documents.

## Choosing between Org Export and Pandoc

Org Export runs inside Emacs and is capable of converting Org files to [a variety of other
formats](https://orgmode.org/guide/Exporting.html). While it is very powerful, it also has its
idiosyncrasies. For instance, when converting Org files to DOCX files, it uses its own style names
such as "Org Title" and "Org Heading 1".

A second option for converting Org files to DOCX files is [Pandoc](https://pandoc.org/). Pandoc
prides itself on being the Swiss army knife of document format conversion. It handles an impressive
variety of document formats and handles a dizzying collection of configuration options.

Since the DOCX files that I create need to be shared with other writers, editors, and reviewers, I
need to make sure that they are easy to work with. This influenced my decision. Since Pandoc uses
more [standard style names](https://pandoc.org/MANUAL.html#option--reference-doc), I decided to use
it for Org conversion. 

## Setting up Pandoc

To use Pandoc to generate nice looking DOCX files, you will need to configure a template
document. The recommended method for doing this is to generate a default template using Pandoc, and
then edit it in Word. I used [LibreOffice Writer](https://www.libreoffice.org/) for this, and it
worked just fine.

1. Install the latest Pandoc [using these instructions](https://pandoc.org/installing.html).
2. Run the following command to generate **reference.docx**
   ```shell
   pandoc -o custom-reference.docx --print-default-data-file reference.docx
   ```
3. Open **reference.docx** in your word processor and edit the styles so they meet your needs.

## Converting from Org to DOCX

One option for running the conversion is to take advantage of the
[ox-pandoc](https://github.com/emacsorphanage/ox-pandoc) package for Emacs. If you will always be
using the same configuration for your exports, this is a great option.

However, I need to use a number of different configurations for converting documents, so I tend to
run Pandoc from the command line. Recent versions of ox-pandoc support [passing options via Org
headers](https://github.com/emacsorphanage/ox-pandoc#passing-options-to-pandoc), but I still haven't
bothered to set that up. It should be very easy to template this using 
[Yasnippet]({% link _posts/2022-09-28-yasnippet-emacs-writing.md %}), though.

I use a custom [fish shell](https://fishshell.com/) function that looks like this:

```fish
function org2docx --description 'Generate a DOCX file using a custom reference document'
    set -l refdoc "$PATH_TO_REFERENCE_DOCX"
    set -l base (basename -s .md -s .org $argv)
    echo Generating $base.docx ...
    pandoc --reference-doc $refdoc -o $base.docx $argv
end
```

From my fish shell command line, I can then just run `org2docx whatever.org` to generate
**whatever.docx**. 

I have not found a level of automation that makes my converted DOCX files completely perfect,
unfortunately. After conversion, I always open the new file in my word processor to make final
tweaks and fixes.

## Have fun converting files!

The method I've outline in this blog post is straightforward and fits my needs. There are definitely
improvements to be made, such as using templates to pass the proper options to Pandoc. Switching to
ox-pandoc would mean one fewer reason to leave Emacs, after all.

In recent years, more and more clients are asking for files to be delivered via Google Docs. So far,
I have yet to find a good conversion pipeline to get Org files into Google Docs easily. My method
right now takes too many manual steps. That's a problem I would love to solve.

Do you have a conversion pipeline for documents that works for you? Leave me a comment and let me
know!
