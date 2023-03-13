function modernTimesOfHashTag(text) {

    const textAsArr = text.split(' ');

    textAsArr.forEach(word => {

        const isValidWord = word.startsWith('#') && word.length > 1;

        if (isValidWord) {
            let wordCopy = '';
            let isLetter = true;

            for (let i = 1; i < word.length; i++) {
                let char = word[i].toLowerCase();

                if (!(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[i];
                }
            }

            if (isLetter) {
                console.log(wordCopy);
            }
        }
    });
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('..........');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');