function thePyramidOfKingDjoser(base, increment) {
    let marble = 0;
    let stone = 0;
    let lapisLazul = 0;
    let gold = 0;
    let counter = 0;
    for (let i = base; i >= 1; i -= 2) {
        counter++;
        if (i === 1 || i === 2) {
            gold += Math.pow(i, 2) * increment;
        } else if (counter % 5 === 0) {
            lapisLazul += (4 * (i - 1)) * increment;
            stone += Math.pow((i - 2), 2) * increment;
        } else {
            marble += (4 * (i - 1)) * increment;
            stone += Math.pow((i - 2), 2) * increment;
        }
    }
    let finalPiramideHeight = Math.floor(counter * increment);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazul)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${finalPiramideHeight}`);
}

// thePyramidOfKingDjoser(11, 1);
// console.log('.............');
// thePyramidOfKingDjoser(11, 0.75);
// console.log('.............');
// thePyramidOfKingDjoser(12, 1);
// console.log('.............');
thePyramidOfKingDjoser(23, 0.5);