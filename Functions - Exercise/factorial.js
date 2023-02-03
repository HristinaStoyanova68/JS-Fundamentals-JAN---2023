function factorial(num1, num2) {

    return (factorialCalculation(num1) / factorialCalculation(num2)).toFixed(2);

    function factorialCalculation(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

}

console.log(factorial(6, 2));