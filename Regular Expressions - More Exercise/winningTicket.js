function winningTicket(input) {

    let inputData = input.split(/\s*\s*/g).join('').split(',').join(' ');

    let pattern = /(\@{6,10}|\#{6,10}|\${6,10}|\^{6,10})/g;

    let ticketsArray = inputData.split(' ');

    for (const ticket of ticketsArray) {

        if (ticket.length !== 20) {

            console.log('invalid ticket');
        } else {

            let leftSide = ticket.toString().substring(0, ticket.length / 2).match(pattern);
            let rightSide = ticket.toString().substring(ticket.length / 2).match(pattern);

            if (leftSide === null || rightSide === null) {

                console.log(`ticket "${ticket}" - no match`);
            }
            if (leftSide !== null && rightSide !== null) {

                leftSide = leftSide.toString();
                rightSide = rightSide.toString();

                if (leftSide.length === 10 && rightSide.length === 10) {

                    console.log(`ticket "${ticket}" - ${leftSide.length}${leftSide[0]} Jackpot!`);

                } else if (leftSide[0] === rightSide[0]) {

                    if (leftSide < rightSide) {

                        console.log(`ticket "${ticket}" - ${leftSide.length}${leftSide[0]}`);

                    } else if (rightSide < leftSide) {

                        console.log(`ticket "${ticket}" - ${rightSide.length}${rightSide[0]}`);

                    } else if (leftSide === rightSide) {

                        console.log(`ticket "${ticket}" - ${leftSide.length}${leftSide[0]}`);
                    }
                } else {

                    console.log('invalid ticket');
                }
            }
        }
    }
}

// winningTicket('Cash$$$$$$Ca$$$$$$sh');
// console.log('....................');
// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
// console.log('....................');
// winningTicket('validticketnomatch:(');
winningTicket('C$$$$$$$$$Ca$$$$$$sh');
