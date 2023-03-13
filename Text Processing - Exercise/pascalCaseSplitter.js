function pascalCaseSplitter(string) {

    let result = string[0];
    let lower = string.toLowerCase();

    for (let i = 1; i < string.length; i++) {
        const current = string[i];

        if (current !== lower[i]) {
            result += `, ${current}`
        } else {
            result += current;
        }
    }
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('..........');
pascalCaseSplitter('HoldTheDoor');
console.log('..........');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');