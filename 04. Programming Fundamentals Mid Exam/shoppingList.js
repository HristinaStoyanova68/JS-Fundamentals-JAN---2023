function shoppingList(input) {

    let shoppingList = input.shift().split('!');
    let commandLine = input.slice();
    let currCommand = commandLine.shift();

    while (currCommand !== 'Go Shopping!') {

        let lineItems = currCommand.split(' ');
        let command = lineItems[0];
        let firstItem = lineItems[1];
        let secondItem = lineItems[2];

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(firstItem)) {
                    shoppingList.unshift(firstItem);
                }
                break;

            case 'Unnecessary':

                //shoppingList = shoppingList.filter(x => x != firstItem);
                let index = shoppingList.indexOf(firstItem);
                if (index > -1) {
                    shoppingList.splice(index, 1);
                }
                break;

            case 'Correct':
                let itemIndex = shoppingList.indexOf(firstItem);
                if (itemIndex > -1) {
                    shoppingList[itemIndex] = secondItem;
                }
                break;

            case 'Rearrange':
                let removeIndex = shoppingList.indexOf(firstItem);

                if (removeIndex > -1) {
                    let removingItem = shoppingList[removeIndex];
                    shoppingList.splice(removeIndex, 1);
                    shoppingList.push(removingItem);
                }
                break;
        }
        currCommand = commandLine.shift();
    }
    console.log(shoppingList.join(', '));
}

shoppingList([
"Tomatoes!Potatoes!Bread",
"Unnecessary Milk", 
"Urgent Tomatoes", 
"Go Shopping!"]);
console.log('............');
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);