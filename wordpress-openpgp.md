---
id: 104
title: 'OpenPGP Form Encryption for WordPress'
date: '2014-12-01T10:18:16-08:00'
author: 'Erik Arneson'
layout: page
guid: 'http://arnesonium.com/?page_id=104'
wp-syntax-cache-content:
    - "a:2:{i:1;s:911:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n3\n4\n5\n6\n7\n</pre></td><td class=\"code\"><pre class=\"html\" style=\"font-family:monospace;\">[contact-form subject='ARNESONIUM CONTACT']\r\n[contact-field label='Name' type='name' required='1'/]\r\n[contact-field label='Email' type='email' required='1'/]\r\n[contact-field label='Phone' type='text'/]\r\n[contact-field label='Comment' type='textarea' required='1'/]\r\n[cryptbutton keyid=42]Encrypt[/cryptbutton]\r\n[/contact-form]</pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">[contact-form subject='ARNESONIUM CONTACT']\r\n[contact-field label='Name' type='name' required='1'/]\r\n[contact-field label='Email' type='email' required='1'/]\r\n[contact-field label='Phone' type='text'/]\r\n[contact-field label='Comment' type='textarea' required='1'/]\r\n[cryptbutton keyid=42]Encrypt[/cryptbutton]\r\n[/contact-form]</p></div>\n\";i:2;s:401:\"\n<div class=\"wp_syntax\" style=\"position:relative;\"><table><tr><td class=\"line_numbers\"><pre>1\n2\n</pre></td><td class=\"code\"><pre class=\"html\" style=\"font-family:monospace;\">    [cryptbutton keyid:42 &quot;Encrypt&quot;]\n    [submit &quot;Send&quot;]</pre></td></tr></table><p class=\"theCode\" style=\"display:none;\">    [cryptbutton keyid:42 &quot;Encrypt&quot;]\n    [submit &quot;Send&quot;]</p></div>\n\";}"
permalink: /wordpress-openpgp/
---

<h1>OpenPGP Form Encryption for Wordpress</h1>

<img src="https://img.shields.io/wordpress/plugin/dt/openpgp-form-encryption.svg" style="float:right"><span data-icon="&#xe088;" style="float:left;font-size:xx-large;padding-right:0.1em"></span>View this plugin on the WordPress Plugin Directory: <a href="https://wordpress.org/plugins/openpgp-form-encryption/" target="_blank">OpenPGP Form Encryption for Wordpress</a>

This plugin uses <a title="OpenPGP.js" href="https://openpgpjs.org/" target="_blank">OpenPGP.js</a>&nbsp;to provide public key encryption for a textarea. It is most useful for any kind of text area that will be submitted via email or over an unsecured network connection.


<h2>Installation</h2>

To install this plugin, follow these directions:

<ol>
    <li>Download the latest zip file from <a href="https://github.com/pymander/wordpress-openpgp/releases" target="_blank">the releases page</a>. </li>
    <li>Next, load up your WordPress blog's dashboard, and go to <strong>Plugins &gt; Add New</strong>.</li>
    <li>Upload the zip file.</li>
    <li>Click <strong>Activate</strong>.</li>
</ol>

<h2>Usage</h2>

OpenPGP for Wordpress requires access to an OpenPGP public key in ASCII armored form. For more information on key generation and OpenPGP, I recommend the <a href="https://emailselfdefense.fsf.org/en/" title="Email Self-Defense" target="_blank">Email Self-Defense</a> website, which has instructions for multiple operating systems.

<h3>The <code>cryptbutton</code> Shortcode</h3>

This plugin provides a simple shortcode which you can add to your forms. To use the shortcode, you must first upload your ASCII-armored public key to your blog's media section. Note that the public key must reside on the same server as your blog.

The <code>cryptbutton</code> shortcode takes the following arguments.

<dl>
<dt>keyid</dt>
<dd>The media ID of your ASCII-armored public key. Either this or <code>keyurl</code> are required.</dd>

<dt>keyurl</dt>
<dd>The URL for your ASCII-armored public key. Either this argument or <code>keyid</code> are required.</dd>

<dt>textarea</dt>
<dd>Optional. The HTML ID for the <code>textarea</code> element to be encrypted. If this is unspecified, the correct <code>textarea</code> will try to be guessed. Usually this is successful.</dd>

<dt>class</dt>
<dd>Optional. Specify additional CSS classes for the button element.</dd>

<dt>style</dt>
<dd>Optional. Specify additional CSS styles for the button element.</dd>

<dt>text</dt>
<dd>Optional. Specify the button text. This defaults to "Encrypt". You can also use the shortcode as an opening and closing tag, with the contents used as the button's text.</dd>
</dl>

<h3>Example</h3>

I use this plugin with the <a href="http://jetpack.me/" target="_blank">Jetpack for WordPress</a> contact form. You can see an example of the output on my <a href="http://arnesonium.com/contact/" title="Contact">Contact page</a>. The WordPress code looks something like this:

<pre lang="html" line="1">
[contact-form subject='ARNESONIUM CONTACT']
[contact-field label='Name' type='name' required='1'/]
[contact-field label='Email' type='email' required='1'/]
[contact-field label='Phone' type='text'/]
[contact-field label='Comment' type='textarea' required='1'/]
[cryptbutton keyid=42]Encrypt[/cryptbutton]
[/contact-form]
</pre>

Line 6 displays the <code>cryptbutton</code> usage. Note that I changed some elements of this example to make things clearer. You will need to play with layout and CSS to get things looking nice.

<h2>Contact Form 7</h2>

This plugin also adds a <code>cryptbutton</code> shortcode to <a href="http://contactform7.com/" target="_blank">Contact Form 7</a>. Shortcodes use a slightly different syntax with CF7. All of the options are still available, but the example above would be used in a form like this:

<pre lang="html" line="1">
[cryptbutton keyid:42 "Encrypt"]
[submit "Send"]
</pre>

<h2>Support</h2>

For support and bug reports, please visit the <a href="https://github.com/pymander/wordpress-openpgp/issues">GitHub project page</a>.
