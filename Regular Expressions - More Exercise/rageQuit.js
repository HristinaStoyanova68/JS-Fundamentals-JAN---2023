function rageQuit(input) {

    let pattern = /(?<symbols>\D+)(?<count>\d+)/g;

    let matches = pattern.exec(input);
    let newString = '';

    while (matches !== null) {

        newString += matches.groups['symbols'].toUpperCase().repeat(Number(matches.groups['count']));

        matches = pattern.exec(input);
    }

    console.log(`Unique symbols used: ${findUnique(newString)}`);
    console.log(newString);

    function findUnique(string) {

        let uniq = '';
        let counter = 0;

        for (let i = 0; i < string.length; i++) {

            if (uniq.includes(string[i]) === false) {

                uniq += string[i];

                counter++;
            }
        }
        return counter;
    }
}

rageQuit('a3');
console.log('............');
rageQuit('aSd2&5s@1');
console.log('............');
rageQuit(`e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12\`aD<l&$W&)*yF1WLV9_GmTf(d0($!$\`e/{D'
xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh\`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV\`z-15g@hUYE{_$~}+X%*nytkW15`);
