function solve(num) {
    let text = num.toString();
    for (let i = text.length - 1; i >= 0; i--) {
        let j = Number(text[i]);
        if (j === 0) {
            console.log(`zero`);
            return;
        } else if (j === 1) {
            console.log(`one`);
            return;
        } else if (j === 2) {
            console.log(`two`);
            return;
        } else if (j === 3) {
            console.log(`three`);
            return;
        } else if (j === 4) {
            console.log(`four`);
            return;
        } else if (j === 5) {
            console.log(`five`);
            return;
        } else if (j === 6) {
            console.log(`six`);
            return;
        } else if (j === 7) {
            console.log(`seven`);
            return;
        } else if (j === 8) {
            console.log(`eight`);
            return;
        } else if (j === 9) {
            console.log(`nine`);
            return;
        }


    }

}

solve(1643);