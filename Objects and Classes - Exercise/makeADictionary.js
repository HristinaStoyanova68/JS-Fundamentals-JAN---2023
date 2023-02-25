function makeADictionary(dataAsJSON) {
    {

        let myDictionary = {};

        for (let line of dataAsJSON) {

            let object = JSON.parse(line);
            let keys = Object.keys(object);
            let key = keys[0];
            myDictionary[key] = object[key];
        }
        let sortedKey = Object.keys(myDictionary).sort((keyA, keyB) => keyA.localeCompare(keyB));

        for (let key of sortedKey) {
            console.log(`Term: ${key} => Definition: ${myDictionary[key]}`);
        }
    }

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and groundseeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to holdor fasten something."}',
    '{"Microphone":"An instrumentfor converting sound waves intoelectrical energy variations which may then be amplified,transmitted, or recorded."}']);
console.log('.........');
makeADictionary([

    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such aspainting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ']);