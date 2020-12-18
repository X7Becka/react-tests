import {ACTIONS_REQ_ERROR, ACTIONS_REQ_STATUS} from "../types/req-status";

export const REQ_STATUS = 'REQ_STATUS';
export const REQ_ERROR = 'REQ_ERROR';

export function reqStatusAction(isFetching: ACTIONS_REQ_STATUS) {
    return {
        type: REQ_STATUS,
        payload: isFetching
    };
}

export function reqErrorAction(error: ACTIONS_REQ_ERROR) {
    return {
        type: REQ_ERROR,
        payload: error
    };
}
