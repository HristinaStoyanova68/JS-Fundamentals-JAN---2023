function fancyBarcodes(input) {

    let barcodePattern = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/g;

    let numOfLines = Number(input.shift());
    for (let i = 0; i < numOfLines; i++) {

        if (input[i].match(barcodePattern)) {
            let numbersPattern = /\d+/g;
            let matchedNumbers = input[i].match(numbersPattern);
            if (matchedNumbers !== null) {
                console.log(`Product group: ${matchedNumbers.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
console.log('...........');
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);