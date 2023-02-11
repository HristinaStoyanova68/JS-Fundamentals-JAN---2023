function train(input) {

    let train = input[0];
    let capacity = Number(input[1]);

    let trainArray = stringAsArray(train);

    for (let i = 2; i < input.length; i++) {
        let command = input[i];
        let commandAsArray = stringAsArray(command);

        if (commandAsArray.length > 1) {

            trainArray.push(commandAsArray[1]);
        } else {
            let passagers = Number(commandAsArray[0]);
            let totalPassagers = 0;
            for (let j = 0; j < trainArray.length; j++) {
                let currPassagers = Number(trainArray[j]);
                totalPassagers = currPassagers + passagers;

                if (totalPassagers <= capacity) {
                    trainArray[j] = totalPassagers;
                    break;
                }

            }
        }
    }
    console.log(trainArray.join(' '));

    // create array from string

    function stringAsArray(elements) {
        let stringAsArray = [];
        let element = '';
        for (let i = 0; i < elements.length; i++) {
            let currElem = elements[i];

            if (currElem !== ' ') {
                element += currElem;
            }
            if (currElem === ' ' || i === elements.length - 1) {
                stringAsArray.push(element);
                element = '';
            }
        }
        return stringAsArray;
    }

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
console.log('............');;
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);