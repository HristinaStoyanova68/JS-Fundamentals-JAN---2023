function printDNA(num) {

    let symbols = 'ATCGTTAGGG';
    let symbolsLength = symbols.length;


    if (num > symbolsLength / 2) {

        let repeat = Math.ceil(num / (symbolsLength / 2));
        symbols = repeatString(symbols, repeat);
        symbolsLength = symbols.length;
    }

    let symbolsAsArray = symbolsArray(symbols);
    let symbolsAsArrayLength = symbolsAsArray.length;

    let counter = 0;


    while (counter < num) {

        for (let i = 0; i < symbolsAsArrayLength; i++) {
            counter++;

            let currSymbolArray = symbolsAsArray[i];
            let currSymbol1 = currSymbolArray[0];
            let currSymbol2 = currSymbolArray[1]

            let printMatrixDNA = [];

            if (i === 0 || i % 4 === 0) {
                //  **AT**
                printMatrixDNA.push(`**${currSymbol1}${currSymbol2}**`);
                console.log(printMatrixDNA.join());


            } else if (i % 2 !== 0) {
                //  *C--G*
                printMatrixDNA.push(`*${currSymbol1}--${currSymbol2}*`);
                console.log(printMatrixDNA.join());

            } else if (i % 2 === 0) {
                //  T----T
                printMatrixDNA.push(`${currSymbol1}----${currSymbol2}`);
                console.log(printMatrixDNA.join());

            }
            if (counter === num) {
                break;
            }
        }
    }

    function symbolsArray(symbol) {

        let fullSymbolsArray = [];

        for (let i = 0; i < symbolsLength; i += 2) {
            let symbolsArray = [];
            symbolsArray.push(symbol[i]);
            symbolsArray.push(symbol[i + 1]);
            fullSymbolsArray.push(symbolsArray);
        }
        return fullSymbolsArray;
    }

    function repeatString(text, count) {
        let result = '';

        for (let i = 0; i < count; i++) {
            result += text;
        }
        return `${result}`;
    }

}

printDNA(4);
console.log('........');
printDNA(10);
console.log('........');
printDNA(6);
console.log('........');
printDNA(15);

