function loadingBar(num) {

    function fullLoadingBar(num) {

        let fullLoadingBar = '';
        let barLength = 100 / 10;
        let elemForLoading = '%';

        for (let i = 1; i <= barLength; i++) {
            let currElem = i;
            let countOfStartElem = num / 10;
            if (currElem <= countOfStartElem) {
                fullLoadingBar += elemForLoading;
            } else {
                fullLoadingBar += '.';
            }
        }

        return `${fullLoadingBar}`;
    }
    if (num < 100) {

        return `${num}% [${fullLoadingBar(num)}] Still loading...`;

    } else {
        return `100% Complete! [${fullLoadingBar(num)}]`;
    }

}

console.log(loadingBar(50));