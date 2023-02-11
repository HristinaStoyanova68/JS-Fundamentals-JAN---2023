function removeElementFromArray(name, array) {

    let newArray = [];
    let isExist = false;

    for (let i = 0; i < array.length; i++) {
        let currName = array[i];
          
        if (currName !== name) {
            newArray.push(currName);
        } else {
            isExist = true;
        }
    }
    return newArray.join(' ');
    
    
}
console.log(removeElementFromArray('George', ['Anna', 'John', 'George', 'Dave']));
