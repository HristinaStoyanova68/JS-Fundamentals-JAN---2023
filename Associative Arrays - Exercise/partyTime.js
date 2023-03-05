function partyTime(input) {

    let index = input.indexOf('PARTY');

    let listOfGuests = [];

    for (let i = 0; i < index; i++) {
        listOfGuests.push(input[i]);
    }
   
    let vipGuests = sortingStringByHavingNumberOnTop(listOfGuests)[0];
    let regularGuests = sortingStringByHavingNumberOnTop(listOfGuests)[1];

    for (let i = index + 1; i < input.length; i++) {

        if (vipGuests.includes(input[i])) {
            vipGuests.splice(vipGuests.indexOf(input[i]), 1);
        } 
        if (regularGuests.includes(input[i])) {
            regularGuests.splice(regularGuests.indexOf(input[i]), 1);
        }
    }
    let guestCount = vipGuests.length + regularGuests.length;
    console.log(guestCount);
    vipGuests.forEach(x => console.log(x));
    regularGuests.forEach(x => console.log(x));
    
    function sortingStringByHavingNumberOnTop(input) {

        let numbersOnTop = [];
        let lettersOnTop = [];
        let sorted = [];
        
        for (let i = 0; i < input.length; i++) {
            let currElem = input[i][0];
            
            if (currElem >= '0' && currElem <= '9') {
                numbersOnTop.push(input[i]);
                
            } else {
                lettersOnTop.push(input[i]);
            }
        }
        sorted.push(numbersOnTop);
        sorted.push(lettersOnTop)
        
        return sorted;
    }
}

partyTime([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
console.log('...........');
partyTime([
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