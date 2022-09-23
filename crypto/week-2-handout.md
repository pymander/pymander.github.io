---
id: 381
title: 'Week 2 Handout'
date: '2015-05-12T08:38:21-07:00'
author: 'Erik Arneson'
layout: page
guid: 'http://arnesonium.com/?page_id=381'
---

# History of Cryptography - Week 2 Handout

## New Terms

-   **monogram:** Single letter
-   **bigram:** Two-letter combination
-   **trigram:** Three-letter combination

## Frequency Analysis

### English Letter Frequency Chart

<img src="http://arnesonium.com/wp-content/uploads/2015/05/frequencyAnalysis.jpg" alt="frequencyAnalysis" width="460" height="350" class="aligncenter size-full wp-image-382" />

### Erik's Cyphertext

    KIESY ATKNC OEYPM WANTE MIECN VIMDL UADPR AEKKU ANBEK YCRKM YJJWK
    TNEKY CRYAA MIYMK OEKMD LRYJT YCROJ NVIMB EEMNC IEJYK FEUMY CRIEJ
    EWEKM IPKBE AADSE RMDMI YMMEC REJAN VIMSI NUIIE YQECM DVYPR WRYWR
    ECNEK 

## Playfair Cipher

<a href="http://learncryptography.com/playfair-cipher/">Here's an illustrated example of the Playfair Cipher.</a>

1.  If both letters are the same (or only one letter is left), add an    "X" after the first letter. Encrypt the new pair and    continue.
2.  If the letters appear on the same row of your table, replace them    with the letters to their immediate right respectively (wrapping    around to the left side of the row if a letter in the original    pair was on the right side of the row).
3.  If the letters appear on the same column of your table, replace    them with the letters immediately below respectively (wrapping    around to the top side of the column if a letter in the original    pair was on the bottom side of the column).
4.  If the letters are not on the same row or column, replace them    with the letters on the same row respectively but at the other    pair of corners of the rectangle defined by the original    pair. The order is important: the first letter of the encrypted    pair is the one that lies on the same row as the first letter of    the plaintext pair.

<img src="http://arnesonium.com/wp-content/uploads/2015/05/Screenshot-from-2015-05-11-140645.png" alt="Screenshot from 2015-05-11 14:06:45" width="542" height="342" class="aligncenter size-full wp-image-383" />