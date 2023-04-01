function softUniKaraoke(input) {

    let performanceList = {};
    let people = input.shift().split(', ');
    let songlist = input.shift().split(', ');

    let index = 0;
    let action = input[index];

    while (action !== 'dawn') {
        let [person, song, award] = action.split(', ');

        if (people.includes(person) && songlist.includes(song)) {

            if (!performanceList.hasOwnProperty(person)) {
                let awardList = new Map();
                performanceList[person] = awardList;
                awardList.set(award, song);
            } else {
                let currAwardList = performanceList[person];
                if (!currAwardList.has(award)) {
                    currAwardList.set(award, song);
                }
            }
        }

        index++;
        action = input[index];
    }

    let objSize = Object.keys(performanceList).length;
    if (objSize === 0) {
        console.log('No awards');
    } else {
        let sortedPeople = Object.entries(performanceList);
        sortedPeople = sortedPeople.sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]));

        for (const [person, data] of sortedPeople) {

            console.log(`${person}: ${data.size} awards`);

            let sortedAwards = Array.from(data).sort((a, b) => a[0].localeCompare(b[0]));

            sortedAwards.forEach(element => {

                console.log(`--${element[0]}`);
            });
        }
    }
}

softUniKaraoke(['Trifon, Vankata, Gesha',
    'Dragana - Kukavice, Bon Jovi - It\'s my life, Lorde - Royals',

    'Gesha, Bon Jovi - It\'s my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',

    'Vankata, PHP Web, Educational 101',
    'dawn']);
console.log('................');
softUniKaraoke(['Gesha',
    'Bon Jovi - It\'s my life',
    'Gesha, Bon Jovi - It\'s my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn']);
console.log('................');
softUniKaraoke(['Sino',
    'Vasko Naidenov - Nova Godina',
    'dawn']);

    // if (performanceList[person][1] !== award) {
    //     performanceList[person].push({song: award});
    // }