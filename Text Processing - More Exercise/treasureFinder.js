function treasureFinder(input) {

    let keyNumbers = input.shift().split(' ');

    for (const line of input) {

        if (line === 'find') {
            break;
        }

        let counter = 0;
        let message = '';

        for (let i = 0; i < line.length; i++) {
            let currNum = line[i].charCodeAt();

            for (let j = counter; j < keyNumbers.length; j++) {
                currNum -= keyNumbers[j];
                message += String.fromCharCode(currNum);
                counter++;

                if (counter === keyNumbers.length) {
                    counter = 0;
                }

                break;
            }
        }

        let startIndex1 = message.indexOf('&');
        let lastIndex1 = message.lastIndexOf('&');
        let type = message.substring(startIndex1 + 1, lastIndex1);

        let startIndex2 = message.indexOf('<');
        let lastIndex2 = message.indexOf('>');
        let coordinates = message.substring(startIndex2 + 1, lastIndex2);

        console.log(`Found ${type} at ${coordinates}`);
    }
}

treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);
console.log('..............');
treasureFinder([
    "1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);
