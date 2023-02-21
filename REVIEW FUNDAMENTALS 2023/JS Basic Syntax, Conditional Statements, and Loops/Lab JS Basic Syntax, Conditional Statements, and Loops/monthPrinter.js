function monthPrinter(num) {
    if (num >= 1 && num <= 12) {

        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'];

            console.log(months[num - 1]);
    } else {
        console.log('Error!');
    }

}

monthPrinter(1);
monthPrinter(5);
monthPrinter(14);