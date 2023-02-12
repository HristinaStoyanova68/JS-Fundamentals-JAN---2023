function guineaPig(input) {

    //the quantity of food, hay, and cover

    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let guineaPigWieght = Number(input[3]) * 1000;
    let isEnough = true;

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (food <= 0) {
            isEnough = false;
            break;
        }
        if (i % 2 === 0) {
            hay -= food * 0.05;
            if (hay <= 0) {
                isEnough = false;
                break;
            }
        }
        if (i % 3 === 0) {
            cover -= guineaPigWieght / 3;
            if (cover <= 0) {
                isEnough = false;
                break;
            }
        }
    }
    if (isEnough) {
        let excessFood = food / 1000;
        let excessHay = hay / 1000;
        let excessCover = cover / 1000;
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }

}

guineaPig(["10", "5", "5.2", "1"]);
console.log('.............');
guineaPig(["1", "1.5", "3", "1.5"]);
console.log('.............');
guineaPig(["9", "5", "5.2", "1"]);
