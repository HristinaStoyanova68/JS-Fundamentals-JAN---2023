function theLift(input) {

    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    // console.log(people);
    //console.log(wagons);

    for (let i = 0; i < wagons.length; i++) {

        if (wagons[i] === 4) {
            continue;
        }
        if (people > 4 - wagons[i]) {
            people -= 4 - wagons[i];
            wagons[i] = 4;
        } else {
            wagons[i] = people + wagons[i];
            people = 0;
            break;
        }
    }
    let isFull = true;
    for (let wagon of wagons) {
        if (wagon !== 4) {
            isFull = false;
            break;
        }
    }
    if (people === 0 && !isFull) {
        console.log("The lift has empty spots!");
    } else if (people > 0 && isFull) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(wagons.join(' '));
}

theLift([
    "15",
    "0 0 0 0 0"
]);
console.log('...........');
theLift([
    "20",
    "0 2 0"
]);