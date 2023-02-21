function ages(num) {

    let condition = '';

    if (num < 0) {
        condition = 'out of bounds';
    } else if (num <= 2) {
        condition = 'baby';
    } else if (num <= 13) {
        condition = 'child';
    } else if (num <= 19) {
        condition = 'teenager';
    } else if (num <= 65) {
        condition = 'adult';
    } else if (num >= 66) {
        condition = 'elder';
    }
    console.log(condition);

}

ages(20);
ages(1);
ages(100);
ages(-1);
