function employeeEfficiency(input) {

    let emplCapacity = input.splice(0, 3).map(Number);
    let studentsPerHour = 0;
    //console.log(emplCapacity);
    let students = Number(input[0]);
    //console.log(students);
    for (let empl of emplCapacity) {
        studentsPerHour += empl;
    }
    let total = 0;
    while (students > 0) {
        students -= studentsPerHour;
        total++;
        if (total % 4 === 0) {
            total++;
        }
    }

    console.log(`Time needed: ${total}h.`);

}

employeeEfficiency(['1', '1', '1', '9']);
console.log('..............');
employeeEfficiency(['1', '1', '1', '10']);
console.log('..............');
employeeEfficiency(['3', '2', '5', '40']);