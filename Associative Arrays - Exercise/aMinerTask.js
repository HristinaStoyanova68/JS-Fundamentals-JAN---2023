function aMinerTask(input) {

    let resourceData = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!resourceData.hasOwnProperty(resource)) {
            resourceData[resource] = quantity;
        } else {
            resourceData[resource] += quantity;
        }
    }
    let resourceDataAsArr = Object.entries(resourceData);

    for (const [resource, quantity] of resourceDataAsArr) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('..............');
aMinerTask([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15']);






