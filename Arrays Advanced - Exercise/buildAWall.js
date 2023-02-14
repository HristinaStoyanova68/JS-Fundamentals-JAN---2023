function buildAWall(input) {

    let parsedInput = input.map(Number);
    let crews = parsedInput.filter(x => x < 30).length;
    let concretePerDay = [];
    let totalConcrete = 0;
    //console.log(crews);

    while (crews !== 0) {
        let concreteFromAllCrews = 0;
        for (let i = 0; i < parsedInput.length; i++) {
            if (parsedInput[i] !== 30) {
                parsedInput[i]++;
                concreteFromAllCrews += 195;
                if (parsedInput[i] === 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concreteFromAllCrews;
        concretePerDay.push(concreteFromAllCrews);
    }
    let price = totalConcrete * 1900;
    console.log(concretePerDay.join(', '));
    console.log(`${price} pesos`);
}

buildAWall([21, 25, 28]);
console.log('...........');
buildAWall([17]);
console.log('...........');
buildAWall([17, 22, 30, 17, 19, 17]);