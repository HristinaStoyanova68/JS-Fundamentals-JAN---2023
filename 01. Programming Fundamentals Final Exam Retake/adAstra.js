function adAstra(input) {

    let pattern = /([#\|]{1})(?<itemName>[a-zA-z ]+)\1(?<dateInfo>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d]{1,5})\1/g;

    let totalcalories = 0;
    let itemsAsArr = [];

    let validItems = input[0].match(pattern);

    if (validItems !== null) {
        for (const line of validItems) {
            let delimeterPattern = /[#\|]{1}/g;
            let productInfo = line.split(delimeterPattern);

            itemsAsArr.push([productInfo[1], productInfo[2], productInfo[3]]);
            totalcalories += Number(productInfo[3]);
        }
    }
    let days = Math.floor(totalcalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (const line of itemsAsArr) {

        console.log(`Item: ${line[0]}, Best before: ${line[1]}, Nutrition: ${line[2]}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
);
console.log('.............');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('............');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);