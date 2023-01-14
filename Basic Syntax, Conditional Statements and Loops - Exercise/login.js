function solve(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = "";
    let word = input[index];
    let counter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    while (word !== password) {
        counter++;
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
        }

        index++;
        word = input[index];
    }
    console.log(`User ${username} logged in.`);


}

solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);