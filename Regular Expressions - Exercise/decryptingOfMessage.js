function decryptingOfMessage(mesagge, number) {

    let decryptedMessage = '';

    for (let i = 0; i < mesagge.length; i++) {
        let currCharNumber = mesagge.charCodeAt(i);
        decryptedMessage += String.fromCharCode(currCharNumber - number);
    }

    return decryptedMessage;
}

console.log(decryptingOfMessage('STCDoghudd4=63333$D$0A53333', 3));