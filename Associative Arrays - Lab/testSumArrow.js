function averageOfArrNumbers(arr) {

    let sum = 0;
    
    for (const num of arr) {
        sum += num;
    }

    let average = sum / arr.length;

    return average;
}
console.log(averageOfArrNumbers([4, 6, 6, 5]));