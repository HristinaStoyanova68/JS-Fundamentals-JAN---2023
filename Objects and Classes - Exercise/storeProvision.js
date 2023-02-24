function storeProvision(available, delivery) {

    const storedProducts = {};
    
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for (let i = 0; i < availableLength; i+= 2) {
        const currProduct = available[i];
        storedProducts[currProduct] = Number(available[i + 1]);

    }

    for (let i = 0; i < deliveryLength; i+= 2) {
        const currProduct = delivery[i];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(delivery[i + 1]);

    }
    for (const product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
    
}

storeProvision([
    'Chips', '5', 
    'CocaCola', '9', 
    'Bananas','14', 
    'Pasta', '4', 
    'Beer', '2'],

    ['Flour', '44', 
    'Oil', '12', 
    'Pasta', '7',
    'Tomatoes', '70', 
    'Bananas', '30']);
console.log('..............');
storeProvision([ 
    'Salt', '2', 
    'Fanta', '4', 
    'Apple', '14', 
    'Water', '4', 
    'Juice', '5' ], 
    ['Sugar', '44', 
    'Oil', '12', 'Apple', '7', 
    'Tomatoes', '7', 
    'Bananas', '30']);