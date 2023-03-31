function newStr(str) {
    let pattern = /.(.|$)/g;

    str = str.replace(pattern, '$1');
    return str;
}


// console.log('abcdefghij'.replace(/(.)./g, '$1'));
// console.log('abcdefghi'.replace(/.(.|$)/g, '$1'));

console.log(newStr("Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr"))