function deserializeString(input) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (const string of input) {

        if (string === 'end') {
            break;
        }
        let index = string.lastIndexOf('/');
        let num = Number(string.substring(index + 1));

        if (num > maxNumber) {
            maxNumber = num
        }
    }

    let stringAsArray = Array.from(Array(maxNumber + 1));

    for (const letterInfo of input) {
        if (letterInfo !== 'end') {
            let [letter, indexes] = letterInfo.split(':');
            indexes = indexes.split('/').map(Number);

            for (const indexOfLetter of indexes) {
                stringAsArray.splice(indexOfLetter, 1, letter);
            }
        }
    }

    console.log(stringAsArray.join(''));
}

deserializeString([
    'a:0/2/4/6',
    'b:1/3/5',
    'end']);
console.log('............');
deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);