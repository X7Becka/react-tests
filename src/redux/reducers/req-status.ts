import * as actions from '../types/req-status'
import {Reducer} from 'redux'

export type ReqStatusState = {
    readonly state: 'complete' | 'loading' | 'error',
}

const initialState: ReqStatusState = {
    state: 'complete'
}

export const reqStatusReducer: Reducer<ReqStatusState, actions.ReqStatusActions> = (state = initialState, action) => {
    switch (action.type) {
    case actions.REQ_STATUS:
        return {...state, state: action.payload}

    default: return state
    }
}
