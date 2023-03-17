function countingOfChar(text) {

    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        
        let currCharNumber = text.charCodeAt(i);
        if (currCharNumber === 65 || currCharNumber === 97 || currCharNumber === 82 || currCharNumber === 114 || currCharNumber === 84 || currCharNumber === 116 || currCharNumber === 83 || currCharNumber === 115) {
            counter++;
        }
    }

    return counter;
}

console.log(countingOfChar('EHfsytsnhf?8555&I&2C9555SR'));