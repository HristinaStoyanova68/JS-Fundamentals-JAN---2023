function armies(input) {

    let armies = {};

    for (const line of input) {

        if (line.includes(' arrives')) {
            let leader = line.split(' arrives')[0];

            armies[leader] = [];
        } else if (line.includes(': ')) {
            let [leader, armyInfo] = line.split(': ');

            if (armies.hasOwnProperty(leader)) {
                let [armie, count] = armyInfo.split(', ');
                let armieData = { [armie]: Number(count) };

                armies[leader].push(armieData);
            }
        } else if (line.includes(' + ')) {
            let [armie, count] = line.split(' + ');

            for (const leader in armies) {
                let currArmieInfo = armies[leader];

                for (const el of currArmieInfo) {

                    if (el.hasOwnProperty(armie)) {
                        el[armie] += Number(count);
                        break;
                    }
                }
            }
        } else if (line.includes(' defeated')) {
            let leader = line.split(' defeated')[0];

            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }

    for (const leader in armies) {
        let currValue = armies[leader];
        let total = 0;

        for (const el of currValue) {

            total += Number(Object.values(el));
        }
        armies[leader].push(total);
    }
    let sortedArmies = Object.entries(armies).sort((a, b) => {

        return b[1][(b[1]).length - 1] - a[1][(a[1]).length - 1]
    });

    for (const [leader, values] of sortedArmies) {
        let total = values.pop(values[values.length - 1]);
        console.log(`${leader}: ${total}`);

        let sortedValues = values.sort((a, b) => {
            return Object.values(b) - Object.values(a);
        });

        for (const el of sortedValues) {
            let elements = Object.entries(el);
            console.log(`>>> ${elements[0][0]} - ${elements[0][1]}`);
        }
    }
}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
console.log('....................');
armies([
    'Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'
]);