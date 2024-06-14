let newtutorialHTML = `
<html>
  <h1>How to use</h1>
  <h2>Make sure you ran this bookmark on a khan url, doesnt matter what url as long as its an offical khan link. </h1>
    </br>
    <p>Efficiency ammount (the higher, the laggier... don't do 100 unless you're sure you can run it, otherwise it crashes your browser).</p>
    <input type="range" min="1" max="100" value="5" class="slider" id="url">
    <button id="btn" onclick="newE(document.getElementById(\'url\').value)">Start Farm</button>
</html>
`

let tutorialHTML = `
<html>
  <h1>How to use</h1>
  <h2>Make sure you ran this bookmark on a khan url, doesnt matter what url as long as its an offical khan link. </h1>
    </br>
    <p>Put a khan academy url to a lesson into a input box bellow, then press the farm button and it\'ll farm points on that lesson, you can farm from more then one url at a time BUT NOT THE SAME LESSON.</p>
    <input id="url"></input>
    <button id="btn" onclick="e(document.getElementById(\'url\').value)">Farm</button>
</html>
`

let farmScript = `
let e = JSON.parse;
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
					"static": false,
					type: "radio",
					version: {
						major: 1,
						minor: 0
					}
				}
			}
		};
		a && a.data && a.data.t && a.data.t.item && a.data.t.item.i && (a.data.t.item.i = '{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')
	} catch (r) {
		console.error("Error modifying parsed data:", r)
	}
	return a
}, window.e = !0;
(function() {
	window.stopped = false;
	if (void 0 === window.e) alert("Please run Khan Destroyer before you use the farmer, this is essensial for this.");
	else {
		function e() {
			if (stopped === true) {
				return
			}
			document.getElementsByClassName("_ssxvf9l")[0]?.click();
			document.getElementsByClassName("_1f0fvyce")[0]?.click();
			setTimeout(function() {
				document.getElementsByClassName("_rz7ls7u")[0]?.click();
				document.getElementsByClassName("_6t500vf")[0]?.click();
				document.getElementsByClassName("_dyu04hi")[0]?.click();
				e()
			}, 1e3)
		}
		e()
	}
})();
`

