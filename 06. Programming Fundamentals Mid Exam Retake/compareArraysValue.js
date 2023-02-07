function compareArraysValues(arr1, arr2) {

    let arr2Length = arr2.length;
    

    for (let i = 0; i < arr2Length; i++) {
            let element = arr2[i];
            let isIncludes = true;
            for (let item of arr1) {

                    if (element !== item) {
                            isIncludes = false;
                    } else {
                            isIncludes = true;
                            break;
                    }

            }
            if (isIncludes === false) {
                    
                    arr1.unshift(element);
            }
    }
    
    return arr1;

}

console.log(compareArraysValues(
    ["Gold", "Silver", "Bronze", "Medallion", "Cup"],
    ["Wood", "Gold", "Coins"]));
    console.log('..................');
    console.log(compareArraysValues(
        ["Gold", "Silver", "Bronze", "Medallion", "Cup"],
        ["Wood", "Gold", "Coins", "Wood"]));
        