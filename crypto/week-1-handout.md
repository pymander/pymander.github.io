---
id: 372
title: 'Week 1 Handout'
date: '2015-05-03T22:56:27-07:00'
author: 'Erik Arneson'
layout: page
guid: 'http://arnesonium.com/?page_id=372'
sharing_disabled:
    - '1'
switch_like_status:
    - '1'
---

# How to Discuss Cryptography

## Definitions

-   **Cryptography:** The science of coding and decoding messages so as    to keep these messages secure.
-   **Steganography:** Hiding a secret message within a larger one in    such a way that others can not discern the    presence or contents of the hidden message.
-   **Cryptanalysis:** The procedures, processes, methods, etc., used    to translate or interpret secret writings, as    codes and ciphers, for which the key is unknown.
-   **Cipher:** A secret method of writing, as by transposition or    substitution of letters, specially formed symbols, or    the like.
-   **Protocol:** A sequence of operations that ensures the protection    of data.
-   **Plaintext:** The message, also called cleartext.
-   **Ciphertext:** The message after encryption.
-   **Key (cryptographic):** A piece of information that determines the    operation of a cipher.
-   **Entropy:** Randomness, typically in relation to random data    collected by a computer.

## Alice, Bob, Chuck, and Eve

-   **Alice and Bob:** These "placeholder" characters want to    communicate securely using cryptography.
-   **Chuck:** Chuck is an active attacker. We won't see him often    until we discuss modern cryptography.
-   **Eve:** Eve is a passive attacker, or listener. She can overhear    encrypted messages, but cannot modify or interfere with    them.

In this course, we will usually take the roll of Alice, Bob, or Eve.

### A Passive Attack

Alice wants to send Bob a message. She encrypts the plaintext of the message using her favorite cipher and their shared key, producing the ciphertext. She sends the ciphertext to Bob, who decrypts it using Alice's favorite cipher, producing the plaintext.

Eve listens in on Alice and Bob's communication. She now has the ciphertext. While Eve can probably guess the cipher used, she has no knowledge of the shared key, so she cannot easily produce the
plaintext.

### An Active Attack: The Man in the Middle

Alice wants to send Bob a message. She encrypts the plaintext of the message using her favorite cipher and their shared key, producing the ciphertext. She attempts to send the ciphertext to Bob, for instance via the mail.

Chuck is an evil mailman, and he wants to change the message that Alice sends to Bob. He intercepts the mail and thus has access to the ciphertext before Bob does. If he can successfully use cryptanalysis to figure out the shared key, he can produce the plaintext, change the plaintext, and encrypt it into a new, changed ciphertext.

Bob receives the new ciphertext in the mail, and upon decrypting it using the shared key, has Chuck's altered plaintext. However, he is unaware that the plaintext has been altered, believing the shared key to be unknown to anybody but him and Alice.

# Math With Letters

Letter-based math is used in book ciphers, one-time pads, and other addition-based ciphers.

## To Add (Encrypt)

To add or encrypt using this table, use the formula *P + K = C*, where P is the plaintext, K is the key, and C is the cipertext.

Look up P along one edge of the table, and K along the other. The intersect is C.

## To Subtract (Decrypt)

To subtract or decrypt using this table, use the formula *C - K = P*.

Look up K along one edge of the table, and trace along that row or column until you find C. The resulting other edge of the table is P.

## The Table

<table border="1" cellpadding="4">


<colgroup>
<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">

<col  class="left">
</colgroup>
<tbody>
<tr>
<td class="left">&#xa0;</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
</tr>


<tr>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
</tr>


<tr>
<td class="left">B</td>
<td class="left">&#xa0;</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
</tr>


<tr>
<td class="left">C</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
</tr>


<tr>
<td class="left">D</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
</tr>


<tr>
<td class="left">E</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
</tr>


<tr>
<td class="left">F</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
</tr>


<tr>
<td class="left">G</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
</tr>


<tr>
<td class="left">H</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
</tr>


<tr>
<td class="left">I</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
</tr>


<tr>
<td class="left">J</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
</tr>


<tr>
<td class="left">K</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
</tr>


<tr>
<td class="left">L</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">X</td>
<td class="left">Y</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
</tr>


<tr>
<td class="left">M</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">Z</td>
<td class="left">A</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
</tr>


<tr>
<td class="left">N</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">B</td>
<td class="left">C</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
</tr>


<tr>
<td class="left">O</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">D</td>
<td class="left">E</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
</tr>


<tr>
<td class="left">P</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">F</td>
<td class="left">G</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
</tr>


<tr>
<td class="left">Q</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">H</td>
<td class="left">I</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
</tr>


<tr>
<td class="left">R</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">J</td>
<td class="left">K</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
</tr>


<tr>
<td class="left">S</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">L</td>
<td class="left">M</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
</tr>


<tr>
<td class="left">T</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">N</td>
<td class="left">O</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
</tr>


<tr>
<td class="left">U</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">P</td>
<td class="left">Q</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
</tr>


<tr>
<td class="left">V</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">R</td>
<td class="left">S</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
</tr>


<tr>
<td class="left">W</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">T</td>
<td class="left">U</td>
<td class="left">V</td>
<td class="left">W</td>
</tr>


<tr>
<td class="left">X</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">V</td>
<td class="left">W</td>
<td class="left">X</td>
</tr>


<tr>
<td class="left">Y</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">X</td>
<td class="left">Y</td>
</tr>


<tr>
<td class="left">Z</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">Z</td>
</tr>
</tbody>
</table>