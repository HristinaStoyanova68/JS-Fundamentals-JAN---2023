function numbers(numbers) {

    let arr = numbers.split(' ')
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        sum += arr[i];
    }
    let avr = sum / arr.length;

    let result = [];

    for (let el of arr) {
        if (el > avr) {
            result.push(el);
        }
    }
    result.sort((a, b) => b - a);
    let buff = '';

    for (let i = 0; i < 5; i++) {
        if (result[i]) {
            buff += result[i] + ' ';
        }
    }
    if (buff.length === 0) {
        console.log('No');
    } else {
        console.log(buff);
    }
    // console.log(result);

}

numbers('10 20 30 40 50');
console.log('..............');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('..............');
numbers('1');
console.log('..............');
numbers('-1 -2 -3 -4 -5 -6');