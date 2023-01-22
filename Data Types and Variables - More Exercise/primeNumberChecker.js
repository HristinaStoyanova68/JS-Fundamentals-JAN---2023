function primeNumberChecker(num) {
    let numIsPrime = true;
    for (let currDivisor = 2; currDivisor < num; currDivisor++) {
        if (num % currDivisor === 0) {
            console.log(`false`);
            return;
        }
    }
    if (numIsPrime) {
        console.log(true);
    }


}

primeNumberChecker(9);