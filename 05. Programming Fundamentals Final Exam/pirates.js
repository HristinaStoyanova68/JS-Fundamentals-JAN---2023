function pirates(input) {

    let citiesList = {};

    let cityData = input.shift();

    while (cityData !== 'Sail') {
        let [city, population, gold] = cityData.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!citiesList.hasOwnProperty(city)) {

            citiesList[city] = [population, gold];
        } else {
            citiesList[city][0] += population;
            citiesList[city][1] += gold;
        }

        cityData = input.shift();
    }

    let eventsData = input.shift();

    while (eventsData !== 'End') {

        let [event, town, token1, token2] = eventsData.split('=>');

        if (event === 'Plunder') {
            let people = Number(token1);
            let currGold = Number(token2);

            citiesList[town][0] -= people;
            citiesList[town][1] -= currGold;

            console.log(`${town} plundered! ${currGold} gold stolen, ${people} citizens killed.`);

            if (citiesList[town][0] === 0 || citiesList[town][1] === 0) {

                delete citiesList[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else if (event === 'Prosper') {

            let currGold = Number(token1);

            if (currGold > 0) {

                citiesList[town][1] += currGold;

                console.log(`${currGold} gold added to the city treasury. ${town} now has ${citiesList[town][1]} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }

        eventsData = input.shift();
    }

    if (Object.keys(citiesList).length !== 0) {

        console.log(`Ahoy, Captain! There are ${Object.keys(citiesList).length} wealthy settlements to go to:`);

        for (const city in citiesList) {

            console.log(`${city} -> Population: ${citiesList[city][0]} citizens, Gold: ${citiesList[city][1]} kg`);
        }
    } else {

        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    ;
console.log('..............');
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
    "End"])
    ;