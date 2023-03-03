function meetings(input) {

    let meeting = {};

    for (let action of input) {
        let [weekday, person] = action.split(' ');

        if (meeting[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meeting[weekday] = person;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const weekday in meeting) {
        console.log(`${weekday} -> ${meeting[weekday]}`);
    }
}
meetings(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim']);
console.log('.............');
meetings(['Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George']);

// weekdayAsArr.push(weekday);
//         if (weekdayAsArr.includes(weekday)) {
//             console.log(`Conflict on ${weekday}!`);
//         } else {
//             console.log(`Scheduled for ${weekday}`);
//         }