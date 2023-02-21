function bitcoinMining(array) {

    let totalAmount = 0;
    let bitcoinsAmount = 0;
    let bitcoinPrice = 11949.16;
    let isFirstDay = false;
    let firstDay = 0;
    let boughtBitcoins = 0;

    for (let i = 1; i <= array.length; i++) {

        let goldPrice = 67.51;
        let currAmountOfGold = array[i - 1];
        if (i % 3 === 0) {
            currAmountOfGold *= 0.70;
        }
        goldPrice *= currAmountOfGold;
        totalAmount += goldPrice;
        if (totalAmount >= bitcoinPrice) {
            bitcoinsAmount = Math.trunc(totalAmount / bitcoinPrice);
            boughtBitcoins += bitcoinsAmount;
            if (isFirstDay === false) {
                isFirstDay = true;
                firstDay = i;
            }
            totalAmount -= bitcoinsAmount * bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (isFirstDay) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
console.log('...........');
bitcoinMining([50, 100]);
console.log('...........');
bitcoinMining([3124.15, 504.212, 2511.124]);