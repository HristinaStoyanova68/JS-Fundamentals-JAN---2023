function blackFlag(input) {

    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let target = Number(input[2]);
    let total = 0;
    let counter = 0;

    for (let i = 0; i < days; i++) {

        counter++;
        total += dailyPlunder;

        if (counter % 3 === 0) {
            total += dailyPlunder / 2;
        }

        if (counter % 5 === 0) {
            total -= total * 0.30;
        }
    }

    if (total >= target) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percent = total / target * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}

blackFlag((["5", "40", "100"]));
console.log('...............');
blackFlag((["10", "20", "380"]));