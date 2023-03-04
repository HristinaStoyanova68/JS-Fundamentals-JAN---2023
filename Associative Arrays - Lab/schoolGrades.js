function schoolGrades(input) {

    let students = {};
    
    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let numbersOfGrades = tokens.map(Number);
        
        if (students[name]) {
            students[name].push(...numbersOfGrades);
        } else {
            students[name] = numbersOfGrades;
        }
    }

    let sorted = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));
   
    for (const [name, numbersOfGrades] of sorted) {
        let averageOfGrades = averageOfArrNumbers(numbersOfGrades);
        console.log(`${name}: ${averageOfGrades.toFixed(2)}`);
    }

    function averageOfArrNumbers(arr) {

        let sum = 0;

        for (const num of arr) {
            sum += num;
        }

        let average = sum / arr.length;

        return average;
    }
}

schoolGrades(['Steven 3 5 6 4',
'Steven 3 5 4',
'Steven 3 5 6 4 3',
    ]);
console.log('...............................');
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);