function solve(base, increment) {
    base = Number(base);
    increment = Number(increment);
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;

    while (base > 1) {
        let allBlocks = base * base * increment;
        let innerBlocks = (base - 2) * (base - 2) * increment;
        let outerBlocks = allBlocks - innerBlocks;

        if (base - 2 === 0) {
            break;
        }
        step++;
        base -= 2;
        if (step % 5 === 0) {
            lapisLazuli += outerBlocks;
            stone += innerBlocks;
        } else {
            marble += outerBlocks;
            stone += innerBlocks;
        }
    }
    step++;
    let height = Math.floor(step * increment);
    gold += Math.ceil(base * base * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);



}

solve(23, 0.5);