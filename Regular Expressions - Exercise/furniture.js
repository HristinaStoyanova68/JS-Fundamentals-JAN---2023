function furniture(input) {

    const pattern = /[>]{2}(?<itemName>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>\d+)/g;
    let validItems = [];

    let total = 0;
    let index = 0;

    while (input[index] !== 'Purchase') {
        let productRow = input[index];

        let validItem = pattern.exec(productRow);

        while (validItem !== null) {
            let productName = validItem.groups['itemName'];
            let price = Number(validItem.groups['price']);
            let quantity = Number(validItem.groups['quantity']);
            let sum = price * quantity;
            total += sum;

            validItems.push(productName);
            validItem = pattern.exec(productRow);
        }

        index++;
    }
    console.log('Bought furniture:');
    for (const match of validItems) {

        console.log(`${match}`);
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
console.log('...........');
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
console.log('...........');
furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);