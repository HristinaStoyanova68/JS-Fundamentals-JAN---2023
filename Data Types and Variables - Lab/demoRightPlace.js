function demoRightPlace(text, charToChange, targetText) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_") {
            newText += charToChange;

        } else {
            newText += text[i];
        }
    }
    // if (newText === targetText) {
    //     console.log(`Matched`);
    // } else {
    //     console.log(`Not Matched`);
    // }
    console.log(newText === targetText ? `Matched` : `Not Matched`);
}
demoRightPlace('Str_ng', 'o', 'Strong');