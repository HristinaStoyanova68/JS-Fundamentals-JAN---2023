function manOWar(input) {

    let pirateShip = arrayFromString(input[0]);
    let warShip = arrayFromString(input[1]);

    function arrayFromString(string) {
        let array = [];
        let elem = '';
        let stringLength = string.length;

        for (let i = 0; i < stringLength; i++) {
            let currElem = string[i];

            if (currElem !== '>' && currElem !== ' ') {
                elem += currElem;
            }
            if (currElem === '>' || currElem === ' ' || i === stringLength - 1) {
                array.push(elem);
                elem = '';
            }
        }
        return array;
    }
    

}

manOWar([
        "12>13>11>20>66", 
        "12>22>33>44>55>32>18", 
        "70", "Fire 2 11", 
        "Fire 8 100", 
        "Defend 3 6 11", 
        "Defend 0 3 5", 
        "Repair 1 33", 
        "Status", 
        "Retire"]);
console.log('..............');
manOWar([
        "2>3>4>5>2",
        "6>7>8>9>10>11",
        "20",
        "Status",
        "Fire 2 3",
        "Defend 0 4 11",
        "Repair 3 18",
        "Retire"]);