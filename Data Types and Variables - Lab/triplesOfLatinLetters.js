function triplesOfLatinLetters(num) {
    num = Number(num);
    let result = "";


    for (let i = 97; i < 97 + num; i++) {
        let firstLetter = String.fromCharCode(i);
        for (let j = 97; j < 97 + num; j++) {
            let secondLetter = String.fromCharCode(j);
            for (let k = 97; k < 97 + num; k++) {
                let thirdLetter = String.fromCharCode(k);
                result += `${firstLetter}${secondLetter}${thirdLetter} `;

                console.log(result);

                result = "";
            }
        }
    }

}

triplesOfLatinLetters(2);