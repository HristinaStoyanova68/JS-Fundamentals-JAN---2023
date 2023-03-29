function pirates(input) {

    class City {
        constructor(town, population, gold) {
            this.town = town;
            this.population = population;
            this.gold = gold;
        }
        plunder(population, gold) {
            this.population -= population;
            this.gold -= gold;
            if (this.population > 0 && this.gold > 0) {
                console.log(`${this.town} plundered! ${gold} gold stolen, ${population} citizens killed.`);;
            }else {
                console.log(`${this.town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                console.log(`${this.town} has been wiped off the map!`);
               delete cities[this.town];
                 
            }
        }
        prosper(gold) { 
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {

                this.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${this.town} now has ${this.gold} gold.`);
            }
        }
    }

    let cities = {};

    let towndata = input.shift();

    while (towndata !== 'Sail') {
        let [town, population, gold] = towndata.split('||');
        population = Number(population);
        gold = Number(gold);
        let city = new City(town, population, gold);
        if (!cities.hasOwnProperty(town)) {
            cities[town] = city;
        } else {
            cities[town]['population'] += population;
            cities[town]['gold'] += gold;
        }

        towndata = input.shift();
    }

    let commandsInfo = input.shift();

    while (commandsInfo !== 'End') {
        let [command, town, ...tokens] = commandsInfo.split('=>');


        if (command === 'Plunder') {
            let people = Number(tokens[0]);
            let gold = Number(tokens[1]);
            let city = cities[town];
            city.plunder(people, gold);
        } else if (command === 'Prosper') {
            let gold = Number(tokens[0]);
            let city = cities[town];
            city.prosper(gold);
        }

        commandsInfo = input.shift();
    }

    let count = Object.keys(cities).length;

    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);

        for (const city of Object.keys(cities)) {
            console.log(`${city} -> Population: ${cities[city]['population']} citizens, Gold: ${cities[city]['gold']} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
console.log('.............');
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);