import { retrieveClientList, findClientLogsInAllLogs } from '../utils/dataProcessing';

import logsData from '../assets/logs.json'

export const READ_CLIENT_LOGS = 'READ_CLIENT_LOGS';
export const RETRIEVE_CLIENTS_LIST = 'RETRIEVE_CLIENTS_LIST';

export const readClientLogs = (clientId) => async (dispatch) => {
    try {
        const clientLogs = await findClientLogsInAllLogs(logsData, clientId);
        console.log(clientLogs);
        dispatch({
            type: READ_CLIENT_LOGS,
            data: clientLogs,
        })
    } catch (e) {
        console.error(e);
    }
}

export const retrieveClientsList = () => (async (dispatch) => {
    try {
        const clientsList = await retrieveClientList(logsData);

        dispatch({
            type: RETRIEVE_CLIENTS_LIST,
            data: clientsList,
        })
    } catch (e) {
        console.log(e);
    }
})