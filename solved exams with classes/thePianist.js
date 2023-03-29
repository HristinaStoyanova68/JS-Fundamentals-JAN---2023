function thePianist(input) {

    class Piece {
        constructor(pieceName, pieceComposer, pieceKey) {
            this.piece = pieceName;
            this.composer = pieceComposer;
            this.key = pieceKey;
        }
        remove() {
            delete pieces[this.piece];
            console.log(`Successfully removed ${this.piece}!`);
        }
        changeKey(newKey) {
            this.key = newKey;
            console.log(`Changed the key of ${this.piece} to ${newKey}!`);
        }
        toString() {
            console.log(`${this.piece} -> Composer: ${this.composer}, Key: ${this.key}`);
        }
    }

    let pieces = {};
    let numOfPieces = Number(input.shift());

    for (let i = 0; i < numOfPieces; i++) {
        let [pieceName, pieceComposer, pieceKey] = input[i].split('|');
        let piece = new Piece(pieceName, pieceComposer, pieceKey);
        pieces[pieceName] = piece;
    }

    for (let i = numOfPieces; i < input.length; i++) {
        let [command, pieceName, ...tokens] = input[i].split('|');

        if (command === 'Add') {
            if (!pieces.hasOwnProperty(pieceName)) {
                let pieceComposer = tokens[0];
                let pieceKey = tokens[1];
                let piece = new Piece(pieceName, pieceComposer, pieceKey);
                pieces[pieceName] = piece;
                console.log(`${pieceName} by ${pieceComposer} in ${pieceKey} added to the collection!`);
            } else {
                console.log(`${pieceName} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieces.hasOwnProperty(pieceName)) {
                let piece = pieces[pieceName];
                piece.remove(pieceName);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (pieces.hasOwnProperty(pieceName)) {
                let newKey = tokens[0];
                let piece = pieces[pieceName];
                piece.changeKey(newKey);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        } else if (command === 'Stop') {
            for (const piece in pieces) {
                pieces[piece].toString();
            }
        }
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
]);
console.log('.................');
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