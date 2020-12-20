import {RepoItemType} from "../types/github-repos";
import {combineReducers} from "redux";
import * as actions from './../types/github-repos';
import {ActionType} from "typesafe-actions";
import {GithubRepos} from "../../pages/github-repos/github-repos";

// type GithubReposAction = ActionType<typeof actions>;



export interface GithubReposState {
    repositoryList: Array<RepoItemType>
}

const initialState: GithubReposState = {
    repositoryList: []
}

export default function githubReposReducer(state: GithubReposState = initialState, action: actions.ReceiveReposAction): GithubReposState {
    switch (action.type) {
        case actions.RECEIVE_ORGANIZATION_REPOSITORIES: {
            return {...state, repositoryList: action.payload};
        }
        default: return state;
    }
}
