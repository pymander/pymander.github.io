---
title: "maybe: A command-line tool that succeeds sometimes"
author: "Erik L. Arneson"
layout: post
permalink: /2025/02/maybe-succeeds-sometimes
comments: true
tags:
- programming
- golang
- github
---

I just released [version 1.0.0 of `maybe`](https://github.com/pymander/maybe/releases/tag/v1.0.0), a command-line utility that succeeds some of the time. It
is written in Go and is not very many lines of code, but I do hope that it can be useful for people.

<!--more-->

## Some History

I recently got a [Korg Volca Drums](https://amzn.to/3CYb9he) drum synthesizer. It has a sequencer that allows you to program
the probability of a particular instrument playing on a particular step, and I thought that was a
really cool feature. This inspired me to think about cron jobs that happen only some of the time.
Maybe the cron job would run, maybe it wouldn't.

This inspired me to write [`maybe`](https://github.com/pymander/maybe), a command-line utility that returns either success or failure,
based on flags you pass it. It defaults to succeeding 50 percent of the time, but you can change
that. This means you could make a cron job like this, which would run `do-something.sh` 40 percent
of the time.

```bash
# At midnight every Sunday, do something sometimes.
0 0 * * 0     maybe -chance 40 && do-something.sh
```

## The Future of maybe

I don't think I will stop at version 1.0.0. I have already considered what may happen to `maybe` in
the future. Here are some things that I would like to do:

-   Add cryptographically secure randomness. There is no reason to use Go's default random library.
    Let us try to be as random as possible.
-   More granularity to the randomness. What if you want to run something 40.5 percent of the time?
-   Experiment with GitHub actions, such as building binaries for every operating system that `maybe`
    should support.

As you can see, the opportunities for improvement are many. And maybe (ha ha!) you will see
improvements soon!

Perhaps this is a good time to visit [`maybe` on GitHub](https://github.com/pymander/maybe) and star the repo so others can find it?

