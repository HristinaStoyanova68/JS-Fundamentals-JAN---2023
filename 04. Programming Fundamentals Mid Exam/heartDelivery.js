function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(Number);
    //console.log(neighborhood);
    let command = input.shift();
    let houseIndex = 0;

    while (command !== 'Love!') {
        let action = command.split(' ');
        let jumpLength = Number(action[1]);

        houseIndex += jumpLength;

        if (houseIndex >= neighborhood.length) {
            houseIndex = 0;
        }
        let houseValue = neighborhood[houseIndex];
        if (houseValue === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        } else {

            houseValue -= 2;
            neighborhood[houseIndex] = houseValue;
            if (houseValue === 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${houseIndex}.`);
    let houseCount = 0;
    for (let happyHouses of neighborhood) {
        if (happyHouses !== 0) {
            houseCount++;
        }
    }
    if (houseCount === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }

}

heartDelivery(
    ["10@10@10@2",
        "Jump 1",
        "Jump 2",
        "Love!"]);

console.log('.................');
heartDelivery(
    ["2@4@2",
        "Jump 2",
        "Jump 2",
        "Jump 8",
        "Jump 3",
        "Jump 1",
        "Love!"]);

