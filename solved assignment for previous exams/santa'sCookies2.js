function santasCookies(input) {

    let amountOfBatches = Number(input.shift());
    let singleCookieGrams = 25;
    let cup = 140;
    let smallSpoon = 10;
    let bigSpoon = 20;
    let cookiesPerBox = 5;
    let totalBoxes = 0;

    for (let i = 1; i <= amountOfBatches; i++) {
        let flour = Number(input.shift());
        let sugar = Number(input.shift());
        let cocoa = Number(input.shift());

        let flourCups = Math.floor(flour / cup);
        let sugarSpoons = Math.floor(sugar / bigSpoon);
        let cocoaSpoons = Math.floor(cocoa / smallSpoon);

        if ((flourCups && sugarSpoons && cocoaSpoons) <= 0) {
            console.log('Ingredients are not enough for a box of cookies.');
            continue;
        } else {
            let totalCookiesPerBake = 
            Math.floor(170 * Math.min(flourCups, sugarSpoons, cocoaSpoons) 
            / singleCookieGrams);

            let boxesPerBatch = Math.floor(totalCookiesPerBake / cookiesPerBox);

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