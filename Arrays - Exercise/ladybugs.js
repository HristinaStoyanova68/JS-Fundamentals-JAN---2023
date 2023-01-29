function ladybugs(input) {
    let sizeOfField = Number(input[0]);
    let initialIndexes = input[1];


    //let find out where are the ladybugs on first
    let ladybugsArray = [];
    for (let i = 0; i < sizeOfField; i++) {
        ladybugsArray.push("0");
    }
    let ladybugsPositionsArray = [];
    let initialPositionsAsString = "";
    for (let i = 0; i < initialIndexes.length; i++) {

        let currChar = initialIndexes[i];
        if (currChar !== " ") {

            initialPositionsAsString += currChar;
            // ladybugsPositionsArray.push(currCell);
        }
        if (currChar === " " || i === initialIndexes.length - 1) {
            ladybugsPositionsArray.push(Number(initialPositionsAsString));
            initialPositionsAsString = "";
        }

    }
    //console.log(ladybugsPositionsArray);
    //put ladybugs on start place
    for (let i = 0; i < sizeOfField; i++) {
        let ladybugsIndex = ladybugsPositionsArray[i];
        if (ladybugsIndex >= 0 && ladybugsIndex < sizeOfField) {
            ladybugsArray[ladybugsIndex] = 1;
        }
    }
    //console.log(ladybugsArray);
    //let check how the ladybugs are flight
    for (let i = 2; i < input.length; i++) {
        let jumpingAsString = input[i];
        let jumpAsArray = [];
        let tempJumpArray = "";
        let ladybugsIndex = 0;
        let command = "";
        let flightPoint = 0;
        for (let j = 0; j < jumpingAsString.length; j++) {
            let currElem = jumpingAsString[j];
            if (currElem !== " ") {
                tempJumpArray += currElem;
                if (j === jumpingAsString.length - 1) {
                    jumpAsArray.push(tempJumpArray);
                }
            } else {
                jumpAsArray.push(tempJumpArray);
                tempJumpArray = "";
            }
            if (j === jumpingAsString.length - 1) {
                //console.log(jumpAsArray);
                ladybugsIndex = Number(jumpAsArray[0]);
                command = jumpAsArray[1];
                flightPoint = Number(jumpAsArray[2]);
            }
        }
        //check for empty cell
        if (ladybugsArray[ladybugsIndex] !== 1 || ladybugsIndex < 0 || ladybugsIndex >= ladybugsArray.length) {
            continue;
        } else {
            //check for negative flightPoint

            if (flightPoint < 0) {
                flightPoint = Math.abs(flightPoint);
                if (command === "right") {
                    command = "left";
                } else if (command === "left") {
                    command = "right";
                }
            }
            //check for free cell
            ladybugsArray[ladybugsIndex] = 0;

            if (command === "right") {
                //jump first time
                let newPosition = ladybugsIndex + flightPoint;
                //if another ladybug is there
                while (ladybugsArray[newPosition] === 1) {
                    newPosition = newPosition + flightPoint;
                }
                if (newPosition >= ladybugsArray.length) {
                    continue;
                } else {
                    ladybugsArray[newPosition] = 1;
                }

            } else {
                //jump first time
                let newPosition = ladybugsIndex - flightPoint;
                //if another ladybug is there
                while (ladybugsArray[newPosition] === 1) {
                    newPosition = newPosition - flightPoint;
                }
                if (newPosition < 0) {
                    continue;
                } else {
                    ladybugsArray[newPosition] = 1;
                }

            }
        }



    }
    //let print where they are on the end
    console.log(ladybugsArray.join(' '));

}

ladybugs([5, '3', '3 left 2', '1 left -2']);