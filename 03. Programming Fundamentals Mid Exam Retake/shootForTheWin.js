function shootForTheWin(input) {

    let sequence = input.shift().split(' ').map(Number);
    //console.log(sequence);
    let action = input.shift();
    let count = 0;

    while (action !== 'End') {

        let index = Number(action);

        if (index >= 0 && index < sequence.length) {

            sequence = compareningValues(sequence, index);
            count++;
        }
        action = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${sequence.join(' ')}`);

    function compareningValues(arr, index) {

        let result = arr.slice(0);

        if (index >= 0 && index < result.length) {

            if (arr[index] !== -1) {

                for (let i = 0; i < result.length; i++) {
                    let currNum = result[i];
                    if (currNum !== -1) {

                        let compareNum = arr[index];
                        if (currNum > compareNum) {
                            result[i] = currNum - compareNum;

                        } else {
                            result[i] = currNum + compareNum;

                        }
                    }
                }
                result[index] = -1;
                arr = result.slice(0);


            }

        }
        return arr;
    }

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
    ;
console.log('.............');
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
    ;

