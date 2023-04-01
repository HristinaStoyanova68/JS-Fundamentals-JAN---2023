function santasCookies(input) {

    let amountOfBatches = Number(input.shift());
    
    let totalBoxes = 0;

    for (let i = 0; i < input.length; i += 3) {
        let flour = Number(input[i]);
        let sugar = Number(input[i + 1]);
        let cocoa = Number(input[i + 2]);

        let flourCups = Math.floor(flour / 140);
        let sugarSpoons = Math.floor(sugar / 20);
        let cocoaSpoons = Math.floor(cocoa / 10);

        if ((flourCups && sugarSpoons && cocoaSpoons) <= 0) {
            console.log('Ingredients are not enough for a box of cookies.');
            continue;
        } else {
            let totalCookiesPerBake = Math.floor(170 * Math.min(flourCups, sugarSpoons, cocoaSpoons) / 25);

            let boxesPerBatch = Math.floor(totalCookiesPerBake / 5);

            console.log(`Boxes of cookies: ${boxesPerBatch}`);
            totalBoxes += boxesPerBatch;
        }
    }

    console.log(`Total boxes: ${totalBoxes}`);
}

santasCookies(['2',
    '200',
    '300',
    '500',
    '100',
    '200',
    '50']);
console.log('............');
santasCookies(['1',
    '1400',
    '200',
    '100']);