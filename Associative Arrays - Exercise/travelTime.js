function travelTime(input) {

    let countryList = {};
    let destinationList = {};

    for (const line of input) {
        let tokens = line.split(' > ');
        let country = tokens[0];
        let destination = tokens[1];
        let cost = Number(tokens[2]);

        if (!countryList.hasOwnProperty(country)) {
            destinationList = {};
            countryList[country] = destinationList;
            destinationList[destination] = cost;
        } else {
            let currCountryValues = countryList[country];

            if (!currCountryValues.hasOwnProperty(destination)) {
                currCountryValues[destination] = cost;
            } else {

                if (currCountryValues[destination] > cost) {
                    currCountryValues[destination] = cost;
                }
            }
        }
    }

    let sorted = Object.entries(countryList).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, destinationList] of sorted) {
        let sortedDestData = Object.entries(destinationList).sort((a, b) => a[1] - b[1]);
        let dataForPrint = '';
        for (const [destination, cost] of sortedDestData) {
            dataForPrint += `${destination} -> ${cost} `
        }
        console.log(`${country} -> ${dataForPrint}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('............');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);