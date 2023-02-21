function amazingNumbers(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let sumAsString = sum.toString();
    console.log(`${num} Amazing? ${sumAsString.includes('9') ? 'True' : 'False'}`);
}

amazingNumbers(1233);
amazingNumbers(999);