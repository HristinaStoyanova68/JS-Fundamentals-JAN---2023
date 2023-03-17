function extractEmails(input) {

    let emailPattern = /(^|(?<=\s))(?<user>([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+))(@)(?<host>([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g;

    let emailInfo = emailPattern.exec(input);

    while (emailInfo !== null) {
        console.log(`${emailInfo.groups['user']}@${emailInfo.groups['host']}`);
        emailInfo = emailPattern.exec(input);
    }
}

extractEmails('Please contact us at: support@github.com.');
console.log('............');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('............');
extractEmails(
    `Many users @ SoftUni confuse email addresses. We @
        Softuni.BG provide high-quality training @ home or @ class. 
        -- steve.parker@softuni.de.`);
