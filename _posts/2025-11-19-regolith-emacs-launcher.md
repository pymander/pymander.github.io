---
title: An Emacs Application Launcher for Regolith
author: "Erik L. Arneson"
layout: post
permalink: /2025/11/regolith-emacs-launcher
comments: true
tags:
- emacs
- shell
- bash
- lisp
- programming
- ubuntu
---

I run the [Regolith Desktop Environment](https://regolith-desktop.com/) on my laptop, which I love because it provides a convenient GNOME wrapper and interface for the [i3 tiling window manager](https://i3wm.org/). Regolith relies on a program called `ilia` for application launching, and sometimes `ilia` gets caught in some kind of CPU-churning state that locks up my whole system. I have not been able to figure out what is causing it, so I (of course) turned to Emacs for a solution.

<!--more-->

## Turning to `consult-omni`

Armin Darvish has created a powerful Emacs package called [`consult-omni`](https://github.com/armindarvish/consult-omni), which provides a wrapper around `consult` for searching through any number of information sources. I believe `consult-omni` was originally intended to query web search engines and document databases, but Darvish has also provided a search mode for your local desktop applications, and can act as an application launcher.

Darvish provides an example application launcher in his `consult-omni` YouTube tutorial. The source code is straightforward, but I wanted to tweak it just a little. You can view [his original on the project's wiki on GitHub](https://github.com/armindarvish/consult-omni/wiki/YouTube-Tutorial#create-a-launcher). You can watch him explain his technique below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wNH2E7iT__c?start=8595" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

After a few tweaks, here is what I came up with.

```emacs-lisp
(defun consult-launcher ()
  "A launcher suitable for use from a window manager."
  (interactive)
  (let* ((width (floor (* 0.6 (display-pixel-width))))
         (height (floor (* 0.6 (display-pixel-height))))
         (left (floor (* 0.2 (display-pixel-width))))
         (top (floor (* 0.2 (display-pixel-height))))
         (params `((name . "omni-launcher")
                   (width . ,(cons 'text-pixels width))
                   (height . ,(cons 'text-pixels height))
                   (left . ,left)
                   (top . ,top)
                   (minibuffer . only)))
         (frame (make-frame params)))
    (with-selected-frame frame
      (select-frame-set-input-focus frame)
      ;; If i3 is running and there is a control socket, let's tell
      ;; it we are a floating frame.
      (if (getenv "I3SOCK")
          (call-process "i3-msg" nil nil nil
                        (format "[id=%s] floating enable"
                                (s-trim (shell-command-to-string "xdotool getactivewindow")))))
      (unwind-protect
          (progn (consult-omni-apps-static ".*" (propertize "> " 'face 'consult-omni-path-face))
                 nil)
        (progn
          (when (frame-live-p frame) (delete-frame frame))
          nil)))))
```

I made two changes to get this to work nicely with `i3`. First, I removed the `yequake` dependency. Second, I added a call to `i3-msg` that sets the launcher frame as floating, which makes it much nicer to use. Like Darvish's version, you can run this from the command line:

    emacsclient -e '(consult-launcher)'


## Adding an `ilia` fallback

Don't tell all the other Emacs users, but I don't have Emacs set up to launch automatically when I start my computer and log into X11. I probably should, huh? Also, there are times when I (gasp!) shut down Emacs, usually to restart it or fix something that I have broken. When those times happen, I want to be able to launch applications, so I need a failsafe in case `consult-launcher` isn't available!

To solve this, I created a simple shell wrapper script, which looks like this:

```bash
#!/bin/bash

# Check if Emacs server is running by looking for the server socket
# Default server name is "server", but you can change this if needed
SERVER_NAME="${EMACS_SERVER_NAME:-server}"
SERVER_FILE="${XDG_RUNTIME_DIR:-/tmp}/emacs/${SERVER_NAME}"

if [ -S "$SERVER_FILE" ]; then
    # Emacs is running, use emacsclient to launch your application
    emacsclient -e '(consult-launcher)'
else
    # Emacs is not running, fall back to ilia
    ilia -p apps
fi
```

If you want to use this, the important part is that `SERVER_FILE` points to the socket that your Emacs server uses. Make sure that `emacsclient` and `ilia` are both in a reasonable location so your shell can find them, then bind this command to whatever you usually use to launch `ilia`.

By the way, if you are using Regolith's normal method of launching `ilia`, you can add your shell script to your Regolith configuration pretty easily. Open `$HOME/.config/regolith3/Xresources` in your text editor, and add the line:

    wm.program.launcher.app: /path/to/your/launcher.sh

You can then run `xrdb -override $HOME/.config/regolith3/Xresources` and it should work! Good luck.


## Drawbacks

One of the nice things about `ilia` is that it keeps track of applications your run frequently, so they tend to bubble up to the top of its application listing. The Emacs method doesn't do that. I don't mind so much, I always end up typing in application names. It is fun to use Emacs as an application launcher, and I hope that it helps me avoid the CPU-churn problem that `ilia` has been experiencing far too often.

Have I come up with a clever solution, or a lazy workaround? I'm looking forward to hearing your thoughts.
