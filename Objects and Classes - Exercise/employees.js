function employees(list) {

    let emploeeList = {};

    list.forEach(person => {
        emploeeList[person] = person.length;
    });

    for (let key in emploeeList) {
        console.log(`Name: ${key} -- Personal Number: ${emploeeList[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log('...........');
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);