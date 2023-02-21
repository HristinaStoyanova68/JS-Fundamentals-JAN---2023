function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        
        let numberAsString = i.toString();
        let sum = 0;
        for (let j = 0; j < numberAsString.length; j++) {
            let numberAsNumber = Number(numberAsString[j]);
            sum += numberAsNumber;
            
        }
        let isSpecial = (sum === 5 || sum === 7 ||sum === 11);
            console.log((`${i} -> ${isSpecial ? 'True' : 'False'}`));
        
    }
}

specialNumbers(15);
console.log('...........');
specialNumbers(20);
console.log('...........');
specialNumbers(25);