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

            printLine.splice(printLine.length - 1, 1);
        }
        
    }
    if (printLine.length === 0) {
        console.log("Empty");
    } else {
        console.log(printLine.join(' '));
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);