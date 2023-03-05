function partyTime2(input) {

    let listOfGuests = input.splice(0, input.indexOf('PARTY'));
    //console.log(listOfGuests);
    input.splice(0, 1);
    let vipGuests = [];
    let regularGuest = [];

    for (let guest of listOfGuests) {

        if (guest[0] >= '0' && guest[0] <= '9') {
            vipGuests.push(guest);
        } else {
            regularGuest.push(guest);
        }
    }

    for (const guest of input) {

        if (vipGuests.includes(guest)) {
            vipGuests.splice(vipGuests.indexOf(guest), 1);
        } else if (regularGuest.includes(guest)) {
            regularGuest.splice(regularGuest.indexOf(guest), 1);
        }
    }
    console.log(vipGuests.length + regularGuest.length);
    vipGuests.forEach((x) => console.log(x));
    regularGuest.forEach((x) => console.log(x));
}

partyTime2([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
console.log('...........');
partyTime2([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);