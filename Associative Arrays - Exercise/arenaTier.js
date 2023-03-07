function arenaTier(input) {

    let index = 0;
    let command = input[index];
    index++;
    let gladiatorData = {};

    while (command !== 'Ave Cesar') {

        if (command.includes(' -> ')) {
            let [gladiator, technique, skill] = command.split(' -> ');
            skill = Number(skill);

            if (!gladiatorData.hasOwnProperty(gladiator)) {

                gladiatorData[gladiator] = [{ [technique]: skill }, skill];
            } else {
                let currValue = gladiatorData[gladiator][0];

                if (currValue.hasOwnProperty(technique)) {

                    if (currValue[technique] < skill) {
                        gladiatorData[gladiator][1] += skill - currValue[technique];
                        currValue[technique] = skill;
                    }

                } else {
                    currValue[technique] = skill;
                    gladiatorData[gladiator][1] += skill;
                }
            }

        } else {
            let [gladiator1, gladiator2] = command.split(' vs ');

            if (gladiatorData.hasOwnProperty(gladiator1) && gladiatorData.hasOwnProperty(gladiator2)) {
                let gladiator1Techniques = gladiatorData[gladiator1][0];
                let isExisting = false;

                for (const technique in gladiator1Techniques) {
                    if (gladiatorData[gladiator2][0].hasOwnProperty(technique)) {
                        isExisting = true;
                        break;
                    }
                }

                if (isExisting) {

                    if (gladiatorData[gladiator1][1] > gladiatorData[gladiator2][1]) {
                        delete gladiatorData[gladiator2];
                    } else if (gladiatorData[gladiator1][1] < gladiatorData[gladiator2][1]) {
                        delete gladiatorData[gladiator1];
                    }
                }
            }

        }

        command = input[index];
        index++;
    }

    let sotredGladiators = Object.entries(gladiatorData)
        .sort((a, b) => {
            return b[1][1] - a[1][1] || a[0].localeCompare(b[0]);
        });

    for (const gladiator of sotredGladiators) {

        console.log(`${gladiator[0]}: ${gladiator[1][1]} skill`);

        let sortedTechniques = Object.entries(gladiator[1][0])
            .sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            });

        for (const techniques of sortedTechniques) {
            console.log(`- ${techniques[0]} <!> ${techniques[1]}`);
        }
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log('..................');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);