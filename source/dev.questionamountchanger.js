if (void 0!== window.e) alert("This has already been ran!");
else {
    let e = JSON.parse;
    JSON.parse = function(a, t) {
        let n = e(a, t);
        try {
            if (n && n.data && n.data.getOrCreateExerciseTask) {
                // Modify userExercises array
                if (Array.isArray(n.data.getOrCreateExerciseTask.result.userTask.userExercises)) {
                    n.data.getOrCreateExerciseTask.result.userTask.userExercises.splice(1); // Remove all but the first item
                }

                // Change completionCriteria name
                if (n.data.getOrCreateExerciseTask.result.userTask.task && n.data.getOrCreateExerciseTask.result.userTask.task.completionCriteria) {
                    n.data.getOrCreateExerciseTask.result.userTask.task.completionCriteria.name = "num_problems_1";
                }
/*
                if (n.data.assessmentItem.item.itemData) {
                    n.data.assessmentItem.item.itemData = '{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"Khan cheat by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}'
                }
                    */
            }
        } catch (r) {
            console.error("Error modifying parsed data:", r);
        }
        return n;
    };
    window.e =0; // Indicate execution
}
