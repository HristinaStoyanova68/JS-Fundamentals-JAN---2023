function destinationMapper(input) {

    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;
    let destinations = [];

    let validdestinations = pattern.exec(input);

    while (validdestinations !== null) {

        travelPoints += validdestinations.groups['destination'].length;
        destinations.push(validdestinations.groups['destination']);
        validdestinations = pattern.exec(input);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('...........');
destinationMapper("ThisIs some InvalidInput");