function formatGrade2(grade) {
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
    if (assessment === 'Fail') {
        console.log('Fail (2)');
    } else {
        console.log(`${assessment} (${grade.toFixed(2)})`);
    }
}

formatGrade2(6.00);