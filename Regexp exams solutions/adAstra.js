function adAstra(input) {

    let pattern = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let matched = pattern.exec(input[0]);
    let itemsList = [];
    let caloriesSum = 0;

    while (matched !== null) {

        caloriesSum += Number(matched.groups['calories']);
        itemsList.push(`Item: ${matched.groups['item']}, Best before: ${matched.groups['date']}, Nutrition: ${matched.groups['calories']}`);
        matched = pattern.exec(input[0]);
    }

    console.log(`You have food to last you for: ${Math.floor(caloriesSum / 2000)} days!`);
    console.log(itemsList.join('\n'));
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('................');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('...........');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);

