function substring(text, startIndex, count) {

    let result = text.substring(startIndex, startIndex + count);
    console.log(result);
}

substring('ASentence', 1, 8);
console.log('........');
substring('SkipWord', 4, 7);