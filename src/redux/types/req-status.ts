export type REDUCER_ACTION = {
    payload: boolean;
    type: string;
}

export type ACTIONS_REQ_STATUS = boolean
export type ACTIONS_REQ_ERROR = boolean

export type TProps = {
    reqStatus: {
        isFetching: boolean;
        error: boolean
    }
}
