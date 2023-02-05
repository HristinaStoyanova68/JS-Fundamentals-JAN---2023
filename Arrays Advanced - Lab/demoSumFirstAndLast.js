function demoSumFirstAndLast(array) {

    function sum(num1, num2) {
        return sum = num1 + num2;
    }

    console.log(sum(Number(array[0]), Number(array[array.length - 1])));
}

demoSumFirstAndLast(['20', '30', '40']);