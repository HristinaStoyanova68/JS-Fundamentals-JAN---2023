function gladiatorInventory(commands) {
    let inventory = commands.shift().split(' ');

    for (let command of commands) {
        let tokens = command.split(' ');
        let currCommand = tokens[0];
        let item = tokens[1];

        if (currCommand === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (currCommand === 'Trash') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }
        } else if (currCommand === 'Repair') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
                inventory.push(item);
            }
        } else if (currCommand === 'Upgrade') {
            let itemUpgrades = item.split('-');
            let currItem = itemUpgrades[0];
            let upgradeItem = itemUpgrades[1];

            if (inventory.includes(currItem)) {
                let index = inventory.indexOf(currItem);
                let upgrade = currItem + ':' + upgradeItem;
                inventory.splice(index + 1, 0, upgrade);
            }

        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
console.log('................');
gladiatorInventory([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);