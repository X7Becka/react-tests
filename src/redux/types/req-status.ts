export type REDUCER_ACTION = {
    payload: boolean;
    type: string;
}

export type ACTIONS_REQ_STATUS = string
export type ACTIONS_REQ_ERROR = string

export type TProps = {
    reqStatus: {
        isFetching: boolean;
        error: boolean
    }
}
