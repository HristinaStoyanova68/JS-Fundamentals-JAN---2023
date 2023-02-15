function computerStore(input) {

    let inputLength = input.length;
    let sum = 0;
    let total = 0;
    let tax = 0;

    for (let i = 0; i < inputLength; i++) {
        let currElem = input[i];
        if (currElem !== 'special' && currElem !== 'regular') {
            let price = Number(currElem);

            if (price < 0) {
                console.log("Invalid price!");
                continue;
            } else {
                sum += price;
            }
        } else {
            if (sum === 0) {
                console.log("Invalid order!");
                return;
            } else {
                tax = sum * 0.2;
                total = sum + tax;
                if (currElem === 'special') {
                    total *= 0.9;
                }
            }
        }

    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${total.toFixed(2)}$`);


}

computerStore([

    'regular'

]);
