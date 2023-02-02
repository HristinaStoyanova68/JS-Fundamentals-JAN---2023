function printCertificate(grade, namesArray) {
    let formatedGrade = returnFormatGrade2(grade);
    let formatedName = mergeName(namesArray);

    let res1 = `*${formatedGrade} ${formatedName}*`;
    console.log(res1);

    // console.log(formatedGrade);
    // console.log(formatedName);
    // console.log(1);

}
printCertificate(5.25, ['Peter', 'Carter']);

function mergeName(namesArray) {
    return namesArray[0] + ' ' + namesArray[1];
}
function returnFormatGrade2(grade) {
    let assessment = '';

    if (grade >= 2 && grade < 3) {
        assessment = 'Fail';
    } else if (grade < 3.50) {
        assessment = 'Poor';
    } else if (grade < 4.50) {
        assessment = 'Good';
    } else if (grade < 5.50) {
        assessment = 'Very good';
    } else if (grade >= 5.50 && grade <= 6.00) {
        assessment = 'Excellent';
    }
    let gradeValueText = grade < 3 ? '2' : grade.toFixed(2);
    return `${assessment} (${gradeValueText})`;
}

// printCertificate(5.25, ['Peter', 'Carter']);