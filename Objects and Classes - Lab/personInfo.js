function personInfo(firstName, lastName, age) {

    let myPersonInfo = {
        firstName: firstName,
        lastName: lastName, 
        age: age,
    }
    return myPersonInfo;

}

console.table(personInfo("Peter", "Pan", "20"));
console.log('...............');
console.table(personInfo("George", "Smith", "18"));