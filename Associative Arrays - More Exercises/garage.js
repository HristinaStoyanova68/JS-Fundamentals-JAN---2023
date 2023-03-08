function garage(input) {

    let garages = {};

    for (const line of input) {
        let [garageNumber, carData] = line.split(' - ');

        let carDataInfo = carData.split(', ').map(x => x.split(': '));
        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [carDataInfo];
        } else {
            (garages[garageNumber]).push(carDataInfo);
        }
    }

    for (const key in garages) {
        console.log(`Garage № ${key}`);
        let keyValues = garages[key];

        for (let i = 0; i < keyValues.length; i++) {
            let keyValuesArrays = keyValues[i];
            let result = '--- '

            for (let j = 0; j < keyValuesArrays.length; j++) {

                if (j === keyValuesArrays.length - 1) {
                    result += `${keyValuesArrays[j][0]} - ${keyValuesArrays[j][1]}`;
                } else {
                    result += `${keyValuesArrays[j][0]} - ${keyValuesArrays[j][1]}, `;
                }
            }

            console.log(result);
        }
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log('...........');
garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);