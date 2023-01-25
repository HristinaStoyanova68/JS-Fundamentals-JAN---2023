function equalArrays(array1, array2) {

    let arr1 = [];
    let arr2 = [];
    let areEqual = true;

    for (let i = 0; i < array1.length; i++) {
        arr1[i] = Number(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        arr2[i] = Number(array2[i]);

        if (arr1[i] !== arr2[i]) {

            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    } if (areEqual) {
        let sum = 0;
        for (let i = 0; i < array1.length; i++) {
            let num = Number(array1[i]);
            sum += num;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(
    ['10', '20', '30'],

    ['10', '20', '30']
);