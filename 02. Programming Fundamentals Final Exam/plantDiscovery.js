function plantDiscovery(input) {

    let numOfPlants = Number(input.shift());
    let plantsList = {};
    let rating = 0;
    let counter = 0;

    let plants = input.splice(0, numOfPlants);

    for (const plant of plants) {
        let [plantName, rarity] = plant.split('<->');

        if (!plantsList.hasOwnProperty(plantName)) {

            plantsList[plantName] = {};
        }
        plantsList[plantName] = [{ [rarity]: rating }, counter];
    }

    let index = 0;
    let commandInfo = input[index];

    while (commandInfo !== 'Exhibition') {

        let [command, commandData] = commandInfo.split(': ');

        if (!(command === 'Rate' || command === 'Update' || command === 'Reset')) {
            console.log('error');
        } else {
            if (command === 'Rate') {
                let [currPlantName, currRating] = commandData.split(' - ');
                let counter = 0;
                if (plantsList.hasOwnProperty(currPlantName)) {
                    counter++;
                    let currValue = plantsList[currPlantName][0];
                    for (const key in currValue) {
                        currValue[key] += Number(currRating);
                    }
    
                    plantsList[currPlantName][1] += counter;
    
                } else {
                    console.log('error');
                }
            } else if (command === 'Update') {
                let [currPlantName, newRarity] = commandData.split(' - ');
    
                if (plantsList.hasOwnProperty(currPlantName)) {
                    let currValue = plantsList[currPlantName][0];
                    let currRating = 0;
                    for (const key in currValue) {
    
                        currRating = currValue[key];
                    }
    
                    let currCounter = plantsList[currPlantName][1];
                    plantsList[currPlantName] = [{ [newRarity]: currRating }, currCounter];
                } else {
                    console.log('error');
                }
    
            } else if (command === 'Reset') {
    
                let currPlantName = commandData;
    
                if (plantsList.hasOwnProperty(currPlantName)) {
    
                    let currValue = plantsList[currPlantName][0];
                    for (const key in currValue) {
    
                        plantsList[currPlantName] = [{ [key]: 0 }, 0];
                    }
                }
                else {
                    console.log('error');
                }
            } 
        }
        
        index++;
        commandInfo = input[index];
    }

    console.log(`Plants for the exhibition:`);

    let entries = Object.entries(plantsList);

    for (const entry of entries) {

        let key = Object.keys(entry[1][0]);
        let value = Object.values(entry[1][0]);
        let curValue = Number(value[0]);
        let currCounter = Number(entry[1][1]);
        let averageRating = 0;

        if (curValue === 0 && currCounter === 0) {
            averageRating = 0;
        } else {
            averageRating = curValue / currCounter;
        }

        console.log(`- ${entry[0]}; Rarity: ${key[0]}; Rating: ${averageRating.toFixed(2)}`);
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
    "Exhibition"])
    ;
// console.log('...........');
// plantDiscovery([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]
// );