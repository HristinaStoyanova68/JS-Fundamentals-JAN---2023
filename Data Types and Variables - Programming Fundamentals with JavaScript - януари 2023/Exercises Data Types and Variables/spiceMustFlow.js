function spiceMustFlow(startingYield) {

    let daylyYield = startingYield;
    let totalAmount = 0;
    let counter = 0;

    while(daylyYield >= 100) {
        counter++;

        totalAmount += daylyYield - 26;
        daylyYield -= 10;
    }
    if (totalAmount > 26) {
        totalAmount -= 26;
    }
    console.log(counter);
    console.log(totalAmount);
    
}

spiceMustFlow(111);
console.log('...............');
spiceMustFlow(450);