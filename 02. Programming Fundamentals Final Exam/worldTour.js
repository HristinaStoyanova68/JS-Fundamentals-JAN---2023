function worldTour(input) {

    let stopsAsArr = input.shift().split('');

    let index = 0;
    let commandData = input[index];

    while (commandData !== 'Travel') {

        let [command, param1, param2] = commandData.split(':');

        if (command === 'Add Stop') {
            let index = Number(param1);

            if (index > -1 && index < stopsAsArr.length) {
                stopsAsArr.splice(index, 0, param2);
            }
            console.log(stopsAsArr.join(''));
            stopsAsArr = stopsAsArr.join('').split('');
        } else if (command === 'Remove Stop') {

            let startIndex = Number(param1);
            let endIndex = Number(param2);

            if ((startIndex > -1 && startIndex < stopsAsArr.length) && (endIndex > -1 && endIndex < stopsAsArr.length)) {
                stopsAsArr.splice(startIndex, (endIndex - startIndex) + 1);
            }
            console.log(stopsAsArr.join(''));
        } else if (command === 'Switch') {
            let oldString = param1;
            let newString = param2;

            let stopsAsString = stopsAsArr.join('');

            if (stopsAsString.includes(oldString)) {
                stopsAsArr = stopsAsString.replace(oldString, newString).split('');
            }
            console.log(stopsAsArr.join(''));
        }

        index++;
        commandData = input[index];
    }

    console.log(`Ready for world tour! Planned stops: ${stopsAsArr.join('')}`);
}

worldTour(([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);
console.log('.............');
worldTour(([
    "Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
);