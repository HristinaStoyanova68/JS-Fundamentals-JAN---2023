function pascalCaseSplitter(string) {

    let result = string[0];
    let lower = string.toLowerCase();

    for (let i = 1; i < string.length; i++) {
    
        if (string[i] !== lower[i]) {
            result += ', ';
        } 
        result += string[i];
    }
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('..........');
pascalCaseSplitter('HoldTheDoor');
console.log('..........');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');