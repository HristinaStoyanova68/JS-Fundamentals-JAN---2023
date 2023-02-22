function triplesOfLatinLetters(num) {

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let char1 = String.fromCharCode('a'.charCodeAt(0) +i);
                let char2 = String.fromCharCode('a'.charCodeAt(0) +j);
                let char3 = String.fromCharCode('a'.charCodeAt(0) +k);
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }
}

triplesOfLatinLetters('3');
console.log('.................');
triplesOfLatinLetters('5');
console.log('.................');
triplesOfLatinLetters(2);