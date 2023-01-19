function requiredReading(pagesOfBook, pagesPerHour, requiredDays) {
    let allNeededHours = pagesOfBook / pagesPerHour;
    let neededHoursPerDay = allNeededHours / requiredDays;

    console.log(neededHoursPerDay);

}

requiredReading(432,

    15,

    4);