let ssq = [ // 100 quizzes
    "/math/ap-calculus-bc/bc-limits-new/bc-1-2/e/limits-intro",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-3/e/two-sided-limits-from-graphs",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-3/e/one-sided-limits-from-graphs",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-3/e/connecting-limits-and-graphical-behavior",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-4/e/creating-tables-to-approximate-limits",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-4/e/finding-limits-numerically",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-4/e/one-sided-limits-from-tables",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5a/e/limits-of-combined-functions-sums",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5a/e/limits-of-combined-functions-graphs",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5a/e/limits-of-composite-functions--graphs",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5b/e/find-limits-by-direct-substitution",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5b/e/identify-undefined-limits-by-direct-substitution",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5b/e/determining-trigonometric-limits",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-5b/e/limits-of-piecewise-functions",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-6/e/two-sided-limits-using-algebra",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-6/e/limits_2",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-6/e/find-limits-using-trig-identities",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-7/e/conditions-for-using-direct-substitution",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-7/e/selecting-procedures-for-calculating-limits-2",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-7/e/selecting-procedures-for-calculating-limits-3",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-8/e/squeeze-theorem",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-10/e/analyzing-discontinuities-graphical",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-11/e/analyze-continuity-at-a-point-graphically",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-11/e/continuity-at-a-point-algebraic",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-12/e/continuous-functions--graphs",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-12/e/continuous-functions",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-13/e/continuity",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-14/e/unbounded-limits-graphical",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-14/e/limits-at-infinity-where-f-x--is-unbounded",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-15/e/limits-at-infinity-graphical",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-15/e/limits-at-infinity-where-x-is-unbounded",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-15/e/limits-at-infinity-of-rational-functions-radicals",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-16/e/intermediate-value-theorem",
    "/math/ap-calculus-bc/bc-limits-new/bc-1-16/e/conditions-for-ivt-and-evt-table",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-1/e/secants-and-average-rate-of-change",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-1/e/graphs-of-functions-and-their-derivatives",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-1/e/derivative-at-a-point-as-slope-of-tangent-line",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-2/e/the-formal-and-alternate-form-of-the-derivative",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-3/e/estimate-derivatives-from-tables",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-4/e/differentiability-at-a-point-graphical",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-4/e/differentiability-at-a-point-algebraic",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-5/e/power-rule-intro",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-5/e/differentiate-negative-powers",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-5/e/differentiate-fractional-powers",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-6a/e/differentiating-linear-functions",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-6a/e/basic-differentiation-rules",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-6b/e/power-rule-basic",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-6b/e/differentiate-radical-functions-intro",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-6b/e/tangents-of-polynomials",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-7/e/differentiate-sine-and-cosine",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-7/e/derivatives-of-ex-and-lnx",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-8/e/differentiate-products",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-8/e/product_rule",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-9/e/differentiate-quotients",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-9/e/quotient_rule",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-9/e/differentiate-rational-functions",
    "/math/ap-calculus-bc/bc-differentiation-1-new/bc-2-10/e/differentiate-basic-trigonometric-functions",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-1a/e/identify-composite-functions",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-1a/e/differentiate-composite-functions-intro",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-1b/e/chain_rule_1",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-1b/e/differentiate-exponential-functions-intro",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-1b/e/exp-log-trig-radical-composite-diff",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-2/e/implicit-differentiation",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-3/e/derivatives-of-inverse-functions",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-4/e/derivatives-of-inverse-trigonometric-functions",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-5a/e/differentiating-functions--find-the-error",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-5a/e/manipulating-functions-before-differentiation",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-5b/e/differentiating-using-multiple-rules-strategy",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-5b/e/derivatives-capstone",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-6/e/second-derivatives",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-6/e/second-derivatives-implicit-equations",
    "/math/ap-calculus-bc/bc-differentiation-2-new/bc-3-7/e/disguised-derivatives",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-1/e/meaning-of-the-derivative-in-context",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-2/e/interpret-motion-graphs",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-2/e/applications-of-derivatives--motion-along-a-line",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-3/e/applications-of-differentiation-in-biology--economics--physics--etc",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-4/e/analyzing-related-rates-problems-expressions",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-4/e/analyzing-related-rates-problems-equations",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-4/e/implicit-differentiation-of-related-functions",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-5/e/related-rates",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-5/e/related-rates-multiple-rates",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-5/e/related-rates-pythagorean-theorem",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-5/e/related-rates-advanced",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-6/e/local-linearization",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-7/e/lhopitals_rule",
    "/math/ap-calculus-bc/bc-diff-contextual-applications-new/bc-4-7/e/lhopitals-rule-inf",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-1/e/mean-value-theorem",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-1/e/conditions-for-mvt-table",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-2/e/find-critical-points",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-3/e/find-increasing-and-decreasing-intervals",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-4/e/critical-numbers",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-5/e/extreme-value-theorem",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-5/e/extreme-values-from-graphs",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-6a/e/recognizing_concavity",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-6a/e/analyze-points-of-inflection-graphical",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-6b/e/analyze-concavity-algebraic",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-6b/e/analyze-points-of-inflection-algebraic",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-7/e/second-derivative-test",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-9/e/justification-using-first-derivative-test",
    "/math/ap-calculus-bc/bc-diff-analytical-applications-new/bc-5-9/e/justification-using-second-derivative"
]

function e(e) {
	const t = document.createElement("iframe");
	t.width = "1px";
	t.height = "1px";
	t.src = e;
	document.getElementsByTagName("html")[0].appendChild(t);
	const a = t.contentWindow;
	a.eval(farmScript)
}

document.write(tutorialHTML);

function newE(sliderValue) {
    const numFrames = sliderValue; // Use the slider value as the number of frames
    const totalUrls = ssq.length; // Total number of URLs in the ssq array
    const startIndex = Math.floor(Math.random() * totalUrls); // Random starting index
    const selectedUrls = []; // Array to hold selected URLs

    for (let i = 0; i < numFrames; i++) {
        const index = (startIndex + i) % totalUrls; // Calculate the index for the current frame
        selectedUrls.push(ssq[index]); // Add the selected URL to the array
    }

    selectedUrls.forEach((url) => {
        const iframeUrl = `https://www.khanacademy.org${url}`; // Prepend "https://www.khanacademy.org" to the URL
        const iframe = document.createElement("iframe"); // Create an iframe element
        iframe.width = "1px"; // Set the width of the iframe
        iframe.height = "1px"; // Set the height of the iframe
        iframe.src = iframeUrl; // Set the source of the iframe
        document.getElementsByTagName("html")[0].appendChild(iframe); // Append the iframe to the HTML body
        const iframeWindow = iframe.contentWindow; // Get the window object of the iframe
        iframeWindow.eval(farmScript); // Evaluate the farm script in the iframe
    });
}