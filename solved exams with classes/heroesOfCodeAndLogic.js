function heroesOfCodeAndLogic(input) {

    class Hero {
        constructor(heroName, heroHp, heroMp) {
            this.hero = heroName;
            this.hP = Number(heroHp);
            this.mana = Number(heroMp);
        }

        castSpell(mPNeeded, spellName) {
            if (this.mana >= mPNeeded) {
                this.mana -= mPNeeded;
                console.log(`${this.hero} has successfully cast ${spellName} and now has ${this.mana} MP!`);
            } else {
                console.log(`${this.hero} does not have enough MP to cast ${spellName}!`);
            }
        }

        takeDamage(damage, attacker) {
            this.hP -= damage;
            if (this.hP > 0) {
                console.log(`${this.hero} was hit for ${damage} HP by ${attacker} and now has ${this.hP} HP left!`);
            } else {
                console.log(`${this.hero} has been killed by ${attacker}!`);
                delete heroes[this.hero];
            }
        }

        recharge(amount) {
            if ((this.mana + amount) > 200) {
                amount = 200 - this.mana;
                this.mana = 200;
            } else {
                this.mana += amount;
            }
            console.log(`${this.hero} recharged for ${amount} MP!`);
        }

        heal(amount) {
            if ((this.hP + amount) > 100) {
                amount = 100 - this.hP;
                this.hP = 100;
            } else {
                this.hP += amount;
            }
            console.log(`${this.hero} healed for ${amount} HP!`);
        }

        toString() {
            console.log(`${this.hero}\n  HP: ${this.hP}\n  MP: ${this.mana}`);
        }
    }

    let heroes = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [heroName, heroHp, heroMp] = input[i].split(' ');
        let hero = new Hero(heroName, heroHp, heroMp);
        heroes[heroName] = hero;
    }

    for (let i = n; i < input.length; i++) {
        let [command, heroName, ...tokens] = input[i].split(' - ');
        let hero = heroes[heroName];

        if (command === 'CastSpell') {
            let mPNeeded = Number(tokens[0]);
            let spellName = tokens[1];
            hero.castSpell(mPNeeded, spellName);
        } else if (command === 'TakeDamage') {
            let damage = Number(tokens[0]);
            let attacker = tokens[1];
            hero.takeDamage(damage, attacker);
        } else if (command === 'Recharge') {
            let amount = Number(tokens[0]);
            hero.recharge(amount);
        } else if (command === 'Heal') {
            let amount = Number(tokens[0]);
            hero.heal(amount);
        } else if (command === 'End') {

            for (const hero in heroes) {
                heroes[hero].toString();
            }
        }
    }
}

heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
console.log('...........');
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
    'End']);