function sortAnArrayBy2Criteria(input) {

    let newArray = input.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    })
    console.log(newArray.join(' '));

}

console.log(sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']));
console.log('...................');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('...................');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);;