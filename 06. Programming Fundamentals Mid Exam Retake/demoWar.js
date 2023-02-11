function manOWar(input) {

    let index = 0;
    let pirateShip = input[index];
    index++;
    let pirateShipAsArray = arrayFromString(pirateShip);
    let pirateShipAsArrayLength = pirateShipAsArray.length;

    let warShip = input[index];
    index++;
    let warShipAsArray = arrayFromString(warShip);
    let warShipAsArrayLength = warShipAsArray.length;

    let maxHealth = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    while (command !== 'Retire') {

        let commandAsArray = arrayFromString(command);
        let currCommand = commandAsArray[0];

        switch (currCommand) {
            // calculate fire demage
            case 'Fire':
                let fireIndex = Number(commandAsArray[1]);
                let fireDamage = Number(commandAsArray[2]);
                let newFireIvdexValue = '';

                if (fireIndex >= 0 && fireIndex < warShipAsArrayLength) {

                    let currNumberFromWarShip = Number(warShipAsArray[fireIndex]);

                    currNumberFromWarShip -= fireDamage;
                    newFireIvdexValue += currNumberFromWarShip;
                    warShipAsArray[fireIndex] = newFireIvdexValue;

                    if (currNumberFromWarShip <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            case 'Defend':
                // calculate defend demage
                let startIndex = Number(commandAsArray[1]);
                let EndIndex = Number(commandAsArray[2]);
                let defendDamage = Number(commandAsArray[3]);

                if (startIndex >= 0 && startIndex < pirateShipAsArrayLength && EndIndex >= 0 && EndIndex < pirateShipAsArrayLength) {

                    for (let i = startIndex; i <= EndIndex; i++) {
                        let newDefendValue = '';
                        let currNumberFromPirateShip = Number(pirateShipAsArray[i]);
                        currNumberFromPirateShip -= defendDamage;

                        if (currNumberFromPirateShip <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                        newDefendValue += currNumberFromPirateShip;
                        pirateShipAsArray[i] = newDefendValue;
                    }
                }
                break;
            case 'Repair':
                // calculate repair stuff - no more than maxHealth
                let repairIndex = Number(commandAsArray[1]);
                let health = Number(commandAsArray[2]);
                let newHealthValue = '';

                if (repairIndex >= 0 && repairIndex < pirateShipAsArrayLength) {
                    let currHealthFromPirateShip = Number(pirateShipAsArray[repairIndex]);

                    currHealthFromPirateShip += health;

                    if (currHealthFromPirateShip > maxHealth) {
                        currHealthFromPirateShip = maxHealth;
                    }
                    newHealthValue += currHealthFromPirateShip;
                    pirateShipAsArray[repairIndex] = newHealthValue;
                }
                break;
            case 'Status':
                // calculate how many sections need repair - 
                //  all which are lower than 20% of maxHealth

                let neededHealth = maxHealth * 0.20;
                let counterRepairSection = 0;
                for (let i = 0; i < pirateShipAsArrayLength; i++) {
                    let currValue = Number(pirateShipAsArray[i]);

                    if (currValue < neededHealth) {
                        counterRepairSection++;
                    }
                }
                console.log(`${counterRepairSection} sections need repair.`);
                break;
        }
        command = input[index];
        index++;
    }
    // if a stalemate occurs - calculate both ships status
    let pirateShipStatus = 0;
    let warShipStatus = 0;

    for (let i = 0; i < pirateShipAsArrayLength; i++) {
        let currValue = Number(pirateShipAsArray[i]);
        pirateShipStatus += currValue;
    }
    for (let i = 0; i < warShipAsArrayLength; i++) {
        warShipStatus += Number(warShipAsArray[i]);

    }

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);

    // create pirate ship as array of numbers

    function arrayFromString(text) {

        let textLength = text.length;
        let arrayFromString = [];
        let element = '';

        for (let i = 0; i < textLength; i++) {
            let currElem = text[i];

            if (currElem !== '>' && currElem !== ' ') {
                element += currElem;
            }
            if (currElem === '>' || currElem === ' ' || i === textLength - 1) {
                arrayFromString.push(element);
                element = '';
            }
        }
        return arrayFromString;
    }
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]
);
console.log('...........');
manOWar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]
);