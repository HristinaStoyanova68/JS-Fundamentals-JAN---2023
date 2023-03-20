function needForSpeed(input) {

    let numberOfCars = Number(input.shift());
    let carsList = {};
    let carsData = input.splice(0, numberOfCars);

    for (const line of carsData) {

        let [car, mileage, fuel] = line.split('|');

        if (!carsList.hasOwnProperty(car)) {
            carsList[car] = [Number(mileage), Number(fuel)];
        }
    }

    let commandLine = input.shift();

    while (commandLine !== 'Stop') {

        let [command, car, given1, given2] = commandLine.split(' : ');

        let token1 = Number(given1);
        let token2 = Number(given2);

        if (command === 'Drive') {
            if (carsList[car][1] < token2) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                carsList[car][0] += token1;
                carsList[car][1] -= token2;

                console.log(`${car} driven for ${token1} kilometers. ${token2} liters of fuel consumed.`);
            }
            if (carsList[car][0] >= 100000) {
                delete carsList[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (command === 'Refuel') {

            let fuel = token1;

            if ((carsList[car][1] + fuel) > 75) {
                fuel = 75 - carsList[car][1];
                carsList[car][1] = 75;
                console.log(`${car} refueled with ${fuel} liters`);
            } else {
                carsList[car][1] += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }

        } else if (command === 'Revert') {

            let kilometers = token1;

            if ((carsList[car][0] - kilometers) > 10000) {
                carsList[car][0] -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            } else {
                carsList[car][0] = 10000;
            }
        }

        commandLine = input.shift();
    }

    for (const car in carsList) {

        let mileage = carsList[car][0];
        let fuel = carsList[car][1];

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

needForSpeed ([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('.................');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);

