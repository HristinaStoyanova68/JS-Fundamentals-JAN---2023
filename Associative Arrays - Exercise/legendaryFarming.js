function legendaryFarming(input) {

    let legendaries = {
        Shadowmourne: { shards: 0 },
        Valanyr: { fragments: 0 },
        Dragonwrath: { motes: 0 },
    };
    let junks = {};

    let farmingData = input.split(' ');

    for (let i = 0; i < farmingData.length; i += 2) {
        let material = farmingData[i + 1].toLowerCase();
        let quantity = Number(farmingData[i]);

        if (material === 'shards') {
            legendaries.Shadowmourne.shards += quantity;
            if (legendaries.Shadowmourne.shards >= 250) {
                console.log("Shadowmourne obtained!");
                legendaries.Shadowmourne.shards -= 250;
                break;
            }
        } else if (material === 'fragments') {
            legendaries.Valanyr.fragments += quantity;
            if (legendaries.Valanyr.fragments >= 250) {
                console.log("Valanyr obtained!");
                legendaries.Valanyr.fragments -= 250;
                break;
            }
        } else if (material === 'motes') {
            legendaries.Dragonwrath.motes += quantity;
            if (legendaries.Dragonwrath.motes >= 250) {
                console.log("Dragonwrath obtained!");
                legendaries.Dragonwrath.motes -= 250;
                break;
            }
        } else {

            if (!junks.hasOwnProperty(material)) {
                junks[material] = quantity;
            } else {
                junks[material] += quantity;
            }
        }
    }

    let legendaryRemaining = Object.entries(legendaries);
    let remainingMaterials = [];


    for (let i = 0; i < legendaryRemaining.length; i++) {
        let materialsData = Object.entries(legendaryRemaining[i][1]);
        remainingMaterials.push(materialsData);
    }

    remainingMaterials.sort((a, b) => {
        return b[0][1] - a[0][1] || a[0][0].localeCompare(b[0][0]);
    });

    for (const materialData of remainingMaterials) {
        console.log(`${materialData[0][0]}: ${materialData[0][1]}`);
    }

    let sortedJunk = Object.entries(junks).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [material, quantity] of sortedJunk) {
        console.log(`${material}: ${quantity}`);

    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('...........');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');