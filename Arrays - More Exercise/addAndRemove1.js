function addAndRemove(input) {
    let startNum = 0;
    let printLine = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        startNum++;
        if (command === 'add') {
            printLine.push(startNum);
        }  
        if (command === 'remove') {
            
            printLine.length = Math.max(printLine.length - 1, 0);
           // printLine.length = printLine.length - 1;
        }
    }
    if (printLine.length === 0) {
        console.log("Empty");
    } else {
        console.log(printLine.join(' '));
    }
}
addAndRemove(['remove', 'add', 'add']);