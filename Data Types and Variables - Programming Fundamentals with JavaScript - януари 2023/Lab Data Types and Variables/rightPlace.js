function rightPlace(string, character, targetString) { 

    let newString = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '_') {
            newString += character;
        } else {
            newString += string[i];
        }
    }
    console.log(newString === targetString ? 'Matched' : 'Not Matched');

}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
