function thePianist(input) {

    let numOfPieces = Number(input.shift());

    let pieces = input.splice(0, numOfPieces);
    let piecesList = {};

    for (const line of pieces) {
        let [title, composer, tonality] = line.split('|');
        let titleData = [composer, tonality];

        if (!piecesList.hasOwnProperty(title)) {

            piecesList[title] = titleData;
        }
    }

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== 'Stop') {
        let command = commandLine.split('|')[0];
        let pieceTitle = commandLine.split('|')[1];

        if (command === 'Add') {

            if (!piecesList.hasOwnProperty(pieceTitle)) {
                let composer = commandLine.split('|')[2];
                let tonality = commandLine.split('|')[3];
                let currTitleData = [composer, tonality]

                piecesList[pieceTitle] = currTitleData;
                console.log(`${pieceTitle} by ${composer} in ${tonality} added to the collection!`);
            } else {

                console.log(`${pieceTitle} is already in the collection!`);
            }
        } else if (command === 'Remove') {

            if (piecesList.hasOwnProperty(pieceTitle)) {

                delete piecesList[pieceTitle];
                console.log(`Successfully removed ${pieceTitle}!`);
            } else {

                console.log(`Invalid operation! ${pieceTitle} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {

            if (piecesList.hasOwnProperty(pieceTitle)) {

                let newTonality = commandLine.split('|')[2];
                let currTitleData = piecesList[pieceTitle];
                currTitleData[1] = newTonality;

                console.log(`Changed the key of ${pieceTitle} to ${newTonality}!`);
            } else {

                console.log(`Invalid operation! ${pieceTitle} does not exist in the collection.`);
            }
        }

        index++;
        commandLine = input[index];
    }

    for (const pieceTitle in piecesList) {
        let [composer, tonality] = piecesList[pieceTitle];

        console.log(`${pieceTitle} -> Composer: ${composer}, Key: ${tonality}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);
console.log('...............');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
);