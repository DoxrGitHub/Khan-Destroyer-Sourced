function getHrefValues(className) {
    const elements = document.querySelectorAll(`a[role="button"][class="${className}"]`);
    const hrefValues = Array.from(elements).map(element => element.getAttribute('href'));
    return hrefValues;
}

// quiz button classes
const classNames = ['_1w2ulnnd', '_1jmukqkc'];

let hrefArray = [];

classNames.forEach(className => {
    const hrefs = getHrefValues(className);
    hrefArray.push(...hrefs);
});

var h4Elements = document.getElementsByTagName('h4');
for (var i = 0; i < h4Elements.length; i++) {
    if (h4Elements[i].innerText.includes("Quiz ")) {
        var aChildren = h4Elements[i].getElementsByTagName('a');
        for (var j = 0; j < aChildren.length; j++) {
            hrefArray.push(aChildren[j].href)
        }
    }
}

    var h4Elements = document.getElementsByTagName('h4');
    for (var i = 0; i < h4Elements.length; i++) {
        if (h4Elements[i].innerText.includes("Unit test")) {
            var aChildren = h4Elements[i].getElementsByTagName('a');
            for (var j = 0; j < aChildren.length; j++) {
                hrefArray.push(aChildren[j].href)
            }
        }
    }

// from here, hrefArray contains every lesson necessary to complete
console.log(hrefArray[0])

let iframeScript = `
let e = JSON.parse;

// Custom JSON.parse function
JSON.parse = function(t, n) {
    let a = e(t, n);
    try {
        console.log(a);
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
        var shouldContinueLoop = true; // Flag to control the loop

        function e() {
            if (window.stopped ||!shouldContinueLoop) {
                return;
            }

            document.getElementsByClassName("_ssxvf9l")[0]?.click();
            document.getElementsByClassName("_1f0fvyce")[0]?.click();

            setTimeout(function() {
                document.getElementsByClassName("_rz7ls7u")[0]?.click();
                document.getElementsByClassName("_6t500vf")[0]?.click();

                if (document.getElementsByClassName("_dyu04hi")[0]) {
                    shouldContinueLoop = false; // Set the flag to stop the loop
                }

                e(); // Call the function again
            }, 1000);
        }

        e();
    }
})();
`

document.write(`
<html>
  <head>
  </head>
  <body>
    <h1>Started...</h1>
    <h2>The script is now completing the unit!</h2>
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

hrefArray.forEach((link) => {
    newIframe(link)
});


/* - ** - */