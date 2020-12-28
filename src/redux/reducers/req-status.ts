import * as actions from '../types/req-status'
import {Reducer} from 'redux'

export type ReqStatusState = {
    readonly isFetching: boolean,
    readonly error: boolean
}

const initialState: ReqStatusState = {
    isFetching: false,
    error: false
}

export const reqStatusReducer: Reducer<ReqStatusState, actions.ReqStatusActions> = (state = initialState, action) => {
    switch (action.type) {
    case actions.REQ_STATUS:
        return {...state, isFetching: action.payload}

    case actions.REQ_ERROR:
        return {...state, error: action.payload}

    default: return state
    }
}
