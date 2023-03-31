function sinoTheWalker(input) {

    let leavingTime = input.shift().split(':');
    let initialHours = Number(leavingTime[0]);
    let initialMinutes = Number(leavingTime[1]);
    let initialSeconds = Number(leavingTime[2]);

    let allSeconds = initialHours * 60 * 60 + initialMinutes * 60 + initialSeconds;
    let steps = Number(input[0]);
    let secPerStep = Number(input[1]);

    let travelingSeconds = steps * secPerStep;
    let totalSeconds = allSeconds + travelingSeconds;
    let takenSeconds = 0;
    let secPerDay = 60 * 60 * 24

    if (totalSeconds  > secPerDay)  {
        let days = Math.trunc(totalSeconds / secPerDay);
        takenSeconds = days * secPerDay;
        totalSeconds -= takenSeconds;
    }

    let sec = totalSeconds % 60;
    let totalMin = Math.trunc(totalSeconds / 60);
    let min = totalMin % 60;
    let totalHours = Math.trunc(totalMin / 60);
    let hour = totalHours % 24;
    
    if (hour < 10 || min < 10 || sec < 10) {
        hour = hour.toString().padStart(2, '0');
        min = min.toString().padStart(2, '0');
        sec = sec.toString().padStart(2, '0');
    }

    console.log(`Time Arrival: ${hour}:${min}:${sec}`);
}

sinoTheWalker(['23:49:13',
    '5424',
    '2']);
console.log('...........');
sinoTheWalker(['12:30:30',
    '90',
    '1']);
    console.log('............');
    sinoTheWalker(['23:59:59',
    '2147483647',
    '2147483647']);