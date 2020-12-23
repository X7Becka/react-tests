import * as actions from "../types/req-status"

export function reqStatusAction(isFetching: actions.ReqStatusAction['payload']): actions.ReqStatusAction {
    return {
        type: actions.REQ_STATUS,
        payload: isFetching
    };
}

export function reqErrorAction(error: actions.ReqErrorAction['payload']): actions.ReqErrorAction {
    return {
        type: actions.REQ_ERROR,
        payload: error
    };
}
