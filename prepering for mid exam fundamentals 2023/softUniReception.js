function softUniReception(input) {

    let capacity = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let students = Number(input[3]);
    let counter = 0;
    while (students > 0) {
        counter++;
        if (counter % 4 === 0) {
            continue;
        }
        students -= capacity;

    }
    console.log(`Time needed: ${counter}h.`);
}

softUniReception(['5', '6', '4', '20']);
console.log('.............');
softUniReception(['1', '2', '3', '45']);
console.log('...............');
softUniReception(['3', '2', '5', '40']);