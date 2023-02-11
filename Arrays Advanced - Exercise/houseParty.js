function houseParty(input) {

    let guestArray = [];
    let finalArray = [];

    for (let i = 0; i < input.length; i++) {
        let command = arrayFromString(input[i]);
        let name = command[0];


        if (command.length === 3) {

            if (guestArray.length === 0) {
                guestArray.push(name);

            } else {
                let isExist = false;
                for (let guest of guestArray) {
                    if (name === guest) {
                        isExist = true;
                        break;
                    }
                }
                if (isExist) {
                    console.log(`${name} is already in the list!`);
                }
                else {
                    guestArray.push(name);
                }
            }
        } else {
            if (guestArray.length === 0) {
                guestArray.push(name);
                finalArray.push(name);
            } else {
                let isExist = false;
                for (let guest of guestArray) {
                    if (name === guest) {
                        isExist = true;
                        break;
                    }
                }
                if (isExist === false) {
                    console.log(`${name} is not in the list!`);
                }
                else {
                    let distinctArray = [];

                    for (let i = 0; i < guestArray.length; i++) {
                        let currName = guestArray[i];

                        if (currName !== name) {
                            distinctArray.push(currName);
                        }
                    }
                    guestArray = distinctArray;
                }
            }
        }
    }

    console.log(guestArray.join('\n'));

    function arrayFromString(text) {
        let textLength = text.length;
        let arrayFromString = [];
        let word = '';

        for (let i = 0; i < textLength; i++) {
            let currElem = text[i];

            if (currElem !== ' ') {
                word += currElem;
            }
            if (currElem === ' ' || i === textLength - 1) {

                arrayFromString.push(word);
                word = '';
            }
        }
        return arrayFromString;
    }
}

houseParty([
    'Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!']);
console.log('................');
houseParty([
    'Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!']);