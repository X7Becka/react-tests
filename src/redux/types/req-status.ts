export const REQ_STATUS = 'reqStatus/REQ_STATUS'
export type ReqStatusAction = {
    type: typeof REQ_STATUS
    payload: 'complete' | 'loading' | 'error'
}

export type ReqStatusActions =
    | ReqStatusAction
