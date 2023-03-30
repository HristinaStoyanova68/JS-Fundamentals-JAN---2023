function destinationMapper(input) {

    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g;

    let matched = input.match(pattern);
    let destinations = [];
    let sum = 0;

    if (matched === null) {
        console.log(`Destinations:\nTravel Points: 0`);
    } else {

        for (const match of matched) {
            let destination = match.substring(1, match.length - 1);
            destinations.push(destination);
            sum += destination.length;
        }

        console.log(`Destinations: ${destinations.join(', ')}`);
        console.log(`Travel Points: ${sum}`);
    }
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('..............');
destinationMapper("ThisIs some InvalidInput");