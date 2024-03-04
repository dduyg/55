---
layout: essay
type: essay
published: true
title: "Example Post"
permalink: posts/fenced-code-blocks
# All dates must be YYYY-MM-DD format!
date: 2023-09-08
labels:
  - Text Transformation
  - JavaScript
  - Glitch
# projectlabel: -
# mediumurl: -
# githuburl: -
# summary of max. 165 characters <meta name="description>
summary: fjkkfhjjijjghj
---

```js
function convertText(caseType) {
    let inputText = document.getElementById('inputText').value;
    let outputText = document.getElementById('outputText');

    switch (caseType) {
        case 'uppercase':
            outputText.value = inputText.toUpperCase();
            break;
        case 'lowercase':
            outputText.value = inputText.toLowerCase();
            break;
        case 'titlecase':
            outputText.value = inputText.replace(/\b\w/g, c => c.toUpperCase());
            break;
        case 'capitalizedcase':
            outputText.value = inputText.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            break;
        case 'sentencecase':
            outputText.value = inputText.toLowerCase().replace(/(^|\. *)([a-z])/g, (match, separator, char) => separator + char.toUpperCase());
            break;
        case 'spacehyphen':
            outputText.value = inputText.replace(/ /g, '-');
            break;
        case 'hyphenspace':
            outputText.value = inputText.replace(/-/g, ' ');
            break;
        case 'spaceunderscore':
            outputText.value = inputText.replace(/ /g, '_');
            break;
        case 'underscorespace':
            outputText.value = inputText.replace(/_/g, ' ');
            break;
        case 'camelcase':
            outputText.value = inputText.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
            break;
        default:
            outputText.value = inputText;
    }
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
```
