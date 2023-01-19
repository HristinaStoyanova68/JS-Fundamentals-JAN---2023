function demo2IntegerOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    sum % 1 === 0 ? sum += ` - Integer` : sum += ` - Float`;
    console.log(sum);
}
demo2IntegerOrFloat(100, 200, 303);