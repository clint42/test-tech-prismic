import moment from 'moment';

export async function findClientLogsInAllLogs(logs, clientHost) {
    console.log(clientHost);
    return logs.filter((entry) => (entry.http_host === clientHost));
}

export async function retrieveClientList(logs) {
    var clientsList = [];
    await logs.forEach((entry) => {
        if (clientsList.indexOf(entry.http_host) === -1) {
            clientsList.push(entry.http_host);
        }
    });
    return clientsList;
}

export function chartData(data) {
    var labels = [];
    var dataDisplay = [];
    var countInvalid = 0;
    
    if (data.length > 0) {
        var currentHour = moment(data[0]["@timestamp"]);
        var groupedData = [{
            label: currentHour.format('DD/MM HH:mm:ss'),
            bytes: 0,
        }];
        var currentGroupedDataIdx = 0;
        data.forEach(entry => {
            const entryTime = moment(entry["@timestamp"]);

            if (entryTime.diff(currentHour, 'hours') < 24) {
                const currentData = groupedData[currentGroupedDataIdx];

                groupedData[currentGroupedDataIdx] = {
                    ...currentData,
                    bytes: parseInt(entry.bytes) + currentData.bytes,
                }
            } else if (entryTime.diff(currentHour, 'hours') >= 24) {
                groupedData.push({
                    label: entryTime.format(),
                    bytes: parseInt(entry.bytes),
                });
                currentHour = entryTime;
                ++currentGroupedDataIdx;
            } else {
                ++countInvalid;
            }
        });
        console.log(`Invalid: ${countInvalid}`);
        console.log(groupedData);
        labels = Array.from(groupedData, entry => entry.label);
        dataDisplay = Array.from(groupedData, entry => entry.bytes);
    }

    return {
        labels: labels,
        datasets: [
            {
                label: 'Consumption',
                fillColor: 'rgba(220,220,220,0.2)',
                strokeColor: 'rgba(220,220,220,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: dataDisplay,
            },
        ]
    }
}
