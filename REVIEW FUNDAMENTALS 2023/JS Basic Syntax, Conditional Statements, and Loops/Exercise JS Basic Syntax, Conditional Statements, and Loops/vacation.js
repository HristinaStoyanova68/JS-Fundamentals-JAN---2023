function vacation(groupCount, typeGroup, day) {
    // `Total price: {price}`
    let totalPrice = 0;

    switch (typeGroup) {
        case 'Students':
            if (day === 'Friday') {
                totalPrice = groupCount * 8.45;
            } else if (day === 'Saturday') {
                totalPrice = groupCount * 9.80;
            } else if (day === 'Sunday') {
                totalPrice = groupCount * 10.46;
            }
            if (groupCount >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case 'Business':
            if (groupCount >= 100) {
                groupCount -= 10;
            }
            if (day === 'Friday') {
                totalPrice = groupCount * 10.90;
            } else if (day === 'Saturday') {
                totalPrice = groupCount * 15.60;
            } else if (day === 'Sunday') {
                totalPrice = groupCount * 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                totalPrice = groupCount * 15;
            } else if (day === 'Saturday') {
                totalPrice = groupCount * 20;
            } else if (day === 'Sunday') {
                totalPrice = groupCount * 22.50;
            }
            if (groupCount >= 10 && groupCount <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
