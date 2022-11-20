---
title: Pattern Matching and Tail Recursion in Emacs Lisp
author: "Erik L. Arneson"
layout: post
permalink: /2022/11/pattern-matching-tail-recursion-emacs-lisp
comments: true
tags:
- emacs
- programming
- emacs lisp
- lisp
---

Functional programming offers a bunch of really cool programming patterns. Two that I really enjoy are [tail recursion](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization) and [pattern matching](https://sodocumentation.net/ocaml/topic/2656/pattern-matching), especially how they are implemented in OCaml. However, I spend a lot of time writing Emacs Lisp now, and I was wondering if I could find a way to use these patterns in that language.
<!--more-->

It turns out that it is possible, thanks to `named-let` and `pcase`. It isn't as pretty and elegant as OCaml, but at least I get to keep excercising those parts of my programming brain. Maybe next I'll try to figure out currying in Emacs Lisp.

Note that this blog post includes some *really dumb* examples, because that's usually how I learn these things best.

## Pattern Matching with `pcase`

Most programmers will be familiar with the granddaddy of pattern matching, the `switch/case` construct. This is present in many, many programming languages, especially those in the ALGOL family.

However, pattern matching can be so much more! Instead of simple equality checks, pattern matching extends the `switch/case` concept to include testing for all kinds of patterns and conditionals.

Lisp programmers will already be familiar with `cond`, which can be used to sequentially test for conditionals. However, functional language programmers have probably fallen in love with a more mature and sophisticated form of pattern matching that `cond` doesn't totally satisfy.

Fortunately, Emacs Lisp has [`pcase`, the pattern-matching conditional](https://www.gnu.org/software/emacs/manual/html_node/elisp/Pattern_002dMatching-Conditional.html). Here is an example of its use to duplicate `car`, which is the dumbest possible example I could think of.

``` elisp
(defun ela/car (lst)
  (pcase lst
    (`(,head . ,_)
     head)
    (_
     nil)))
```

You can see that `pcase` has a backquote syntax for matching various constructs, such as with the `` `(,head . ,_) `` piece. This matches a cons cell and binds the CAR to `head` while ignoring the CDR.

The next case is just `_`, which is a catch-all matching operator.

In the real world, you'd probably want some type checking and error correction, but I promised very simple examples. Check out the full range of [matching capabilities for `pcase`](https://www.gnu.org/software/emacs/manual/html_node/elisp/pcase-Macro.html), and then [read about all of the backquote patterns you can also use](https://www.gnu.org/software/emacs/manual/html_node/elisp/Backquote-Patterns.html).

## Tail Call Optimization with `named-let`

Tail call optimization (TCO) is the programming language feature that allows efficient tail recursion without overflowing your stack. It is increasingly common in languages today, though from what I've seen, it always involves caveats.

In Emacs Lisp, the easiest way to use TCO that I've come across is the [`named-let` macro](https://www.gnu.org/software/emacs/manual/html_node/elisp/Local-Variables.html#index-named_002dlet). With it, you define a function that can get "unrolled" inside another function. For example, here is a simple function that calculates a factorial using tail recursion.

``` elisp
(defun ela/fact (in-num)
  (named-let rec-fact ((accu 1)
                       (num in-num))
    (pcase num
      ((guard (< 0 num))
       (rec-fact (* accu num) (- num 1)))
      (_
       accu))))
```

In this example, you will notice that `rec-fact` is the locally named function that gets called at the end of the first `pcase` pattern. This is a tail call! It will get optimized.

You can check this out by running something like `(ela/fact 5)` and getting 120 as the result. Try using a ridiculously big number and see if you get a stack overflow! You shouldn't.

## Another Example: Summing a List

This is just a nostalgic example, since it's probably the first tail recursive pattern matching function I ever wrote when learning OCaml a zillion years ago. This function will take a list of numbers and then add them all together. There are much better ways to write this in Emacs Lisp, like with `apply`.

``` elisp
(defun ela/sum (numbers)
  (named-let sum-list ((accu 0)
                       (lst numbers))
    (pcase lst
      (`(,head . ,tail)
       (sum-list (+ accu head) tail))
      (_
       accu))))
```

You can then call it like this:

``` elisp
(ela/sum (list 1 2 3))
```

And you will end up with exactly the result you expect. I was amused to see that the documentation page for `named-let` has a different implementation of this function that doesn't use `pcase`.

Oh heck, let's get fancy and rewrite `apply` using this approach.

``` elisp
(defun ela/apply (fn &rest arguments)
  "Apply FN to each element of ARGUMENTS and return the accumulated result."
  ;; Set up accumulator to the right type.
  (let* ((arguments-flat (flatten-list arguments))
         (initial-value (pcase (car arguments-flat)
                          ((pred integerp) 0)
                          ((pred stringp) "")
                          (_ nil))))
    (named-let apply-rec ((accumulator initial-value)
                          (input-list arguments-flat))
      (pcase input-list
        (`(,head . ,tail)
         (apply-rec (funcall fn accumulator head) tail))
        (_
         accumulator)))))
```

I am certain this version of `apply` has bugs, but it works for `+` and `concat`, so that's good enough for a simple example. And it uses `pcase` twice!

Hopefully this has been a useful blog post for somebody out there. Let me know in the comments if there are other fun things you have done with TCO and pattern matching in Emacs Lisp!
