function multiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }

}

multiplicationTable(5);
multiplicationTable(2);
multiplicationTable(7);