function division(number) {

    let biggestDivisor = 0;
    let divisorsArray = [10, 7, 6, 3, 2];

    for (let i = 0; i < divisorsArray.length; i++) {
        let currDivisor = divisorsArray[i];
        if (number % currDivisor === 0) {
            biggestDivisor = currDivisor;
            break;
        }
    }
    if (biggestDivisor === 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${biggestDivisor}`);
    }
}

division(30);
division(15);
division(12);
division(1643);