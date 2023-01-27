function maxSequenceOfEqualElements(input) {
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < input.length; i++) {
        let currElem = Number(input[i]);
        let currentSequence = [currElem];

        for (let j = i + 1; j < input.length; j++) {
            let nextElem = Number(input[j]);
            if (currElem === nextElem) {
                currentSequence.push(nextElem);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        } else if (currentSequence.length === longestSequence.length) {
            if (leftMostIndex < i) {
                leftMostIndex = i;
            }
        }

    }
    console.log(longestSequence.join(" "));


}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);