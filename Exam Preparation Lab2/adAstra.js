function adAstra(input) {

    let pattern = /([\|#])(?<item>[a-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gi;

    class Food {
        constructor(item, date, calories) {
            this.item = item;
            this.date = date;
            this.calories = calories;

        }
        toString() {
            console.log(`Item: ${this.item}, Best before: ${this.date}, Nutrition: ${this.calories}`);
        }
    }

    let matched = input[0].match(pattern);
    let foodList = [];
    let totalCalories = 0;

    if (matched !== null) {

        for (const match of matched) {
            let tokens = match.split(/[\|#]/g);
            let item = tokens[1];
            let date = tokens[2];
            let calories = Number(tokens[3]);

            let food = new Food(item, date, calories);
            totalCalories += calories;
            foodList.push(food);
        }
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    if (foodList.length > 0) {

        for (const food of foodList) {
            food.toString();
        }
    }
}

adAstra([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

]);
console.log('...............');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('...........');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);