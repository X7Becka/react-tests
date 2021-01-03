import * as actions from '../types/req-status'

export function reqStatusAction(state: actions.ReqStatusAction['payload']): actions.ReqStatusAction {
    return {
        type: actions.REQ_STATUS,
        payload: state
    }
}
