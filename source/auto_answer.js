if (void 0 !== window.e) alert("This has already been ran!");
else {
    let e = JSON.parse;
    JSON.parse = function(a, t) {
        let n = e(a, t);
        try {
            n && n.data && n.data.assessmentItem && n.data.assessmentItem.item && n.data.assessmentItem.item.itemData && (n.data.assessmentItem.item.itemData = '{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"Khan cheat by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')
        } catch (r) {
            console.error("Error modifying parsed data:", r)
        }
        return n
    }, window.e = !0;
    document.write(document.getElementsByTagName("html")[0].outerHTML);
}
(function() {
    window.stopped = false;
    if (void 0 === window.e) alert("Please press Bookmarklet Again before you can use the farmer, this is essensial for this.");
    else {
        function farm() {
            if (stopped === true) {
                return;
            }
            document.getElementsByClassName("_ssxvf9l")[0]?.click() //Top Answer
            document.getElementsByClassName("_1f0fvyce")[0]?.click() //Lets start
            setTimeout(function() {
                document.getElementsByClassName("_rz7ls7u")[0]?.click() //Check answer
                document.getElementsByClassName("_6t500vf")[0]?.click() //Next question
                // document.getElementsByClassName("_1kkrg8oi")[0]?.click() //Next assignment
                                
                // this is the done screen checker. its very ugly, please bear with it

                var h4Elements = document.getElementsByTagName('h1');
                for (var i = 0; i < h4Elements.length; i++) {
                    if (h4Elements[i].innerHTML.includes("span")) {
                        var aChildren = h4Elements[i].getElementsByTagName('span');
                        for (var j = 0; j < aChildren.length; j++) {
                            // the done screen has been found
                            alert("done!")
                            break;
                        }
                    }
                }

                farm()
            }, 1000)
        }

        farm()
    }
})();