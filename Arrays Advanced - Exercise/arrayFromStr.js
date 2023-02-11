function arrayFromString(text) {
    let textLength = text.length;
    let arrayFromString = [];
    let word = '';
    
    for (let i = 0; i < textLength; i++) {
            let currElem = text[i];
            
            if (currElem !== ' ') {
                    word += currElem;
            }
            if (currElem === ' ' || i === textLength - 1) {
                
                    arrayFromString.push(word);
                    word = '';
            }
            
    }
    return arrayFromString;
}

console.log(arrayFromString('George is not going!'));
console.log(arrayFromString('George is going!'));