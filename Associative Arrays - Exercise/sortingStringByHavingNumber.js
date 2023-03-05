function sortingStringByHavingNumberOnTop(input) {

    let numbersOnTop = [];
    let lettersOnTop = [];
    let sorted = [];
    
    for (let i = 0; i < input.length; i++) {
        let currElem = input[i][0];
        
        if (currElem == Number(currElem)) {
            numbersOnTop.push(input[i]);
            
        } else {
            lettersOnTop.push(input[i]);
        }
    }
    sorted.push(numbersOnTop);
    sorted.push(lettersOnTop)
    
    return sorted;
}

console.log(sortingStringByHavingNumberOnTop([ '7IK9Yo0h', 'tSzE5t0p' ]));