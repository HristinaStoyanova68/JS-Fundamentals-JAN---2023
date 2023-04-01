function santaSecretHelper(input) {

    let number = Number(input.shift());
    let index = 0;
    let message = input[index];

    while (message !== 'end') {

        message = message.split('').map(x => x.charCodeAt() - number);
        message = message.map(x => String.fromCharCode(x)).join('');

        let codePattern = /@(?<name>[A-Za-z]+)[^\-@!:\>]*!(?<behavior>[G])!/g;

        let valid = codePattern.exec(message);

        if (valid !== null) {

            console.log(valid.groups['name']);
        }

        index++;
        message = input[index];
    }
}

santaSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);
console.log('................');

santaSecretHelper(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);
console.log('..............');
santaSecretHelper(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'])
