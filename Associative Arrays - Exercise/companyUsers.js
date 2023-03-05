function companyUsers(input) {

    let companyUsers = {};

    for (const data of input) {
        let [company, user] = data.split(' -> ');

        if (!companyUsers.hasOwnProperty(company)) {

            companyUsers[company] = new Set();
        }
        companyUsers[company].add(user);

    }
    let sorted = Object.entries(companyUsers).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, user] of sorted) {
        console.log(company);

        for (const elem of user) {
            console.log(`-- ${elem}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
console.log('.............');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);
