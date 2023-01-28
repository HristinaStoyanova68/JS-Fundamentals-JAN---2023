function nonDecreasingSubset(array) {
    let newArray = "";
    let currBiggestOne = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num >= currBiggestOne) {
            currBiggestOne = num;
        newArray += `${currBiggestOne} `
        }
        else {
            continue;
        }
    }
    console.log(newArray);

}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);