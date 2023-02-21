function echoType(parameter) {

    let type = typeof parameter;
    console.log(type);
    if (type === 'number' || type === 'string') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
