function heroesOfCodeAndLogic(input) {

    let numOfHeroes = Number(input.shift());
    let heroes = input.splice(0, numOfHeroes);
    let heroesList = {};

    for (let i = 0; i < heroes.length; i++) {

        let heroData = {};
        let [heroName, hP, mP] = heroes[i].split(' ');

        heroesList[heroName] = heroData;
        heroData['hP'] = Number(hP);
        heroData['mP'] = Number(mP);
    }
    let commandData = input.shift();

    while (commandData !== 'End') {

        let [command, currHeroName, token1, token2] = commandData.split(' - ');

        if (command === 'CastSpell') {
            let neededMP = Number(token1);
            let spellName = token2;

            if (heroesList[currHeroName]['mP'] >= neededMP) {
                heroesList[currHeroName]['mP'] -= neededMP;

                console.log(`${currHeroName} has successfully cast ${spellName} and now has ${heroesList[currHeroName]['mP']} MP!`);
            } else {

                console.log(`${currHeroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === 'TakeDamage') {
            let damage = Number(token1);
            let attacker = token2;

            heroesList[currHeroName]['hP'] -= damage;

            if (heroesList[currHeroName]['hP'] > 0) {
                console.log(`${currHeroName} was hit for ${damage} HP by ${attacker} and now has ${heroesList[currHeroName]['hP']} HP left!`);
            } else {
                delete heroesList[currHeroName];

                console.log(`${currHeroName} has been killed by ${attacker}!`);
            }

        } else if (command === 'Recharge') {
            let amount = Number(token1);

            if ((heroesList[currHeroName]['mP'] + amount) > 200) {

                amount = 200 - heroesList[currHeroName]['mP'];
                heroesList[currHeroName]['mP'] = 200;
            } else {

                heroesList[currHeroName]['mP'] += amount;
            }

            console.log(`${currHeroName} recharged for ${amount} MP!`);

        } else if (command === 'Heal') {
            let amount = Number(token1);

            if ((heroesList[currHeroName]['hP'] + amount) > 100) {

                amount = 100 - heroesList[currHeroName]['hP'];
                heroesList[currHeroName]['hP'] = 100;
            } else {

                heroesList[currHeroName]['hP'] += amount;
            }

            console.log(`${currHeroName} healed for ${amount} HP!`);
        }

        commandData = input.shift();
    }

    for (const heroName in heroesList) {

        console.log(heroName);
        console.log(`  HP: ${heroesList[heroName]['hP']}`);
        console.log(`  MP: ${heroesList[heroName]['mP']}`);
    }
}

heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
    );
console.log('............');
heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']
);
