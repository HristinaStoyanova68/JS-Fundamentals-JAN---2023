function commonElements(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let array1Element = array1[i];
        for (let j = 0; j < array2.length; j++) {
            let array2Element = array2[j];
            if (array1Element === array2Element) {
                console.log(array1Element);
            }
        }
    }

}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

    ['s', 'o', 'c', 'i', 'a', 'l']);