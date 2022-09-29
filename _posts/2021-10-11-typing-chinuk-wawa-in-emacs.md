---
id: 4633
title: 'Typing Chinuk Wawa in Emacs'
date: '2021-10-11T10:01:00-07:00'
author: 'Erik Arneson'
layout: post
guid: 'https://arnesonium.com/?p=4633'
permalink: /2021/10/typing-chinuk-wawa-in-emacs/
image: /wp-content/uploads/2021/10/german-typewriter-keys.jpg
categories:
    - Writing
tags:
    - 'chinuk wawa'
    - emacs
    - 'input methods'
    - keyboard
    - languages
    - learning
    - Linux
    - lisp
    - emacs
    - dvorak
---

Back in 2015, I took a course in being an ally for local Native American communities from the
[Portland Underground Grad School (PUGS)](https://www.pugspdx.com/). One suggested action was
learning the local language, but it proved difficult to find opportunities. When the pandemic forced
school closures, though, Lane Community College began offering classes online. I found out about
this thanks to the [Kaltash Wawa blog](https://kaltashwawa.ca/2021/09/07/non-credit-enrollment-is-open-for-chinuk-wawa-classes-at-lane-community-college/), and this fall I signed up to take a remote [Chinuk
Wawa class through Lane Community College](https://www.lanecc.edu/llc/language/chinuk-wawa).

<!--more-->

## What is Chinuk Wawa?

[Chinuk Wawa](https://en.wikipedia.org/wiki/Chinook_Jargon) originated as a type of creole or pidgin trade language in the Pacific Northwest,
incorporating loan words from more than a dozen indigenous and European languages. Though it has a
small lexicon, it is an interesting language with an impressive array of new phonemes for me to
learn. There are 12 different variations on "k", for instance! As you can imagine, with this
variety, it is pretty difficult to type Chinuk Wawa using the standard Latin alphabet. I am learning
the [Grand Ronde dialect](https://www.grandronde.org/services/education/chinuk-wawa-education-program/), which uses an IPA-based alphabet.

## Keyman for Linux

Under Linux, the easiest way to add an IPA-based input method is using the [IPA (SIL) keyboard for
Keyman](https://keyman.com/keyboards/sil_ipa). This integrates nicely under GNOME 3 with Ubuntu 20.04. However, I'm a Dvorak typist,
so having to switch back to a QWERTY-style keyboard is frustrating, and was slowing me
down. Instead, I came up with this method for inputing Chinuk Wawa compatible IPA using Emacs.

## Emacs Input Methods

Emacs has an easy method for switching between input methods, which you can [read more about
in the Emacs manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/Select-Input-Method.html). It comes with a number of IPA input methods, and after taking a look at all
of them, I chose `ipa-x-sampa`, as it seemed to have the best coverage of symbols needed by
Chinuk Wawa. However, it was missing a way to input the character "x̣", which was
needed by one of the first words I learned, "yax̣al"!

I added the following code to my startup file to remedy this. This adds the ability to type **x\_.**
to get **x̣** and **?/** to get **?**, both of which make typing Chinuk Wawa *much* easier for me.

```elisp
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

As you can see, this method allows plenty of additional characters to be added to `ipa-x-sampa`,
so if it turns out I missed anything, I can expand on it later.

The biggest downside of this is that I can only input Chinuk Wawa easily in Emacs, but since I do
most of my work there---including writing this blog post---it doesn't feel that bad to me. It's
definitely better than typing QWERTY!

aɬqi!
