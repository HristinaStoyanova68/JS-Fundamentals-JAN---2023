function inventory(input) {

    let inventory = input.shift().split(', ');
    let command = input.shift();
    //console.log(inventory);
    while (command !== 'Craft!') {
        let currCommand = command.split(' - ');
        let action = currCommand[0];
        let item = currCommand[1];

        if (action === 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action === 'Drop') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }
        } else if (action === 'Combine Items') {
            let items = item.split(':');
            let oldItem = items[0];
            let newItem = items[1];

            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index + 1, 0, newItem);
            }
        } else if (action === 'Renew') {

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
                inventory.push(item);
            }
        }

        //    console.log(inventory);

        command = input.shift();
    }
    console.log(inventory.join(', '));

}

inventory(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);
console.log('................');
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);