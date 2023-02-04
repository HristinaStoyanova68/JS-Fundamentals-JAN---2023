function perfectNumber(num) {

    let perfectNum = 0;

    for (let i = 1; i < num; i++) {
        let currDevisor = Number(i);
        if (num % currDevisor === 0) {
            perfectNum += currDevisor;
        }
    }
    if (perfectNum === num && perfectNum > 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }

}

perfectNumber(6);
console.log('...........');
perfectNumber(28);
console.log('...........');
perfectNumber(1236498);