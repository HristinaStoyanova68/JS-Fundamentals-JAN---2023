function chessBoard(num) {

    let counter = 0;
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= num; i++) {
        console.log(`  <div>`);
        for (let j = 1; j <= num; j++) {
            counter++;
            if (counter % 2 !== 0) {
                console.log(`    <span class="black"></span>`);
            } else {
                console.log(`    <span class="white"></span>`);
            }
            if (j === num) {
                if (j % 2 === 0) {
                    counter++;
                }
            }
        }
        console.log(`  </div>`);
    }
    console.log(` </div>`);

}

chessBoard(6);