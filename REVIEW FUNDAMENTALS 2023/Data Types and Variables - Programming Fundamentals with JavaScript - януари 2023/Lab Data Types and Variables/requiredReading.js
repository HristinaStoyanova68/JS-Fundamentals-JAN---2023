function requiredReading(numOfPages, pagesPerHour, days) {

    let requiredHoursPerDay = numOfPages /pagesPerHour / days;
    console.log(requiredHoursPerDay);
}

requiredReading(212, 20, 2);
console.log('..............');
requiredReading(432, 15, 4);
