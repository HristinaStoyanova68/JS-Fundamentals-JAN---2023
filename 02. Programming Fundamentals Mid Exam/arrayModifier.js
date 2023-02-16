function arrayModifier(input) {

    let arr = input.shift().split(' ').map(Number);
    //console.log(arr);

    let command = input.shift();

    while (command !== 'end') {
        
        let currCommand = command.split(' ');
        let action = currCommand[0];
        let index1 = Number(currCommand[1]);
        let index2 = Number(currCommand[2]);

        if (action === 'swap') {
            let num1 = arr[index1];
            let num2 = arr[index2];
            arr[index1] = num2;
            arr[index2] = num1;
            // console.log(arr);
        } else if (action === 'multiply') {
            let num1 = arr[index1];
            let num2 = arr[index2];
            let result = num1 * num2;
            arr[index1] = result;
            //console.log(arr);
        } else if (action === 'decrease') {
            
            for (let i = 0; i < arr.length; i++) {
                arr[i]--;
            }
            
        }
        command = input.shift();
    }
    console.log(arr.join(", "));
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
]
);
console.log('............');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 6 0', 'end']);