function plantDiscovery(input) {

    class Plant {
        constructor(plantName, plantRarity) {
            this.name = plantName;
            this.rarity = Number(plantRarity);
            this.rating = 0;
            this.counter = 0;
        }
        rate(rating) {
            this.rating += rating;
            this.counter++;
        }
        update(rarity) {
            this.rarity = rarity;
        }
        reset() {
            this.rating = 0;
            this.counter = 0;
        }
        toString() {
            if (this.rating !== 0 && this.counter !== 0) {

                console.log(`- ${this.name}; Rarity: ${this.rarity}; Rating: ${(this.rating / this.counter).toFixed(2)}`);
            }
            else {
                console.log(`- ${this.name}; Rarity: ${this.rarity}; Rating: 0.00`);
            }
        }
    }

    let plants = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [plantName, plantRarity] = input[i].split('<->');
        let plant = new Plant(plantName, plantRarity);
        if (!plants.hasOwnProperty(plantName)) {

            plants[plantName] = plant;
        } else {
            plant.update(plantRarity);
        }
    }

    for (let i = n; i < input.length; i++) {
        let command = input[i].split(': ')[0];
        if (command === 'Exhibition') {
            console.log('Plants for the exhibition:');
            for (const plant in plants) {
                plants[plant].toString();
            }
        } else {
            let commandData = input[i].split(': ')[1];
            let [plantName, token] = commandData.split(' - ');
            let plant = plants[plantName];

            if (!plants.hasOwnProperty(plantName)) {
                console.log('error');
            } else {
                if (command === 'Rate') {
                    let rating = Number(token);
                    plant.rate(rating);
                } else if (command === 'Update') {
                    let rarity = Number(token);
                    plant.update(rarity);
                } else if (command === 'Reset') {
                    plant.reset();
                }
            }
        }
    }
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
console.log('............');
plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);

