function numbers(input) {

    let sequence = input.split(' ').map(Number);
    //console.log(sequence);
    let sum = 0;

    for (let num of sequence) {
        sum += num;
    }
    let avg = sum / sequence.length;

    let newArr = sequence.filter(x => x > avg);
    //console.log(newArr);
    newArr.sort((a, b) => b - a);
    //console.log(newArr); 
    if (newArr.length === 0) {
        console.log('No');
    } else {
        let result = [];
        for (let i = 0; i < 5; i++) {
            if (newArr[i]) {
                result.push(newArr[i]);
            }
        }
        console.log(result.join(' '));
    }

}

numbers('10 20 30 40 50');
console.log('.......');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('...........');
numbers('1');
console.log('.........');
numbers('-1 -2 -3 -4 -5 -6');