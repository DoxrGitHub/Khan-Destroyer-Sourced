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

document.write(tutorialHTML);

function e(e) {
	const t = document.createElement("iframe");
	t.width = "1px";
	t.height = "1px";
	t.src = e;
	document.getElementsByTagName("html")[0].appendChild(t);
	const a = t.contentWindow;
	a.eval(farmScript)
}