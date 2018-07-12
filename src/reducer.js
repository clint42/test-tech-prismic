import { READ_CLIENT_LOGS, RETRIEVE_CLIENTS_LIST } from './actionCreators/logs';

const initialState = {
    clientLogs: [],
    clientsList: [],
};

export function logs(state = initialState, action) {
    switch (action.type) {
        case READ_CLIENT_LOGS:
            return {
                ...state,
                clientLogs: action.data,
            };
        case RETRIEVE_CLIENTS_LIST:
            return {
                ...state,
                clientsList: action.data
            };
        default:
            return state;
    }
}
