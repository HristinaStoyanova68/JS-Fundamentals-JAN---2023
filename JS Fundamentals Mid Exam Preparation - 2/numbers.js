function numbers(input) {

    let sequence = input.split(' ').map(Number);
    //console.log(sequence);
    let sum = 0;

    for (let num of sequence) {
        sum += num;
    }
    let avg = sum / sequence.length;
    //console.log(avg);
    let result = [];
    for (let num of sequence) {
        if (num > avg) {
            result.push(num);
        }
    }
    //console.log(result);
    result.sort((a, b) => b - a);
    //console.log(result);
    if (result.length === 0) {
        console.log('No');
    } else {
        let fiveNumbers = [];
        for (let i = 0; i < 5; i++) {
            let num = result[i];
            fiveNumbers.push(num);
        }
        console.log(fiveNumbers.join(' '));
    }

}

numbers('10 20 30 40 50');
console.log('............');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('............');
numbers('1');
console.log('............');
numbers('-1 -2 -3 -4 -5 -6');
