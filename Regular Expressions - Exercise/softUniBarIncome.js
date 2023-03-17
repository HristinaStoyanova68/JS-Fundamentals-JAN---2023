function softUniBarIncome(input) {

    let pattern = /([%])(?<custumer>[A-Z][a-z]+)\1[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>[\d]+[\.]*[\d]+)\$/g;
    let totalIncome = 0;

    let command = input.shift();

    while (command !== 'end of shift') {

        let orderInfo = pattern.exec(command);

        if (orderInfo) {
            let customer = orderInfo.groups['custumer'];
            let product = orderInfo.groups['product'];
            let count = Number(orderInfo.groups['count']);
            let price = Number(orderInfo.groups['price']);
            let totalMoney = count * price;

            console.log(`${customer}: ${product} - ${totalMoney.toFixed(2)}`);
            totalIncome += totalMoney;

            command = input.shift();
            orderInfo = pattern.exec(command);
        } else {
            command = input.shift();
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
console.log('...........');
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);

