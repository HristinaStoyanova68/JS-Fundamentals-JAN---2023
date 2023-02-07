function treasureHunt(input) {

        let index = 0;
        let initialLoot = input[index];
        index++;
        let command = input[index];
        index++;

        let initialLootAsArray = arrayFromString(initialLoot);

        let removedElemArray = [];

        while (command !== "Yohoho!") {

                let commandAsArray = arrayFromString(command);
                let currCommand = commandAsArray[0];
                let initialLootAsArrayLength = initialLootAsArray.length;

                switch (currCommand) {
                        case 'Loot':
                                commandAsArray.shift();
                                initialLootAsArray = compareArraysValues(initialLootAsArray, commandAsArray)
                                break;
                        case 'Drop':
                                let index = Number(commandAsArray[1]);

                                if (index >= 0 && index < initialLootAsArrayLength) {
                                        initialLootAsArray = removeAndAdd(initialLootAsArray, index);
                                }
                                break;
                        case 'Steal':
                                let count = Number(commandAsArray[1]);

                                if (count >= initialLootAsArrayLength) {
                                        removedElemArray = initialLootAsArray;
                                        initialLootAsArray = [];

                                } else {
                                        initialLootAsArray = removeTheLastCountOfElemFromArr(initialLootAsArray, count);
                                        removedElemArray = initialLootAsArray[1];
                                        initialLootAsArray = initialLootAsArray[0];
                                }
                                console.log(removedElemArray.join(', '));
                                break;
                }
                command = input[index];
                index++;
        }

        let resultOfArrayValue = arraysValueAndArraysElementsCounts(initialLootAsArray);
        let initialLootAsArrayLength = initialLootAsArray.length;
        let arrayValue = resultOfArrayValue[0];
        let count = resultOfArrayValue[1];

        if (initialLootAsArrayLength > 0) {

                let averageTreasureGain = arrayValue / count;
                console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);

        } else {
                console.log("Failed treasure hunt.");
        }

        //receive arrays value

        function arraysValueAndArraysElementsCounts(array) {
                let arrayLength = array.length;
                let arrayValue = 0;
                let count = 0;
                let integersFolCalculating = [];

                for (let i = 0; i < arrayLength; i++) {
                        count++;
                        let cuurElem = array[i];
                        let currElemLength = cuurElem.length;

                        arrayValue += currElemLength;
                }
                integersFolCalculating.push(arrayValue);
                integersFolCalculating.push(count);
                return integersFolCalculating;
        }

        //removing the last count of elements from array

        function removeTheLastCountOfElemFromArr(array, count) {
                let newArray = [];
                removedElemArray = [];
                let allElemArray = [];
                let arrayLength = array.length;

                for (let i = 0; i < arrayLength; i++) {
                        let currElem = array[i];
                        if (i >= arrayLength - count) {
                                removedElemArray.push(currElem);
                        } else {
                                newArray.push(currElem);
                        }
                }
                allElemArray.push(newArray);
                allElemArray.push(removedElemArray);
                return allElemArray;
        }

        //removing the loot at the given position and add it at the end

        function removeAndAdd(array, index) {
                let newArray = [];
                let arrayLength = array.length;
                let movingElem = '';
                for (let i = 0; i < arrayLength; i++) {
                        let currElem = array[i];
                        if (i === index) {
                                movingElem = currElem;
                        } else {
                                newArray.push(currElem);
                        }
                }
                newArray.push(movingElem);
                return newArray;
        }

        // make an array from string

        function arrayFromString(text) {
                let textLength = text.length;
                let arrayFromString = [];
                let word = '';

                for (let i = 0; i < textLength; i++) {
                        let currElem = text[i];

                        if (currElem !== '|' && currElem !== ' ') {
                                word += currElem;
                        }
                        if (currElem === '|' || currElem === ' ' || i === textLength - 1) {
                                arrayFromString.push(word);
                                word = '';
                        }
                }
                return arrayFromString;
        }

        // let compare arrays values

        function compareArraysValues(arr1, arr2) {

                let arr2Length = arr2.length;


                for (let i = 0; i < arr2Length; i++) {
                        let element = arr2[i];
                        let isIncludes = true;
                        for (let item of arr1) {

                                if (element !== item) {
                                        isIncludes = false;
                                } else {
                                        isIncludes = true;
                                        break;
                                }

                        }
                        if (isIncludes === false) {

                                arr1.unshift(element);
                        }
                }

                return arr1;

        }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
        "Loot Wood Gold Coins Wood Silver",
        "Loot Silver Pistol",
        "Drop 3",
        "Steal 9",
        "Yohoho!"]);
console.log('............');
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -200",
        "Drop 1",
        "Steal 1",
        "Yohoho!"]);


