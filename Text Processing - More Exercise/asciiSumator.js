function asciiSumator(input) {

    let num1 = input[0].charCodeAt();
    let num2 = input[1].charCodeAt();

    let startNum = Math.min(num1, num2);
    let endNum = Math.max(num1, num2);
    let string = input[2];
    let sum = 0;

    for (let i = 0; i < string.length; i++) {

        let currNum = string[i].charCodeAt();
       
        if (currNum > startNum && currNum < endNum) {
            sum += currNum;
        }
    }

    console.log(sum);
}

asciiSumator(['.', '@', 'dsg12gr5653feee5']);
console.log('................');
asciiSumator(['?',

    'E',

    '@ABCEF']);
console.log('.............');
asciiSumator(['a',

    '1',

    'jfe392$#@j24ui9ne#@$'])