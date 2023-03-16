function matchFullName(string) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = regex.exec(string);
    let modifiedString = [];

    while (match) {
        modifiedString.push(match[0]);
        match = regex.exec(string);
    }

    console.log(modifiedString.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov");