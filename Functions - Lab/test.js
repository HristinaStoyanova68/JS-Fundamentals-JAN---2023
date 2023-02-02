

function multiply(a, b) {

    return a * b;
}


function getMax(a, b) {
    return a > b ? a : b;
}


multiply(getMax(5, 10), 20);
console.log(multiply(getMax(5, 10), 20));
