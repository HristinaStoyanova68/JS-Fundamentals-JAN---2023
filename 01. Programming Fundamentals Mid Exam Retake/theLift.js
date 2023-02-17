function theLift(input) {
    let people = Number(input.shift());
    //console.log(people);
    let wagons = input.shift().split(' ').map(Number);
    //console.log(wagons);

    for (let i = 0; i < wagons.length; i++) {
        let currWagon = wagons[i];
        if (currWagon === 4) {
            continue;
        }
        if (people >= 4 - currWagon) {
            people -= 4 - currWagon;
            wagons[i] = 4;
        } else if (people < 4 - currWagon) {
            wagons[i] = people + currWagon;
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
        console.log('The lift has empty spots!');
    } else if (people > 0 && isFull) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(wagons.join(' '));
}
theLift([
    "10",
    "1 1 1 0 "]);

theLift([
    "15",
    "0 0 0 0 0"]);
console.log('................');
theLift([
    "20",
    "0 2 0"]);