export const REQ_STATUS = 'reqStatus/REQ_STATUS'
export type ReqStatusAction = {
    type: typeof REQ_STATUS
    payload: boolean
}

export const REQ_ERROR = 'reqStatus/REQ_ERROR'
export type ReqErrorAction = {
    type: typeof REQ_ERROR
    payload: boolean
}

export type ReqStatusActions =
    | ReqStatusAction
    | ReqErrorAction
