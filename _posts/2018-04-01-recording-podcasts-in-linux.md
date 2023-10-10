---
id: 796
title: 'Recording Podcasts in Linux'
date: '2018-04-01T16:23:02-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=796'
permalink: /2018/04/recording-podcasts-in-linux/
categories:
    - Projects
tags:
    - alsa
    - audio
    - ecasound
    - linux
    - pulseaudio
    - tutorial
    - ubuntu
comments: true    
---

I co-host a podcast called <a href="https://myalchemicalbromance.com/" rel="noopener" target="_blank">My Alchemical Bromance</a>, and one of the frequent challenges I end up facing is how to record video and voice chats for interviews. A lot of podcasters use external hardware devices, such as the <a href="https://amzn.to/2Gt0iOc" rel="noopener" target="_blank">Focusrite Scarlett 2i4</a>, which is a great solution. But I wanted to do it all in software---and in Linux.
<!--more-->

## My Configuration

<a href="https://amzn.to/2GJJBgt"><img src="https://arnesonium.com/wp-content/uploads/2018/04/Blue-Snowball-USB-246x300.png#right" alt="Blue Snowball USB microphone" width="246" height="300" class="size-medium wp-image-797" /></a>

For this setup, you need headphones, a microphone, and an Internet connection. I use a <a href="https://amzn.to/2H4C8Gs" rel="noopener" target="_blank">Blue Snowball USB microphone</a>, which is affordable, sturdy, and great quality for just recording a podcast.

## PulseAudio and ALSA

Anybody who's played with audio stuff in Linux knows that it's a total mess. I'm not going to try to explain it all in detail because I'll get it wrong, and even this section I'm *probably* going to get wrong. Feel free to correct me loudly in the comments. There are two very common audio interfaces that we have to deal with. First is ALSA, which is the Advanced Linux Sound Architecture and is the hardware driver layer of the audio system. Next is PulseAudio, which is a sound server that abstracts the hardware layer.

### PulseAudio Configuration

We need two pieces of information from PulseAudio: the system sound monitor, and the microphone monitor. Run the following command:

```bash
pactl list | grep -A2 'Source #'
```

You should get output that looks like this:

```
Source #0
	State: IDLE
	Name: alsa_output.pci-0000_00_1b.0.analog-stereo.monitor
--
Source #1
	State: SUSPENDED
	Name: alsa_input.pci-0000_00_1b.0.analog-stereo
--
Source #9
	State: SUSPENDED
	Name: alsa_input.usb-BLUE_MICROPHONE_Blue_Snowball_201305-00.analog-mono
```

The bits you're interested in are the "Name" for the `analog-stereo.monitor` entry and the `analog-mono` entry. In my example, you will find them on lines 3 and 11. Save those for the next step.

### ALSA Configuration

Because we're going to use an ALSA-compatible tool for recording, we need to configure ALSA to talk to PulseAudio (which then talks to ALSA again on the backend -- like I said, audio is confusing in Linux and I'm sorry that either of us has to spend any time thinking about it). You will want to open `$HOME/.asoundrc` and add the following entries.

```
# Creating a system sound monitor
pcm.pulse_monitor {
  type pulse
  device alsa_output.pci-0000_00_1b.0.analog-stereo.monitor
}

ctl.pulse_monitor {
  type pulse
  device alsa_output.pci-0000_00_1b.0.analog-stereo.monitor
}

# Creating an ALSA interface for the USB microphone
pcm.pulse_usbmic {
  type pulse
  device alsa_input.usb-BLUE_MICROPHONE_Blue_Snowball_201305-00.analog-mono
}

ctl.pulse_usbmic {
  type pulse
  device alsa_input.usb-BLUE_MICROPHONE_Blue_Snowball_201305-00.analog-mono
}
```

You will see that on lines 4 and 9, I used the name of the system monitor PulseAudio device from the previous step. Likewise, on lines 15 and 20, I used the name for the USB microphone device.

## Actually Recording Things

I won't strongly recommend any particular voice or video chat software in Linux over another. There are a few good ones I've used, such as Google Hangouts and Zoom. I've used Google Voice to record phone calls, too. Skype has been problematic for me, with lots of drop-outs and weird volume issues, but that could just be my setup. You will need to experiment and find out which works best for you.

We will use <a href="http://www.eca.cx/ecasound/" rel="noopener" target="_blank">Ecasound</a> to record to hard disk. To install Ecasound in Ubuntu (and probably Debian), run this command:

```shell
sudo apt install ecasound ecatools
```

To start recording, run this command:

```bash
ecasound -c \
         -f:16,1,44100 -a:1 -i alsa,pulse_usbmic -o ecatrack1.wav \
         -f:16,2,44100 -a:2 -i alsa,pulse_monitor -o ecatrack2.wav
```

At the "ecasound" prompt, type "start" to begin recording. When you are done, type "stop" and then "quit". Your microphone audio will be in `ecatrack1.wav` and your computer system audio will be in `ecatrack2.wav`.

## Timing Problems

This setup essentially uses two different hardware devices to record audio, so it will have one glaring problem: no two hardware timing clocks are the same. Both are sampling at 44.1kHz, but the crystals used to do the timing will never *exactly* be at 41,000 samples per second. The variation compounds over time, so for long recordings you will notice unusual lag. This is probably why so many podcasters go for an external hardware solution. But if all you've got is a USB microphone and the truth, a software solution will have to do for now.

## Good Luck!

I hope this helps you do better, smarter podcasting. Podcasting in Linux is tricky. There aren't a lot of good tutorials out there, so you'll still have to figure a lot out on your own. If you have tips or tutorials that helped you out, please include them in the comments below! I certainly need them.
