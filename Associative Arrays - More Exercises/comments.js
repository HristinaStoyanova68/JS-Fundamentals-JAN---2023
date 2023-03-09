function comments(input) {

    let articleList = {};
    let usersList = {};

    for (const line of input) {

        if (line.includes('user')) {
            userName = line.split(' ')[1];
            usersList[userName] = {};
        }
        if (line.includes('article')) {

            let article = line.split(' ')[1];
            articleList[article] = [];
        }
        if (line.includes(': ')) {
            let commentsInfo = line.split(': ');
            let currInfo = commentsInfo[0].split(' posts on ');
            let currUser = currInfo[0];
            let currArticle = currInfo[1];
            let comments = [commentsInfo[1]];

            if (usersList.hasOwnProperty(currUser) && articleList.hasOwnProperty(currArticle)) {
                articleList[currArticle].push({ [currUser]: comments })
            }
        }
    }

    let sortedArticles = Object.entries(articleList).sort((a, b) => b[1].length - a[1].length);

    for (const [article, commentsInfo] of sortedArticles) {
        console.log(`Comments on ${article}`);

        let sortedElements = commentsInfo.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
        for (const element of sortedElements) {
            let entries = Object.entries(element);
            let userName = entries[0][0];
            let commentsData = entries[0][1];

            let commentsDataAsArr = commentsData[0].split(', ');
            let title = commentsDataAsArr[0];
            let content = commentsDataAsArr[1];

            console.log(`--- From user ${userName}: ${title} - ${content}`);
        }
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
console.log('..............');
comments([
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
]);