function addAndSubtract(array) {
    let newArray = [];
    let numArraySum = 0;
    let numNewArraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let numArray = array[i];
        numArraySum += numArray;
        let numNewArray = 0;

        if (numArray % 2 === 0) {
            numNewArray = numArray + i;
        } else {
            numNewArray = numArray - i;
        }
        newArray.push(numNewArray);
    }

    for (let i = 0; i < newArray.length; i++) {
        let numNewArray = newArray[i];
        numNewArraySum += numNewArray;
    }
    console.log(newArray);
    console.log(numArraySum);
    console.log(numNewArraySum);
}

addAndSubtract([-5, 11, 3, 0, 2]);