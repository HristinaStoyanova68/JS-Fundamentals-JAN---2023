function storage(input) {

    let storage = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        let item = tokens[0];
        let quantity = Number(tokens[1]);

        if (storage.has(item)) {
            let currQuantity = storage.get(item);
            storage.set(item, currQuantity + quantity);
        } else {
            storage.set(item, quantity);
        }
    }

    for (const [item, quantity] of storage) {
        console.log(`${item} -> ${quantity}`);
    }
}

storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40']);
console.log('...........');
storage(['apple 50',

    'apple 61',

    'coffee 115',

    'coffee 40']);