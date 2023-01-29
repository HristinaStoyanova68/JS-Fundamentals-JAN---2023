function tseamAccount(input) {
    //making games into array
    let games = input[0];
    let gamesArray = [];
    let storage = '';
    for (let i = 0; i < games.length; i++) {
        let currElem = games[i];
        if (currElem !== ' ') {
            storage += currElem;
        }
        if (currElem === ' ' || i === games.length - 1) {
            gamesArray.push(storage);
            storage = '';
        }
    }
    //making command into array
    let index = 1;
    let commandAction = input[index];
    let addElem = '';

    while (commandAction !== 'Play!') {

        let commandArray = [];
        let commandStorage = '';
        for (let j = 0; j < commandAction.length; j++) {
            let currCommandElem = commandAction[j];
            if (currCommandElem !== ' ') {
                commandStorage += currCommandElem;
            }
            if (currCommandElem === ' ' || j === commandAction.length - 1) {
                commandArray.push(commandStorage);
                commandStorage = '';
            }
        }
        //check and do command
        let command = commandArray[0];
        let game = commandArray[1];
        let tempGamesArray = [];
        let isExist = false;
        // let addElem = '';
        for (let currGame of gamesArray) {
            if (currGame === game) {
                isExist = true;
            }
        }
        switch (command) {
            case 'Install':
                if (isExist === false) {
                    if (command === 'Install') {
                        gamesArray.push(game);
                    }
                }
                break;
            case 'Expansion':
                let gameArray = [];
                let gameElemStorage = '';

                for (let i = 0; i < game.length; i++) {
                    let currGameElem = game[i];
                    if (currGameElem !== '-') {
                        gameElemStorage += currGameElem;
                    }
                    if (currGameElem === '-' || i === game.length - 1) {
                        gameArray.push(gameElemStorage);
                        gameElemStorage = '';
                    }
                }
                game = gameArray[0];
                let expansion = gameArray[1];
                // let addElem = '';
                for (let currGame of gamesArray) {
                    if (currGame !== game) {
                        tempGamesArray.push(currGame);
                    } else {
                        tempGamesArray.push(currGame);
                        addElem = `${game}:${expansion}`;
                        tempGamesArray.push(addElem);
                    }
                }
                gamesArray = tempGamesArray;
                break;
        }
        if (isExist) {
            switch (command) {
                case 'Uninstall':
                    for (let currGame of gamesArray) {
                        if (currGame === game) {
                            continue;
                        }
                        if (currGame === addElem) {
                            continue;
                        }
                        if (currGame !== game) {
                            tempGamesArray.push(currGame);
                        }
                    }
                    gamesArray = tempGamesArray;
                    break;
                case 'Update':
                    for (let currGame of gamesArray) {
                        if (currGame !== game) {
                            tempGamesArray.push(currGame);
                        } else {
                            isExist = true;;
                            continue;
                        }
                    }
                    gamesArray = tempGamesArray;
                    if (isExist) {
                        gamesArray.push(game);
                    }
                    break;
            }
        }
        index++;
        commandAction = input[index];
    }
    //print result
    console.log(gamesArray.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']




);