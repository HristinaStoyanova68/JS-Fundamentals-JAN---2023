function solve(input) {

    let countStudent = Number(input.shift());
    let countlectures = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(Number);

    let maxBonus = 0;
    let maxAttendans = 0;

    for (let i = 0; i < countStudent; i++) {
        let attendances = students[i];
        let currBonus = attendances / countlectures * (5 + initialBonus);
        if (currBonus > maxBonus) {
            maxBonus = currBonus;
            maxAttendans = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);

    console.log(`The student has attended ${maxAttendans} lectures.`);


}



solve([

    '5', '25', '30',

    '12', '19', '24',

    '16', '20']);

solve([

    '10', '30', '14', '8',

    '23', '27', '28', '15',

    '17', '25', '26', '5',

    '18'])