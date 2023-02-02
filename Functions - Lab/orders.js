function orders(order, quantity) {
    let price = 0;
    switch (order) {
        case 'coffee':
            price = 1.50;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'snacks':
            price = 2.00;
            break;
    }
    let total = price * quantity;
    return `${total.toFixed(2)}`;

}

console.log(orders("coffee", 2));