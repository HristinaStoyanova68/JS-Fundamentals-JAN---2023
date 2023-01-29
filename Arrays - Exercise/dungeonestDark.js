function dungeonestDark(input) {

    let inputAsString = input.toString();
    let tempRoom = "";
    let roomArray = [];
    let health = 100;
    let coins = 0;
    let monsterName = "";
    for (let i = 0; i < inputAsString.length; i++) {
        let currElem = inputAsString[i];
        if (currElem !== "|") {
            tempRoom += currElem;
            if (i === inputAsString.length - 1) {
                roomArray.push(tempRoom);
            }
        } else {
            roomArray.push(tempRoom);
            tempRoom = "";
        }
    }
    for (let i = 0; i < roomArray.length; i++) {
        let currRoom = roomArray[i];
        let currRoomArray = [];
        let tempRoomArray = [];

        for (let j = 0; j < currRoom.length; j++) {
            let roomCurrElem = currRoom[j];
            if (roomCurrElem !== " ") {
                tempRoomArray += roomCurrElem;
                if (j === currRoom.length - 1) {
                    currRoomArray.push(tempRoomArray);
                }
            } else {
                currRoomArray.push(tempRoomArray);
                tempRoomArray = "";
            }
        }
        let item = currRoomArray[0];
        let num = Number(currRoomArray[1]);

        switch (item) {
            case "potion":
                if ((health + num) > 100) {
                    let currHealed = num - ((health + num) - 100);
                    console.log(`You healed for ${currHealed} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${num} hp.`);
                    health += num;
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${num} coins.`);
                coins += num;
                break;
            default:
                monsterName = item;
                health -= num;
                if (health > 0) {
                    console.log(`You slayed ${monsterName}.`);
                } else {
                    console.log(`You died! Killed by ${monsterName}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}


dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
