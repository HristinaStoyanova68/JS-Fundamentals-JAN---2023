function amazingNumbers(num) {
    let sum = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    sum = sum.toString();
    let isAmazing = false;
    for (let j = 0; j < sum.length; j++) {

        if (9 == sum[j]) {
            isAmazing = true;
        }
    } if (isAmazing) {
        console.log(`${num} Amazing? ${`True`}`);
    } else {
        console.log(`${num} Amazing? ${`False`}`);
    }
}

amazingNumbers(999);