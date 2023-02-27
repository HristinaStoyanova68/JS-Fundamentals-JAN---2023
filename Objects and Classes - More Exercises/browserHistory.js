function browserHistory(object, actionArray) {

    for (let action of actionArray) {
        let info = action.split(' ');
        let currAction = info[0];
        let site = info[1];

        if (currAction === 'Open') {
            openSite(object, site);
        } else if (currAction === 'Close') {
            close(object, site);
        } else if (action === 'Clear History and Cache') {
            deleteObject(object, site);
        }
    }
    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

    function openSite(object, site) {
        object['Open Tabs'].push(site);
        browserLogs(object, 'Open ' + site);
    };
    function browserLogs(object, action) {
        object['Browser Logs'].push(action);
    };
    function close(object, site) {
        if (object['Open Tabs'].includes(site)) {
            let index = object['Open Tabs'].findIndex(x => x === site);
            let result = object['Open Tabs'].splice(index, 1);
            object['Recently Closed'].push(result[0]);
            browserLogs(object, 'Close ' + site);
        }
    };
    function deleteObject(object) {
        object['Open Tabs'] = [];
        object['Recently Closed'] = [];
        object['Browser Logs'] = [];
    };
}

// browserHistory({
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube",
//         "Open Yahoo",
//         "Open Google Translate",
//         "Close Yahoo",
//         "Open Gmail",
//         "Close Gmail",
//         "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]);
console.log('......................');
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail",
        "Close Gmail",
        "Open Dropbox",
        "Open YouTube",
        "Close Dropbox"]
},

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);