function hardWords(input) {

    let words = input.pop();
    words = words.sort((a, b) => a.length - b.length);
    
    let newString = input.toString().split(' ');
    
    for (const word of words) {

        for (let i = 0; i < newString.length; i++) {
            let hole = newString[i];
            if (hole.startsWith('_') || hole.endsWith('_') || !hole.endsWith('_')) {
                if (hole.startsWith('_') && hole.endsWith('_') && hole.length === word.length) {
                    newString[i] = word;
                    break;
                } 
                if (hole.startsWith('_') && !hole.endsWith('_') && hole.length - 1 === word.length) {
                    let lastElemOfHole = hole[hole.length - 1];
                    let newWord = word + lastElemOfHole;
                    newString[i] = newWord;
                    break;
                }
            }
        }  
    }
    console.log(newString.join(' '));
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
