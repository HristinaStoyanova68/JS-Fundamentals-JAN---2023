function mapTransforming(numbers, num) {

function map(array, callback) {

    let transformedArr = [];

    for (const element of array) {
        transformedArr.push((callback(element)));
        
    }
    return transformedArr;
    
}
let result = map(numbers, x => x * num);
console.log(result);
}
mapTransforming([5, 10, 15, 20, 25], 2);