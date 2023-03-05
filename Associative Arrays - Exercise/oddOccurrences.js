function oddOccurrences(input) {

    let oddOccurrences = new Map();

    let occurrences = input.split(' ');

    for (const elem of occurrences) {
        let currElem = elem.toLowerCase();
        if (!oddOccurrences.has(currElem)) {
            oddOccurrences.set(currElem, 1);
        } else {
            oddOccurrences.set(currElem, oddOccurrences.get(currElem) + 1);
        }
    }

    let sorted = Array.from(oddOccurrences);

    let arrOfOddValues = [];

    for (const [elem, values] of sorted) {
        if (values % 2 !== 0) {
            arrOfOddValues.push(elem);
        }
    }
    console.log(arrOfOddValues.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('...........');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');