function solve(input) {
    let word = input.toString();
    let result = "";
    for (let i = word.length - 1; i >= 0; i--) {
        let j = word[i];
        result += j;

    }
    console.log(result);


}

solve(`1234`);