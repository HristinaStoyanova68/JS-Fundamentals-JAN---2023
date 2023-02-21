function login(input) {

    let username = input[0];
    let wordsAsArray = input.splice(1);
    let counter = 0;

    for (let i = 0; i < wordsAsArray.length; i++) {
        counter++;
        let currWord = wordsAsArray[i];
        let password = '';
        for (let j = currWord.length - 1; j >= 0; j--) {
            let letter = currWord[j];
            password += letter;
        }

        if (password === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }

    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
console.log('.............');
login(['momo', 'omom']);
console.log('.............');
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);