function sortAnArrayBy2Criteria(input) {

    let newArray = [];

    while (input.length !== 0) {
        let minLength = Number.MAX_SAFE_INTEGER;
        let smalestElem = '';
        
        input.sort((a, b) => a.localeCompare(b));

        for (let currElem of input) {
            if (currElem.length < minLength) {
                minLength = currElem.length;
                smalestElem = currElem;
            }
        
        }
        
        newArray.push(smalestElem);
        let index = input.indexOf(smalestElem);
        input.splice(index, 1);
    }
    console.log(newArray.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('...................');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('...................');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);