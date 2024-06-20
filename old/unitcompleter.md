# Unit Completer
  
  **No video tutorial**
  <details>
    <summary>What does this do?</summary>
    Programmatically completes an entire unit    
</details>

Go to a Khan Academy unit page, and once the site is loaded and everything, run the bookmarklet below. Then, wait.

Bookmarklet:

```
javascript:fetch("https://raw.githubusercontent.com/DoxrGitHub/Khan-Destroyer-Sourced/main/source/unitcompleter.js").then(data => data.text()).then(script => eval(script))
```