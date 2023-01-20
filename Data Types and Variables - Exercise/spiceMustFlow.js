function spiceMustFlow(startingYield) {

    let days = 0;
    let leavingAmount = 0;

    while (startingYield >= 100) {
        days++;
        leavingAmount += startingYield - 26;
        startingYield -= 10;
    }
    let totalAmount = leavingAmount - 26;
    if (totalAmount < 0) {
        totalAmount = 0;
    }
    console.log(days);
    console.log(totalAmount);
}

spiceMustFlow(450);