function stringSubstring(word, text) {

    const textAsArr = text.split(' ').map(x => x.toLowerCase());
    let isFound = false;

    for (const element of textAsArr) {

        if (element === word) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
console.log('.............');
stringSubstring('python', 'JavaScript is the best programming language');