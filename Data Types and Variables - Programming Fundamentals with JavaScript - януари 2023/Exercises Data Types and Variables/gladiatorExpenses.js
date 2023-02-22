function gladiatorExpenses(lostFightsCoun, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalHelmetPrice = 0;
    let totalSwordPrice = 0;
    let totalShieldPrice = 0;
    let countForShieldBroken = 0;
    let totalArmorPrice = 0;
    for (let i = 1; i <= lostFightsCoun; i++) {

        if (i % 2 === 0) {
            totalHelmetPrice += helmetPrice;
        }
        if (i % 3 === 0) {
            totalSwordPrice += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalShieldPrice += shieldPrice;
            countForShieldBroken++;
            if (countForShieldBroken % 2 === 0) {
                totalArmorPrice += armorPrice;
            }
        }
    }
    let result = totalHelmetPrice + totalSwordPrice + totalShieldPrice + totalArmorPrice;
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
console.log('..............');
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
