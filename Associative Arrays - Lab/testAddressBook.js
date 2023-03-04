function addressBook(input) {

    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    
    let sorted = Object.keys(addressBook).sort((a, b) => a.localeCompare(b));

    for (const name of sorted) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);
console.log('...........');
addressBook(['Bob:Huxley Rd',

    'John:Milwaukee Crossing',

    'Peter:Fordem Ave',

    'Bob:Redwing Ave',

    'George:Mesta Crossing',

    'Ted:Gateway Way',

    'Bill:Gateway Way',

    'John:Grover Rd',

    'Peter:Huxley Rd',

    'Jeff:Gateway Way',

    'Jeff:Huxley Rd']);