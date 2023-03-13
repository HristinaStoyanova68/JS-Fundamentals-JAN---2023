function cutAndReverse(string) {

    let middle = string.length / 2;

    const firstPart = string.substring(0, middle)
    .split('')
    .reverse()
    .join('');
    console.log(firstPart);

    const secondPart = string.substring(middle)
    .split('')
    .reverse()
    .join('');
    console.log(secondPart);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('...........');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
