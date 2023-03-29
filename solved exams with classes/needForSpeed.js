function needForSpeed(input) {
    let n = Number(input.shift());

    class Car {
        constructor(carName, carMileage, carFuel) {
            this.name = carName;
            this.mileage = Number(carMileage);
            this.fuel = Number(carFuel);
        }
        drive(distance, fuel) {
            if (this.fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                this.fuel -= fuel;
                this.mileage += distance;
                console.log(`${this.name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (this.mileage >= 100000) {
                    delete cars[this.name];
                    console.log(`Time to sell the ${this.name}!`);
                }
            }
        }

        refuel(fuel) {
            if ((this.fuel + fuel) > 75) {
                fuel = 75 - this.fuel;
                this.fuel = 75;
            } else {
                this.fuel += fuel;
            }
            console.log(`${this.name} refueled with ${fuel} liters`);
        }

        revert(kilometers) {
            if ((this.mileage - kilometers) >= 10000) {
                this.mileage -= kilometers;
                console.log(`${this.name} mileage decreased by ${kilometers} kilometers`);
            } else {
                this.mileage = 10000;
            }
        }

        toString() {
            console.log(`${this.name} -> Mileage: ${this.mileage} kms, Fuel in the tank: ${this.fuel} lt.`);
        }
    }

    let cars = {};

    for (let i = 0; i < n; i++) {
        let [carName, carMileage, carFuel] = input[i].split('|');

        let car = new Car(carName, carMileage, carFuel);
        cars[carName] = car;
    }

    for (let i = n; i < input.length; i++) {
        let [command, carName, ...tokens] = input[i].split(' : ');
        let car = cars[carName];
        if (command === 'Drive') {
            let distance = Number(tokens[0]);
            let fuel = Number(tokens[1]);

            car.drive(distance, fuel);
        } else if (command === 'Refuel') {
            let fuel = Number(tokens[0]);

            car.refuel(fuel);

        } else if (command === 'Revert') {
            let kilometers = Number(tokens[0]);
            car.revert(kilometers);

        } else if (command === 'Stop') {

            for (const car in cars) {
                
                cars[car].toString();
            }
        }
    }
}



// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);
// console.log('................');
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