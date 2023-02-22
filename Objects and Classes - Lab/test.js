function test() {

    let person = {
        firstName: 'Hristina',
        lastName: 'Stoyanova',
        age: '55',
        town: 'Dobrich',
        hasCar: 'VW',
    }
    for (let key of Object.keys(person)) {
        console.log(key + ' - ' + person[key]);
    }

}

test();