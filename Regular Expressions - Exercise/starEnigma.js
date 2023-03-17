function starEnigma(input) {

    let numberOfMessages = Number(input[0])
    let pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:\>]*:(?<planetPopulation>\d+)[^@\-!:\>]*!(?<attackType>[AD])![^@\-!:\>]*->(?<soldierCount>[\d]+)/g;

    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 1; i <= numberOfMessages; i++) {
        let currMessage = input[i];

        let numberOfChar = countingOfChar(currMessage);

        let decryptedMessage = decryptingOfMessage(currMessage, numberOfChar);

        let planetInfo = pattern.exec(decryptedMessage);

        if (planetInfo) {
            let planetName = planetInfo[1];
            // let planetPopulation = planetInfo[2];
            let attackType = planetInfo[3];
            //let soldierCount = planetInfo[4];

            if (attackType === 'A') {
                attackedPlanets.push(planetName);
            } else if (attackType === 'D') {
                destroyedPlanets.push(planetName);
            }

            planetInfo = pattern.exec(decryptedMessage);
        }
    }

    let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);
    if (sortedAttackedPlanets.length > 0) {

        for (const planet of sortedAttackedPlanets) {

            console.log(`-> ${planet}`);
        }
    }

    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
    if (sortedDestroyedPlanets.length > 0) {

        for (const planet of sortedDestroyedPlanets) {

            console.log(`-> ${planet}`);
        }
    }

    function decryptingOfMessage(mesagge, number) {

        let decryptedMessage = '';

        for (let i = 0; i < mesagge.length; i++) {
            let currCharNumber = mesagge.charCodeAt(i);
            decryptedMessage += String.fromCharCode(currCharNumber - number);
        }

        return decryptedMessage;
    }

    function countingOfChar(text) {

        let counter = 0;

        for (let i = 0; i < text.length; i++) {

            let currCharNumber = text.charCodeAt(i);
            if (currCharNumber === 65 || currCharNumber === 97 || currCharNumber === 82 || currCharNumber === 114 || currCharNumber === 84 || currCharNumber === 116 || currCharNumber === 83 || currCharNumber === 115) {
                counter++;
            }
        }

        return counter;
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
console.log('..............');
starEnigma(['3',

    "tt(''DGsvywgerx>6444444444%H%1B9444",

    'GQhrr|A977777(H(TTTT',

    'EHfsytsnhf?8555&I&2C9555SR']);
