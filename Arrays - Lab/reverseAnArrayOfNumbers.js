function reverseAnArrayOfNumbers(count, numbers) {
    //create new array;
    let result = [];
    // take count elements from numbers;
    //reverse the elements;
    for (let i = 0; i < count; i++) {
        result[(count - 1) - i] = numbers[i];
    }
    //print;
    console.log(result.join(" "));

}

reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);