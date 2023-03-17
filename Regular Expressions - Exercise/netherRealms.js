function netherRealms(input) {

    let namesPattern = /[, ]+/g;
    let demonNames = input.split(namesPattern);
    let demons = {};

    let healthPattern = /[^\d.\/+*-]/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    let demagePattern = /\*|\//g;

    for (const demon of demonNames) {
        let health = 0;
        let damage = 0;

        if (demon.match(healthPattern) !== null) {

            for (const char of demon.match(healthPattern)) {
                health += char.charCodeAt(0);
            }
        }

        let digits = demon.match(sumPattern);

        if (digits !== null) {

            for (const digit of digits) {
                damage += Number(digit);
            }
        }

        let calculateDamage = demon.match(demagePattern);

        if (calculateDamage !== null) {

            for (const operand of calculateDamage) {

                if (operand === '*') {

                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }

        demons[demon] = {};
        demons[demon]['health'] = health;
        demons[demon]['damage'] = damage;
    }

    let sortedDemons = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, valuesInfo] of sortedDemons) {

        console.log(`${name} - ${valuesInfo['health']} health, ${valuesInfo['damage'].toFixed(2)} damage`);
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('.............');
netherRealms('M3ph1st0**, Azazel');
console.log('.............');
netherRealms('Gos/ho');
