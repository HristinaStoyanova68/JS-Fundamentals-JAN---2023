function replaceRepeatingChars(string) {

    let result = string[0];

    for (let i = 1; i < string.length; i++) {
        const currElement = string[i];
        const prevElement = string[i - 1];

        if (currElement !== prevElement) {
            result += currElement;
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('...........');
replaceRepeatingChars('qqqwerqwecccwd');