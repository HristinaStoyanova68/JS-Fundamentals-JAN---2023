function solve(num, groupType, day) {
    let price = 0;
    let total = 0;
    switch (groupType) {
        case "Students":
            if (day === "Friday") {
                price = 8.45;
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46;
            }
            total = num * price;
            if (num >= 30) {
                total = total * 0.85;
            }
            break;
        case "Business":
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }
            total = num * price;
            if (num >= 100) {
                total = (num - 10) * price;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = 15;
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50;
            }
            total = num * price;
            if (num >= 10 && num <= 20) {
                total = total * 0.95;
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

solve(40,
    "Regular",
    "Saturday"

)