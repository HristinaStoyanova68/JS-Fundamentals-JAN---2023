function inventory(list) {

    let heroes = [];

    list.forEach(line => {
        let [name, level, items] = line.split(' / ');
        let currHero = {
            name,
            level: Number(level),
            items,

        };
        heroes.push(currHero);
    });
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
console.log('..........');
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);