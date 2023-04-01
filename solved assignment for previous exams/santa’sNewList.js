function santaNewList(input) {

    let childList = {};
    let presentsList = {};

    let index = 0;
    let childData = input[index];

    while (childData !== 'END') {

        if (!childData.includes('Remove')) {

            let [childName, present, amount] = childData.split('->');
            amount = Number(amount);

            if (!childList.hasOwnProperty(childName)) {
                childList[childName] = amount;
            } else {
                childList[childName] += amount;
            }

            if (!presentsList.hasOwnProperty(present)) {
                presentsList[present] = amount;
            } else {
                presentsList[present] += amount;
            }
        } else {
            let [command, childName] = childData.split('->');

            delete childList[childName];
        }

        index++;
        childData = input[index];
    }

    let sortedChildList = Object.entries(childList).sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]));

    console.log('Children:');

    for (const [childName, points] of sortedChildList) {
        console.log(`${childName} -> ${points}`);
    }

    let entriesOfPresentList = Object.entries(presentsList);

    console.log('Presents:');

    for (const [present, amount] of entriesOfPresentList) {
        console.log(`${present} -> ${amount}`);
    }
}

santaNewList(['Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END']);
console.log('..................');
santaNewList(['Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END']);