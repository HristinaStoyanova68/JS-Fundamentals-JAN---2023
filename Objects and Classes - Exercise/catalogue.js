function catalogue(data) { 

    let result = {};

    for (let line of data) { 
        let [name, price] = line.split(' : ');
        result[name] = Number(price);
    }
    let sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

    let groupChar = '';

    for (let key of sortedKeys) { 
        let name = key;
        if (groupChar !== name[0]) {
            groupChar = name[0];
            console.log(groupChar);
        }
        let price = result[key];
        console.log(`  ${name}: ${price}`);
        
    }

}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]);