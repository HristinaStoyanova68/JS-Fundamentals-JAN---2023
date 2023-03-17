function race(input) {

    let racers = input.shift().split(', ');
    let raceObject = {};

    const patternName = /[A-Za-z]+/g;
    const patternDistance = /[\d]+/g;

    let command = input.shift();

    while (command !== 'end of race') {

        let currName = command.match(patternName).join('');
        let currDistance = command.match(patternDistance).join('');

        if (racers.includes(currName)) {
            let distance = 0;

            for (let digit of currDistance) {
                distance += Number(digit);
            };

            if (!raceObject.hasOwnProperty(currName)) {
                raceObject[currName] = distance;
            } else {
                raceObject[currName] += distance;
            }
        }

        command = input.shift();
    }

    let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

    let firstPlace = sortedRacers[0][0];
    let secondPlace = sortedRacers[1][0];
    let thirdPlace = sortedRacers[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
console.log('.............');
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);