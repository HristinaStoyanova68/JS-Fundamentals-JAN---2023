function listOfProducts(input) {
    let sorted = input.sort();

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

listOfProducts(['Angina', 'Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('..........');;
listOfProducts(['Watermelon', 'Banana', 'Apples']);