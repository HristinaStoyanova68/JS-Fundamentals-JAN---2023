function solve(input) {
    let gold = 67.51;
    let bitcoin = 11949.16;
    let day = 0;
    let totalSum = 0;
    let firstDay = 0;
    let bitcoinCount = 0;
    let bougthBitcoin = 0;
    let sumBitcoin = 0;
    for (let i = 0; i < input.length; i++) {
        day++;

        let grams = Number(input[i]);
        if (day % 3 === 0) {
            grams = grams * 0.70;
        }
        let earningPerDay = grams * gold;
        totalSum += earningPerDay;

        if (totalSum >= bitcoin) {
            bitcoinCount++;
            bougthBitcoin = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bougthBitcoin * bitcoin);
            sumBitcoin += bougthBitcoin;

        }
        if (bitcoinCount === 1) {
            firstDay = day;
        }
    }
    console.log(`Bought bitcoins: ${sumBitcoin}`);
    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);


}

solve([3124.15, 504.212, 2511.124]);