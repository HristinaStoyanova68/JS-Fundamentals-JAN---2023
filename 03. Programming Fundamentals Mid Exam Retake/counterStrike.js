function counterStrike(input) {

    let energy = Number(input.shift());
    let action = input.shift();
    let counter = 0;

    while (action !== 'End of battle') {

        let enemyEnergy = Number(action);
        energy -= enemyEnergy;

        if (energy < 0) {
            energy += enemyEnergy;
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            return;
        }
        counter++;
        if (counter % 3 === 0) {
            energy += counter;
        }
        action = input.shift();
    }

    console.log(`Won battles: ${counter}. Energy left: ${energy}`);

}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

console.log('............');
counterStrike([
    "200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);

