function solve(year, month, day) {
    let myDate = new Date(year, month - 1, day + 1);
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);

}

solve(2020, 3, 24);