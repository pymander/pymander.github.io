---
id: 710
title: 'Arduino Planetary Hours library'
date: '2017-05-01T11:30:35-07:00'
author: 'Erik Arneson'
layout: post
guid: 'https://arnesonium.com/?p=710'
permalink: /2017/05/arduino-planetary-hours-library/
wp-syntax-cache-content:
    - "a:3:{i:1;s:637:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n</pre></td><td class=\"code\"><pre class=\"cpp\" style=\"font-family:monospace;\"><span style=\"color: #339900;\">#define MYZONE -7</span>\n&nbsp;\nPlanetaryHour ph<span style=\"color: #008000;\">&#40;</span>MYZONE, <span style=\"color:#800080;\">45.5</span>, <span style=\"color: #000040;\">-</span><span style=\"color:#800080;\">122.7</span><span style=\"color: #008000;\">&#41;</span><span style=\"color: #008080;\">;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">#define MYZONE -7\n\nPlanetaryHour ph(MYZONE, 45.5, -122.7);</p></div>\n\";i:2;s:1327:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n</pre></td><td class=\"code\"><pre class=\"cpp\" style=\"font-family:monospace;\"><span style=\"color: #0000ff;\">time_t</span> timer <span style=\"color: #000080;\">=</span> utc.<span style=\"color: #007788;\">unixtime</span><span style=\"color: #008000;\">&#40;</span><span style=\"color: #008000;\">&#41;</span> <span style=\"color: #000040;\">-</span> UNIX_OFFSET<span style=\"color: #008080;\">;</span>\n<span style=\"color: #0000ff;\">uint8_t</span> dayPlanet <span style=\"color: #000080;\">=</span> ph.<span style=\"color: #007788;\">dayPlanet</span><span style=\"color: #008000;\">&#40;</span><span style=\"color: #000040;\">&amp;</span>timer<span style=\"color: #008000;\">&#41;</span><span style=\"color: #008080;\">;</span>\n<span style=\"color: #0000ff;\">uint8_t</span> hourPlanet <span style=\"color: #000080;\">=</span> ph.<span style=\"color: #007788;\">hourPlanet</span><span style=\"color: #008000;\">&#40;</span><span style=\"color: #000040;\">&amp;</span>timer<span style=\"color: #008000;\">&#41;</span><span style=\"color: #008080;\">;</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">time_t timer = utc.unixtime() - UNIX_OFFSET;\nuint8_t dayPlanet = ph.dayPlanet(&amp;timer);\nuint8_t hourPlanet = ph.hourPlanet(&amp;timer);</p></div>\n\";i:3;s:741:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n6\n7\n</pre></td><td class=\"code\"><pre class=\"cpp\" style=\"font-family:monospace;\"><span style=\"color: #339900;\">#define SATURN 0</span>\n<span style=\"color: #339900;\">#define JUPITER 1</span>\n<span style=\"color: #339900;\">#define MARS 2</span>\n<span style=\"color: #339900;\">#define SUN 3</span>\n<span style=\"color: #339900;\">#define VENUS 4</span>\n<span style=\"color: #339900;\">#define MERCURY 5</span>\n<span style=\"color: #339900;\">#define MOON 6</span></pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">#define SATURN 0\n#define JUPITER 1\n#define MARS 2\n#define SUN 3\n#define VENUS 4\n#define MERCURY 5\n#define MOON 6</p></div>\n\";}"
categories:
    - Programming
    - Projects
tags:
    - arduino
    - C
    - 'planetary hours'
    - programming
---

I am finally announcing my <a href="https://bitbucket.org/arnesonium/planetaryhours">PlanetaryHours library for the Arduino</a>. This library uses the `sun_rise()` and `sun_set()` functions from the [avr-libc time.h](http://www.nongnu.org/avr-libc/user-manual/group__avr__time.html) library to calculate planetary hours.

<a class="button" href="https://bitbucket.org/arnesonium/planetaryhours/get/v1.0.zip">Download v1.0 Here</a>
<!--more-->

Planetary hours are an old method of figuring out which planets are "in charge" at any moment. For more information on planetary hours, check out these resources:

- <a href="http://www.renaissanceastrology.com/planetaryhoursarticle.html" target="_blank">http://www.renaissanceastrology.com/planetaryhoursarticle.html</a>
- <a href="http://www.esotericarchives.com/agrippa/agripp2c.htm#chap34" target="_blank">http://www.esotericarchives.com/agrippa/agripp2c.htm#chap34</a>

You can set up a `PlanetaryHour` object by passing it a time zone offset in hours, a latitude, and a longitude. The following example might help.

```cpp
#define MYZONE -7

PlanetaryHour ph(MYZONE, 45.5, -122.7);
```

Then, you can check the ruling planet of the current day and hour with an RTC or other time-keeping mechanism.

```cpp
time_t timer = utc.unixtime() - UNIX_OFFSET;
uint8_t dayPlanet = ph.dayPlanet(&timer);
uint8_t hourPlanet = ph.hourPlanet(&timer);
```

The return value of `dayPlanet()` and `hourPlanet()` is a number from 0 to 6, corresponding to the Chaldean planetary order.

```cpp
#define SATURN 0
#define JUPITER 1
#define MARS 2
#define SUN 3
#define VENUS 4
#define MERCURY 5
#define MOON 6
```

I'll be posting an article on <a href="http://www.arnemancy.com/" target="_blank">the Arnemancy blog</a> outlining a project I just installed using this library and some <a href="https://www.adafruit.com/category/168" target="_blank">NeoPixels</a>. I really look forward to seeing what others end up doing with this code!

<a class="button" href="https://bitbucket.org/arnesonium/planetaryhours/get/v1.0.zip">Download v1.0 Here</a>
