function passwordReset(input) {

    let string = input.shift();
    let commandLine = input.shift();

    while (input.length > 0) {
        let [command, ...tokens] = commandLine.split(' ');

        if (command === 'TakeOdd') {

            string = newStr(string);
            console.log(string);

        } else if (command === 'Cut') {
            let index = Number(tokens[0]);
            let endIndex = index + Number(tokens[1]);
            let substring = string.substring(index, endIndex);
            string = string.replace(substring, '');
            console.log(string);
        } else if (command === 'Substitute') {
            let substring = tokens[0];
            let Substitute = tokens[1];

            if (string.includes(substring)) {

                string = string.split(substring).join(Substitute);
                console.log(string);
            } else {
                console.log('Nothing to replace!');
            }
        }

        commandLine = input.shift();

        function newStr(str) {
            let pattern = /.(.|$)/g;

            str = str.replace(pattern, '$1');
            return str;
        }
    }

    console.log(`Your password is: ${string}`);
}
passwordReset(
    ["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
        "TakeOdd",
        "Cut 15 3",
        "Substitute :: -",
        "Substitute | ^",
        "Done"]);
console.log('............');
passwordReset(
    ["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
        "TakeOdd",
        "Cut 18 2",
        "Substitute ! ***",
        "Substitute ? .!.",
        "Done"]);

        // let newStr = '';
        //   for (let i = 0; i < string.length; i++) {
        //     if (i % 2 === 1) {
        //         newStr += string[i];
        //     }