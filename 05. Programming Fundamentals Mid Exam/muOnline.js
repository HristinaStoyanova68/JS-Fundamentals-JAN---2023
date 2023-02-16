function muOnline(rooms) {
    let commandsAsArray = stringAsArray(rooms);
    let commandsAsArrayLength = commandsAsArray.length;

    let health = 100;
    let bitcoins = 0;
    let chest = 100;

    for (let i = 0; i < commandsAsArrayLength; i++) {
        let room = commandsAsArray[i];

        let command = room[0];
        let amount = Number(room[1]);

        switch (command) {
            case 'potion':
                if (health + amount > 100) {
                    amount = 100 - health;
                    health = 100;
                } else {
                    health += amount;
                }
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                console.log(`You found ${amount} bitcoins.`);
                bitcoins += amount;
                break;
            default:
                let monster = command;

                if (amount < health) {
                    console.log(`You slayed ${monster}.`);
                    health -= amount;
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

    function stringAsArray(string) {
        let array = [];

        let stringLength = string.length;
        let element = '';
        let room = [];
        for (let i = 0; i < stringLength; i++) {
            let currElem = string[i];

            if (currElem !== ' ' && currElem !== '|') {
                element += currElem;
            }
            if (currElem === ' ' || currElem === '|' || i === stringLength - 1) {
                room.push(element);
                element = '';
            }
            if (currElem === '|' || i === stringLength - 1) {
                array.push(room);
                room = [];
            }
        }
        return array;
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log('...................');
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");