function arrayModifier(input) {

    let arr = input.shift().split(' ').map(Number);
    //console.log(arr);
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'end') {
        let token = command.split(' ');
        let currCommand = token[0];
        let index1 = Number(token[1]);
        let index2 = Number(token[2]);

        if (currCommand === 'swap') {
            let num1 = arr[index1];
            let num2 = arr[index2];
            arr[index1] = num2;
            arr[index2] = num1;
        } else if (currCommand === 'multiply') {
            let result = arr[index1] * arr[index2];
            arr[index1] = result;
        } else if (currCommand === 'decrease') {
            for (let i = 0; i < arr.length; i++) {
                arr[i] -= 1;
            }
        }
        command = input[index];
        index++;
    }
    console.log(arr.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log('...........');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
