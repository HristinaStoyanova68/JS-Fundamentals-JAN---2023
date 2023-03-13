function extractFile(path) {

    const dirc = path.split('\\');

    const file = dirc.pop();

    const lastComma = file.lastIndexOf('.');
    const fileName = file.substring(0, lastComma);
    const extension = file.substring(lastComma + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('...........');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');