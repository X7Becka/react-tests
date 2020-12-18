import * as githubReposActions from '../actions/github-repos';
import {REDUCER_ACTION} from "../types/github-repos";

const initialState = {
    repositoryList: null
};

export function githubReposReducer(state = initialState, action: REDUCER_ACTION) {
    switch (action.type) {
        case githubReposActions.RECEIVE_ORGANIZATION_REPOSITORIES: {
            return {...state, repositoryList: action.payload};
        }
        default: return state;
    }
}
