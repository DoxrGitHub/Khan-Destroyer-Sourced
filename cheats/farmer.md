# Energy point farmer
  
  **No video tutorial**
  <details>
    <summary>What does this do?</summary>
    Afaik, it just overwrites default json parse to return something else, re-does a single assignment a bunch of times by clicking the answer to the prewritten question and apparently Khan academy doesn't care. It gives you points even though you did it. Will give you a bunch of energy.
  </details>

Go to Khan Adademy (any page, this is to bypass cors issues for iframe), run the bookmarklet (bookmarklet code below), and then find a quiz for anything really. Don't use one you already did. Copy url, paste it in the input thing, and just wait as the assignment is automatically completed.

Bookmarklet:

```
javascript:fetch("https://raw.githubusercontent.com/DoxrGitHub/Khan-Destroyer-Sourced/main/source/farmer.js").then(data => data.text()).then(script => eval(script))
```