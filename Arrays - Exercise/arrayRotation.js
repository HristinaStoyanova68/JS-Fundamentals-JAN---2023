function arrayRotation(array, count) {
    let rotation = 1;
    let newArray = [];
    while (rotation <= count) {

        let currElement = array[0];
        for (let i = 1; i <= array.length - 1; i++) {
            currElement = array[0];
            if (i < array.length) {
                let nextElement = array[i]
                newArray.push(nextElement);
            }
        }
        newArray.push(currElement);
        rotation++;
        array = newArray;
        newArray = [];

    }
    console.log(array.join(" "));
}

arrayRotation([2], 4);