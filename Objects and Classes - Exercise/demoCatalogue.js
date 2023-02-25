function demoCatalogue(data) {

    let result = {};

    for (let line of data) {
        let [name, price] = line.split(' : ');

        let groupChar = name[0];
        if (result.hasOwnProperty(groupChar)) {
            result[groupChar].push({ name, price: Number(price) });
        } else {
            result[groupChar] = [];
            result[groupChar].push({ name, price: Number(price) });
        }

    }
    let sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(key);
        let sortValue = result[key].sort((a, b) => a.name.localeCompare(b.name));
        for (let product of sortValue) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

demoCatalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
console.log('..........');
demoCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
