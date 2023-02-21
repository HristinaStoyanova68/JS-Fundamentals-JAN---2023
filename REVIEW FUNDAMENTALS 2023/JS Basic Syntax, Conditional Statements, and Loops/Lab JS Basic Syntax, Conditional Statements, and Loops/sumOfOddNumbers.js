function sumOfOddNumbers(num) {

    let sum = 0;
    for (let i = 1; i <= num * 2; i++) {
        if (i % 2 !== 0) {
            console.log(i); 
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);

}

sumOfOddNumbers(5);
console.log('............');
sumOfOddNumbers(3);
console.log('............');
sumOfOddNumbers(7);