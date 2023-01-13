function solve(number) {
    let num = 0;

    if (number % 10 === 0) {
        num = 10;

    } else if (number % 7 === 0) {
        num = 7;

    } else if (number % 6 === 0) {
        num = 6;

    } else if (number % 3 === 0) {
        num = 3;

    } else if (number % 2 === 0) {
        num = 2;

    }
    if (num === 0) {
        console.log("Not divisible");
    } else {
        console.log(`The number is divisible by ${num}`);
    }

}

solve(12);