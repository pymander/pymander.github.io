---
title: "Update: Org to DOCX with Citations"
author: "Erik L. Arneson"
layout: post
permalink: /2023/06/org-to-docx-with-citations
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

Last year, I wrote about [converting Org to DOCX with pandoc]({% post_url 2022-10-26-org-to-docx %}). Well, that particular method has needed some improvements. I needed to also support converting Markdown files, and more vitally, I needed to support the new-ish [org-cite citation format](https://orgmode.org/manual/Citation-handling.html).

<!--more-->

The first thing I did was update to the [latest version of Pandoc](https://pandoc.org/installing.html). Next, I had to learn how [Pandoc's citations](https://pandoc.org/MANUAL.html#citations) work. Note that you have to enable the [citations extension](https://pandoc.org/MANUAL.html#org-citations) as well.

For citations to work, you need to have a [Citation Style Language](https://docs.citationstyles.org/en/stable/specification.html) (CSL) file. Zotero comes with a ton of them, so check your Zotero installation for examples.

In the updated fish shell function below, you will want to update both `refdoc` and `csldoc` to point to your reference DOCX file and your CSL file, respectively.

```fish
function org2docx --description 'Generate a DOCX file using a custom reference document'
    set -l refdoc "$PATH_TO_REFERENCE_DOCX"
    set -l csldoc "$PATH_TO_CSL"
    set -l fromfmt (string match -r '(?:org|md)$' $argv)
    set -l base (basename -s .$fromfmt $argv)

    echo Generating $base.docx ...

    pandoc --from "$fromfmt"+citations \
        --citeproc --csl $csldoc \
        --reference-doc $refdoc -o $base.docx $argv
end
```

And there you have it! Now you can convert both Org files and Markdown files to DOCX. And I am sorry that you have to use DOCX!
