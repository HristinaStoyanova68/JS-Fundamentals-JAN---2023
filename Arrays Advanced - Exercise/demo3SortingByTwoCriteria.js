function sortAnArrayBy2Criteria(input) {

    let newArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
        
    console.log(newArray.join(' '));

}

console.log(sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']));
console.log('...................');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('...................');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);;