---
id: 4633
title: 'Typing Chinuk Wawa in Emacs'
date: '2021-10-11T10:01:00-07:00'
author: 'Erik Arneson'
layout: post
guid: 'https://arnesonium.com/?p=4633'
permalink: /2021/10/typing-chinuk-wawa-in-emacs/
wp-syntax-cache-content:
    - "a:1:{i:1;s:2554:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n</pre></td><td class=\"code\"><pre class=\"lisp\" style=\"font-family:monospace;\"><span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #b1b100;\">defun</span> chinuk-wawa-quail-rules <span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #66cc66;\">&#41;</span>\n  <span style=\"color: #ff0000;\">&quot;Add Chinuk Wawa rules to the `ipa-x-sampa` input map.&quot;</span>\n  <span style=\"color: #66cc66;\">&#40;</span>interactive<span style=\"color: #66cc66;\">&#41;</span>\n  <span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #b1b100;\">if</span> <span style=\"color: #66cc66;\">&#40;</span>string-equal <span style=\"color: #ff0000;\">&quot;ipa-x-sampa&quot;</span> <span style=\"color: #66cc66;\">&#40;</span>quail-name<span style=\"color: #66cc66;\">&#41;</span><span style=\"color: #66cc66;\">&#41;</span>\n      <span style=\"color: #66cc66;\">&#40;</span>quail-define-rules\n       <span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #b1b100;\">append</span> <span style=\"color: #66cc66;\">.</span> t<span style=\"color: #66cc66;\">&#41;</span><span style=\"color: #66cc66;\">&#41;</span>\n       <span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #ff0000;\">&quot;_.&quot;</span> #x0323<span style=\"color: #66cc66;\">&#41;</span>   <span style=\"color: #808080; font-style: italic;\">;; allows for x with dot beneath</span>\n       <span style=\"color: #66cc66;\">&#40;</span><span style=\"color: #ff0000;\">&quot;?/&quot;</span> <span style=\"color: #ff0000;\">&quot;?&quot;</span><span style=\"color: #66cc66;\">&#41;</span><span style=\"color: #66cc66;\">&#41;</span>     <span style=\"color: #808080; font-style: italic;\">;; allows for ? character </span>\n    <span style=\"color: #66cc66;\">&#41;</span><span style=\"color: #66cc66;\">&#41;</span>\n&nbsp;\n<span style=\"color: #66cc66;\">&#40;</span>add-hook 'quail-activate-hook 'chinuk-wawa-quail-rules<span style=\"color: #66cc66;\">&#41;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">(defun chinuk-wawa-quail-rules ()\n  &quot;Add Chinuk Wawa rules to the `ipa-x-sampa` input map.&quot;\n  (interactive)\n  (if (string-equal &quot;ipa-x-sampa&quot; (quail-name))\n      (quail-define-rules\n       ((append . t))\n       (&quot;_.&quot; #x0323)   ;; allows for x with dot beneath\n       (&quot;?/&quot; &quot;?&quot;))     ;; allows for ? character \n    ))\n\n(add-hook 'quail-activate-hook 'chinuk-wawa-quail-rules)</p></div>\n\";}"
image: /wp-content/uploads/2021/10/german-typewriter-keys.jpg
categories:
    - Writing
tags:
    - 'chinuk wawa'
    - college
    - emacs
    - 'emacs lisp'
    - 'input methods'
    - keyboard
    - languages
    - learning
    - Linux
    - lisp
    - emacs
---

Back in 2015, I took a course in being an ally for local Native American communities from the <a href="https://www.pugspdx.com/" rel="noopener" target="_blank">Portland Underground Grad School (PUGS)</a>. One action that was suggested during the course was learning the local language, but it proved difficult to find opportunities. When the pandemic forced school closures, though, Lane Community College began offering classes online. I found out about this thanks to the excellent <a href="https://kaltashwawa.ca/2021/09/07/non-credit-enrollment-is-open-for-chinuk-wawa-classes-at-lane-community-college/">Kaltash Wawa blog</a>, and this fall I signed up to take a remote <a href="https://www.lanecc.edu/llc/language/chinuk-wawa">Chinuk Wawa class through Lane Community College</a>.
<!--more-->

## What is Chinuk Wawa?

<a href="https://en.wikipedia.org/wiki/Chinook_Jargon">Chinuk Wawa</a> originated as a type of creole or pidgin trade language in the Pacific Northwest, incorporating loan words from more than a dozen indigenous and European languages. Though it has a fairly small lexicon, it is an interesting language with an impressive array of new phonemes for me to learn. There are 12 different variations on "k", for instance! As you can imagine, with this variety, it is pretty difficult to type Chinuk Wawa using the standard Latin alphabet. I am learning the <a href="https://www.grandronde.org/services/education/chinuk-wawa-education-program/">Grand Ronde dialect</a>, which uses an IPA-based alphabet.

## Keyman for Linux

Under Linux, the easiest way to add an IPA-based input method is using the <a href="https://keyman.com/keyboards/sil_ipa">IPA (SIL) keyboard for Keyman</a>. This integrates quite nicely under GNOME 3 with Ubuntu 20.04. However, I'm a Dvorak typist, so having to switch back to a QWERTY-style keyboard is frustrating, and was slowing me down. Instead, I came up with this method for inputing Chinuk Wawa compatible IPA using Emacs.

## Emacs Input Methods

Emacs has an excellent method for switching between input methods, which you can <a href="https://www.gnu.org/software/emacs/manual/html_node/emacs/Select-Input-Method.html">read more about in the Emacs manual</a>. It comes with a number of IPA input methods, and after taking a look at all of them, I chose <code>ipa-x-sampa</code>, as it seemed to have the best coverage of symbols needed by Chinuk Wawa. However, it was missing a way to input the very important character "x̣", which was needed by one of the very first words I learned, "yax̣al"!

I added the following code to my startup file to remedy this. This adds the ability to type <b>x_.</b> to get <b>x̣</b> and <b>?/</b> to get <b>?</b>, both of which make typing Chinuk Wawa <i>much</i> easier for me.

```emacs-lisp
(defun chinuk-wawa-quail-rules ()
  "Add Chinuk Wawa rules to the `ipa-x-sampa` input map."
  (interactive)
  (if (string-equal "ipa-x-sampa" (quail-name))
      (quail-define-rules
       ((append . t))
       ("_." #x0323)   ;; allows for x with dot beneath
       ("?/" "?"))     ;; allows for ? character 
    ))

(add-hook 'quail-activate-hook 'chinuk-wawa-quail-rules)
```

As you can see, this method allows plenty of additional characters to be added to <code>ipa-x-sampa</code>, so if it turns out I missed anything or am annoyed by any other side effects of this input method, I can expand on it later.

The biggest downside of this is that I can only input Chinuk Wawa easily in Emacs, but since I do most of my work there—including writing this blog post—it doesn't feel that bad to me. It's definitely better than typing QWERTY!

aɬqi!
