import {RepoItemType} from "../types/github-repos";
import * as actions from './../types/github-repos';
import {Reducer} from "redux";



export type GithubReposState = {
    readonly repositoryList: Array<RepoItemType>
}

const initialState: GithubReposState = {
    repositoryList: []
}

export const githubReposReducer: Reducer<GithubReposState, actions.GithubReposActions> = (state = initialState, action) => {
    switch (action.type) {
        case actions.RECEIVE_ORGANIZATION_REPOSITORIES: {
            return {...state, repositoryList: action.payload};
        }
        default: return state;
    }
}

