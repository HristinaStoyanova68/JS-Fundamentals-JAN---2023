function pointsValidation(input) {
    let pointX1 = Number(input[0]);
    let pointY1 = Number(input[1]);
    let pointX2 = Number(input[2]);
    let pointY2 = Number(input[3]);

    //{x1, y1} to {0, 0}
    //{x2, y2} to {0, 0}
    //{x1, y1} to {x2, y2}

    let pointsForComparisons = [];

    let firstPointsForComparisons = [pointX1, pointY1, 0, 0];
    let secondPointsForComparisons = [pointX2, pointY2, 0, 0];
    let thirdPointsForComparisons = [pointX1, pointY1, pointX2, pointY2];

    pointsForComparisons.push(firstPointsForComparisons);
    pointsForComparisons.push(secondPointsForComparisons);
    pointsForComparisons.push(thirdPointsForComparisons);
    let pointsForComparisonsLength = pointsForComparisons.length;

    for (let i = 0; i < pointsForComparisonsLength; i++) {
        let currPointsForComparisons = pointsForComparisons[i];
        let pointX1 = Number(currPointsForComparisons[0]);
        let pointY1 = Number(currPointsForComparisons[1]);
        let pointX2 = Number(currPointsForComparisons[2]);
        let pointY2 = Number(currPointsForComparisons[3]);

        let distance = distanceCalculation(pointX1, pointY1, pointX2, pointY2);
        let checkIsValid = checkIntegerValue(distance);

        if (checkIsValid) {
            console.log(`{${pointX1}, ${pointY1}} to {${pointX2}, ${pointY2}} is valid`);
        } else {
            console.log(`{${pointX1}, ${pointY1}} to {${pointX2}, ${pointY2}} is invalid`);
        }
    }

    function distanceCalculation(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(subtractionCalc(x2, x1), 2) + Math.pow(subtractionCalc(y2, y1), 2));

    }

    function subtractionCalc(num1, num2) {
        return num1 - num2;
    }

    function checkIntegerValue(number) {
        if (number === Math.trunc(number)) {
            return true;
        }

        return false;
    }


}

pointsValidation([3, 0, 0, 4]);
console.log('................');
pointsValidation([2, 1, 1, 1]);
