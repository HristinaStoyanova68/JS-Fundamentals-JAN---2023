function bookShelf(input) {

    let shelfId = {};

    for (const line of input) {

        if (line.includes(' -> ')) {
            let [shelfIdNumber, genre] = line.split(' -> ');

            if (!shelfId.hasOwnProperty(shelfIdNumber)) {
                shelfId[shelfIdNumber] = { [genre]: [] };
            }
        } else if (line.includes(': ')) {

            let bookInfo = {};
            let [bookTitle, bookData] = line.split(': ');
            let [bookAuthor, genre] = bookData.split(', ');
            bookInfo[bookTitle] = bookAuthor;

            for (const currShelf in shelfId) {

                if (shelfId[currShelf].hasOwnProperty(genre)) {

                    (shelfId[currShelf][genre]).push(bookInfo);
                    break;
                }
            }
        }
    }

    let sortedShelfId = Object.entries(shelfId).sort((a, b) => Object.entries(b[1])[0][1].length - Object.entries(a[1])[0][1].length);

    for (const shelf of sortedShelfId) {
        let currShelf = shelf[0];
        let entries = Object.entries(shelf[1]);
        let genre = entries[0][0];
        let count = entries[0][1].length;

        console.log(`${currShelf} ${genre}: ${count}`);

        let sortedTitles = entries[0][1].sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

        for (const book of sortedTitles) {
            let [bookTitle, bookAuthor] = Object.entries(book)[0];

            console.log(`--> ${bookTitle}: ${bookAuthor}`);
        }
    }
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);
console.log('............');
bookShelf([
    '1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]);