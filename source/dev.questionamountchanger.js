if (void 0!== window.e) alert("This has already been ran!");
    
else {
    let e = JSON.parse;
    JSON.parse = function(a, t) {
        let n = e(a, t);
        try {
            if (n && n.data && n.data.getOrCreateExerciseTask) {
                if (Array.isArray(n.data.getOrCreateExerciseTask.result.userTask.userExercises)) {
                    n.data.getOrCreateExerciseTask.result.userTask.userExercises.splice(1); // Remove all but the first item
                }
            }
        } catch (r) {
            console.error("Error modifying parsed data:", r);
        }
        return n;
    };
    window.e =!0; // Indicate execution
        document.write(document.getElementsByTagName("html")[0].outerHTML);
}