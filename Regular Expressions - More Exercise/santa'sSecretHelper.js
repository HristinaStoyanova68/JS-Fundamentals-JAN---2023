function santaSecretHelper(input) {

    let numForSubtract = Number(input.shift());

    let index = 0;
    let infoData = input[index];
    let newInfoAsArr = [];

    while (infoData !== 'end') {

        let newInfo = '';

        for (let i = 0; i < infoData.length; i++) {
            let charNumber = Number(infoData.charCodeAt(i)) - numForSubtract;

            newInfo += String.fromCharCode(charNumber);
        }

        newInfoAsArr.push(newInfo);
        
        index++;
        infoData = input[index];
    }

    let messageInfoPattern = /@(?<childName>[A-Za-z]+)[^\-@!:\>]*!(?<behavior>[G])!/g;

    for (let i = 0; i < newInfoAsArr.length; i++) {
        let line = newInfoAsArr[i];
        let newMessage = messageInfoPattern.exec(line);

        if (newMessage !== null) {
            
                console.log(newMessage.groups['childName']);
          
                newMessage = messageInfoPattern.exec(line);
             
        } else {
            if (i < newInfoAsArr.length) {

                newMessage = messageInfoPattern.exec(line);
            } else {

                break;
            }
        }
    }
}

santaSecretHelper(['3',

    'CNdwhamigyenumje$J$',

    'CEreelh-nmguuejnW$J$',

    'CVwdq&gnmjkvng$Q$',

    'end']);
console.log('...................');
santaSecretHelper(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru- nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);
console.log('...................');
santaSecretHelper(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%.',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end']);