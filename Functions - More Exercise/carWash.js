function carWash(array) {
    // · soap – add 10 to the value

    // · water – increase the value by 20%

    // · vacuum cleaner – increase the value by 25%

    // · mud – decrease the value by 10%

    let value = 0;
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currCommand = array[i];

        switch (currCommand) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.20;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.90;
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud",

    "vacuum cleaner"]);