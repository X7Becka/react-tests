import * as reqStatusAction from '../actions/req-status';
import {REDUCER_ACTION} from "../types/req-status";

const initialState = {
    isFetching: false,
    error: false
};

export function reqStatusReducer(state = initialState, action: REDUCER_ACTION) {
    switch (action.type) {
        case reqStatusAction.REQ_STATUS:
            return {...state, isFetching: action.payload};

        case reqStatusAction.REQ_ERROR:
            return {...state, error: action.payload};

        default:
            return state;
    }
}
