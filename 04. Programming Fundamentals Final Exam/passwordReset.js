function passwordReset(input) {

    let passwordString = input.shift();
    let commandLine = input.shift();

    while (commandLine !== 'Done') {

        let [command, token1, token2] = commandLine.split(' ');

        if (command === 'TakeOdd') {
            let temporaryPassword = '';

            for (let i = 0; i < passwordString.length; i++) {
                if (i % 2 !== 0) {
                    temporaryPassword += passwordString[i];
                }
            }

            passwordString = temporaryPassword;
            console.log(passwordString);

        } else if (command === 'Cut') {
            let index = Number(token1);
            let length = Number(token2);

            let passwordStringAsArr = passwordString.split('');
            let cutted = passwordStringAsArr.splice(index, length);
            passwordString = passwordStringAsArr.join('');

            console.log(passwordString);

        } else if (command === 'Substitute') {
            let substring = token1;
            let substitute = token2;

            if (passwordString.includes(substring)) {

                while (passwordString.includes(substring)) {

                    let newPassword = passwordString.replace(substring, substitute);
                    passwordString = newPassword;
                }

                console.log(passwordString);
            } else {

                console.log('Nothing to replace!');
            }
        }

        commandLine = input.shift();
    }

    console.log(`Your password is: ${passwordString}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
    ;
console.log('............');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
    ;