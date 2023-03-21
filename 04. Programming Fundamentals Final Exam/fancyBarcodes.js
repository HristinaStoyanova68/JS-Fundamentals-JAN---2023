function fancyBarcodes(input) {

    let pattern = /(@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/;

    let countBarcodes = Number(input.shift());

    for (let i = 0; i < countBarcodes; i++) {

        let barcode = pattern.exec(input[i]);

        if (barcode !== null) {
            let digitsPattern = /(?<digits>\d)/g;

            let digits = barcode[2].match(digitsPattern);

            if (digits === null) {

                console.log(`Product group: 00`);
            } else {

                let productGroup = '';

                for (const digit of digits) {

                    productGroup += digit;
                }
                console.log(`Product group: ${productGroup}`);
            }
        } else {

            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

);
console.log('...........');
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);