function gladiatorExpenses(lostFightsCoun, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = 1; i <= lostFightsCoun; i++) {
        if (i % 2 === 0) {
            helmetCount++;
        }
        if (i % 3 === 0) {
            swordCount++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCount++;
        }
    }
    armorCount = Math.trunc(shieldCount / 2);
    let sum = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice;
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7,

    2,

    3,

    4,

    5);