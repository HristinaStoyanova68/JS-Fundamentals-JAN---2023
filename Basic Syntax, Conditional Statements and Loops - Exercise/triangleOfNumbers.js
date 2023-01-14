function solve(n) {
    for (let row = 1; row <= n; row++) {
        let ressult = "";
        for (let col = 0; col < row; col++) {
            ressult += row + " ";

        }
        console.log(ressult);
    }

}

solve(3);
console.log(`................`);
solve(5);
console.log(`................`);
solve(6);