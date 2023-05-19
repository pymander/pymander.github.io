---
title: Writing and Reviewing Jupyter Notebooks
author: "Erik L. Arneson"
layout: post
permalink: /2023/05/reviewing-jupyter-process
comments: true
tags:
- jupyter
- writing
- emacs
- pandoc
categories:
- Writing
---

A recent project involves delivering a finished product as a collection of [Jupyter Notebooks](https://jupyter.org/). This process involves using Emacs for writing, Git for version control, and a slightly tricky process for enabling non-Jupyter, non-Emacs users to perform document review.

<!--more-->

Writing---just like programming---ideally includes a review process before anything is delivered to the client. Even first drafts need at least two readers before delivery. I've previously discussed how [I use Org Mode and Pandoc to deliver DOCX files](https://arnesonium.com/2022/10/org-mode-to-docx-pipeline), and DOCX or ODF files unfortunately remain the easiest way to track changes and edits among word processor users.

Since Jupyter Notebooks are basically JSON documents, the best way to keep track of changes and revisions is using some kind of version control. [Here is one process using Git and GitHub.](https://towardsdatascience.com/how-to-use-git-github-with-jupyter-notebook-7144d6577b44) 

When my notebook files are ready for review, converting them to DOCX files is pretty straightforward.

1. First, I use the `jupyter` command line tool to convert to Markdown, like this:
   
   ```
   jupyter nbconvert --to markdown *.ipynb
   ```
2. Next, I use [Pandoc](https://pandoc.org/) to convert to DOCX using a reference link.
   
   ```fish
   for file in *.md
       pandoc --reference-doc $path_to_refdoc -o $file.docx $file
   end
   ```

## Renaming files with Dired

At this point, I needed to rename all of the DOCX files and move them to the proper shared folder, so my reviewer could get to them and know what's going on. We have a [naming format for filenames](https://www.computerworld.com/article/2833158/4-rules-for-naming-your-files.html) that helps us track project and versions, so all of the files needed to have at least a `v1` in them.

Emacs has a file manager called Dired, which contains powerful features that allow you to modify directory contents just like any other buffer. I now had a bunch of files that ended in `.md.docx` that needed to instead end in `-v1.docx`. Here is the process I used to easily rename them.

1. In Emacs, use `M-x dired` to open the directory.
2. Use `C-x C-q` to run `dired-toggle-read-only`.
3. Use `M-%` to run `query-replace`, and replace `.md.docx` with `-v1.docx`.
4. Finish "writing" the directory with `C-c C-c`.

All done! It was nice and simple. The DOCX files were finally properly named and ready for review.

