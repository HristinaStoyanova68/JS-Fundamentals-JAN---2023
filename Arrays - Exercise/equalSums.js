function equalSums(input) {

    let foundIndex = "no";

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += input[l];
        }
        for (let r = i + 1; r < input.length; r++) {
            rightSum += input[r];
        }
        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);

}

equalSums([10, 5, 5, 99,

    3, 4, 2, 5, 1,

    1, 4]);