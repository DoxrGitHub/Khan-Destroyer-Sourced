const attrs = {
    'class': '_i2ouqbf',
    'tabindex': '0',
};

let hrefArray = [];

let links = document.querySelectorAll('a[class="' + attrs['class'] + '"][tabindex="' + attrs['tabindex'] + '"]');

links.forEach(link => {
    hrefArray.push(link.getAttribute('href'));
});

console.log("last item: " + hrefArray[hrefArray.length - 1])

let iframeScript = `
(async () => {
const delay = ms => new Promise(res => setTimeout(res, ms));


  await delay(5000);

let hrefArray = [];

var h4Elements = document.getElementsByTagName('h4');
for (var i = 0; i < h4Elements.length; i++) {
    console.log(h4Elements[i].innerText)
    if (h4Elements[i].innerText.includes("Unit test")) {
        var aChildren = h4Elements[i].getElementsByTagName('a');
        console.log(aChildren.length)
        for (var j = 0; j < aChildren.length; j++) {
            console.log(aChildren[j].href)
            hrefArray.push(aChildren[j].href)
        }
    }
}

console.log("last item: " + hrefArray[hrefArray.length - 1])

// from here, hrefArray contains every lesson necessary to complete

let iframeScript = \`
let e = JSON.parse;

// Custom JSON.parse function
JSON.parse = function(t, n) {
    let a = e(t, n);
    try {
        // console.log(a);
        a.question = {
            content: "free young thug made by ilyTobias[[☃ radio 1]]",
            images: {},
            widgets: {
                "radio 1": {
                    alignment: "default",
                    graded: true,
                    options: {
                        choices: [{
                            content: "Correct answer",
                            correct: true
                        }, {
                            content: "Incorrect answer",
                            correct: false
                        }],
                        deselectEnabled: false,
                        displayCount: null,
                        hasNoneOfTheAbove: false,
                        multipleSelect: false,
                        onePerLine: true,
                        randomize: false
                    },
                    static: false,
                    type: "radio",
                    version: {
                        major: 1,
                        minor: 0
                    }
                }
            }
        };
        a && a.data && a.data.t && a.data.t.item && a.data.t.item.i && (a.data.t.item.i = '{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}')
    } catch (r) {
        console.error("Error modifying parsed data:", r)
    }
    return a
};

window.e = true;

(function() {
    window.stopped = false;
    if (typeof window.e === 'undefined') {
        alert("Please run Khan Destroyer before you use the farmer, this is essential for this.");
    } else {
        window.shouldContinueLoop = true; // Flag to control the loop
        function checkElementAndPerformAction() {

    const targetElement = document.querySelector('h3._1lu7ykzn');
    if (targetElement) {
        console.log("Element found Performing action...");
        document.write("<h1>done</h1>");
        window.parent.postMessage('remove', '*');
        window.shouldContinueLoop = false;
    } else {
        console.log("Element not found.");
    }
}

        function e() {
            if (window.stopped ||!shouldContinueLoop) {
                return;
            }

            document.getElementsByClassName("_ssxvf9l")[0]?.click();
            document.getElementsByClassName("_1f0fvyce")[0]?.click();

            setTimeout(function() {
                document.getElementsByClassName("_rz7ls7u")[0]?.click();
                document.getElementsByClassName("_6t500vf")[0]?.click();

                checkElementAndPerformAction();
                

                e(); // Call the function again
            }, 1000);
        }

        e();
    }
})();
\`

    var iframes = window.parent.document.getElementsByTagName('iframe');
    let id = ""

    // Iterate over each iframe
    for (var i = 0; i < iframes.length; i++) {
        var src = iframes[i].src;

        // Assuming the ID is part of the URL path and we want to extract it
        
        console.log(window.location.pathname)
        console.log(src)
        console.log(src === window.location.href)
        if (window.location.href === src) {
            var uniqueId = "unique_iframe_" + Math.floor(Math.random() * 1000000);
            iframes[i].id = uniqueId;
            id = uniqueId;
            console.log("found good id: " + id)
            break;
        }
    }

document.write("<html><head></head><body><h1>Started...</h1><h2>The script is now completing the unit!</h2></body></html>")

window.continue = true;

function newIframe(e) {
    const t = document.createElement("iframe");
    t.width = "1px";
    t.height = "1px";
    t.src = e;
    document.getElementsByTagName("html")[0].appendChild(t);
    const a = t.contentWindow;
	a.eval(iframeScript)
    
        // Listen for messages from the iframe
        window.addEventListener('message', function(event) {
            console.log("got event")
            if (event.data === 'remove') {
                document.querySelectorAll('iframe').forEach(iframe => iframe.remove());
                console.log("remove message")
                if (window.continue === true) {
                setTimeout(() => {
                    newIframe(hrefArray[0]);
                }, 100);
            } else {
                        document.write("<h1>done</h1>");
window.parent.postMessage("remove-" + id, '*');            }
            }
        });
}

setTimeout(() => {
    newIframe(hrefArray[0]);
}, 100);
})();
`

document.write(`
    <html>
      <head>
      </head>
      <body>
        <h1>Started...</h1>
        <h2>The script is now completing the course!</h2>
      </body>
    </html>
    `)
    
    function newIframe(e) {
        const t = document.createElement("iframe");
        t.width = "1px";
        t.height = "1px";
        t.src = e;
        document.getElementsByTagName("html")[0].appendChild(t);
        const a = t.contentWindow;
        a.eval(iframeScript)
    }

        // Listen for messages from the iframe
        window.addEventListener('message', function(event) {
            if (event.data.includes('remove-')) {
                let deleteidarray = event.data.split("-")
                let delID = deleteidarray[1]
                console.log(delID)
                document.body.removeChild(document.getElementById(delID));
            }
        });
    
    function delayedNewIframe(index, array) {
        if (index >= array.length) return;
      
        setTimeout(() => {
          newIframe(array[index]);
          delayedNewIframe(index + 1, array);
        }, 5000);
      }
      
      
      
      delayedNewIframe(0, hrefArray); 