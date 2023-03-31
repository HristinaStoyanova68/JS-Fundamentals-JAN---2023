function worldTour(array) {

    let stops = array.shift();
    let index = 0;
    let commandLine = array[index];

    while (commandLine !== 'Travel') {

        let [command, ...tokens] = commandLine.split(':');

        if (command === 'Add Stop') {

            let index = Number(tokens[0]);
            let string = tokens[1];

            if (index > - 1 && index < stops.length) {
                
                let newString = stops.split('');
                newString.splice(index, 0, ...string);
                stops = newString.join('');
            }

        } else if (command === 'Remove Stop') {

            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);

            if ((startIndex > - 1 && startIndex < stops.length) && (endIndex > - 1 && endIndex < stops.length)) {
                
                let newString = stops.split('');
                newString.splice(startIndex, (endIndex - startIndex) + 1);
                stops = newString.join('');
            }
        } else if (command === 'Switch') {

            let oldString = tokens[0];
            let newString = tokens[1];

            if (stops.includes(oldString)) {

                stops = stops.replace(oldString, newString);
            }
        }
        
        console.log(stops);
        index++;
        commandLine = array[index];
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
console.log('..............');
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);