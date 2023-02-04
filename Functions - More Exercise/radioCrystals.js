function radioCrystals(array) {
    
    let targerCrystal = Number(array[0]);
    let arrayLength = array.length;
    
    for (let i = 1; i < arrayLength; i++) {
        let currCrystal = Number(array[i]);

        console.log(`Processing chunk ${currCrystal} microns`);

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        
        while (currCrystal !== targerCrystal) {

            while (cut(currCrystal) >= targerCrystal) {
                currCrystal = cut(currCrystal);
                cutCount++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log('Transporting and washing');
                currCrystal = transportAndWashing(currCrystal);

            }

            while (lap(currCrystal) >= targerCrystal) {
                currCrystal = lap(currCrystal);
                lapCount++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log('Transporting and washing');
                currCrystal = transportAndWashing(currCrystal);

            }

            while (grind(currCrystal) >= targerCrystal) {
                currCrystal = grind(currCrystal);
                grindCount++;
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log('Transporting and washing');
                currCrystal = transportAndWashing(currCrystal);

            }

            while (etch(currCrystal) >= targerCrystal -1) {
                currCrystal = etch(currCrystal);
                etchCount++;
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log('Transporting and washing');
                currCrystal = transportAndWashing(currCrystal);

            }

            if (currCrystal < targerCrystal) {
                currCrystal = xRay(currCrystal);
                console.log('X-ray x1');
            }
            
        }
        console.log(`Finished crystal ${targerCrystal} microns`);

    }

    // //create cut function
    function cut(microns) {
        return microns / 4;
    }
    //create lap function
    function lap(microns) {
        return microns * 0.80;
    }
    //create grind function
    function grind(microns) {
        return microns - 20;
    }
    //create etch function
    function etch(microns) {
        return microns - 2;
    }
    //create x-Ray function
    function xRay(microns) {
        return microns + 1;
    }
    //create transportAndWashing function
    function transportAndWashing(microns) {
        return Math.floor(microns);
    }

}

radioCrystals([1000, 4000, 8100]);