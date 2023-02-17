function memoryGame(input) {
    let sequence = input.shift().split(' ');
    // console.log(sequence);
    let index = 0;
    let command = input[index];
    index++;
    let count = 0;

    while (command !== 'end') {
        let index1 = Number(command.split(' ')[0]);
        let index2 = Number(command.split(' ')[1]);
        count++;

        if (index1 === index2 || index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length) {
            let addElem = `-${count}a`;
            sequence.splice(sequence.length / 2, 0, addElem, addElem);
            console.log("Invalid input! Adding additional elements to the board");
            command = input[index];
            index++;
            continue;
        }
        if (sequence[index1] === sequence[index2]) {
            let removingElem = sequence[index1];
            sequence = sequence.filter((x) => x !== sequence[index1]);
            console.log(`Congrats! You have found matching elements - ${removingElem}!`);
        } else {
            console.log("Try again!");
            command = input[index];
            index++;
            continue;
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${count} turns!`);
            return;
        }

        command = input[index];
        index++;
    }
    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));

}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",

    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);
console.log('............');
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);
console.log('................');
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"]);


