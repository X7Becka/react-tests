import {GithubReposTItem, GithubReposTPagination} from '../types/github-repos'
import * as actions from './../types/github-repos'
import {Reducer} from 'redux'

export type GithubReposState = {
    readonly repositoryList?: Array<GithubReposTItem>
    readonly pagination?: GithubReposTPagination
}

const initialState: GithubReposState = {
    repositoryList: undefined,
    pagination: undefined
}

export const githubReposReducer: Reducer<GithubReposState, actions.GithubReposActions> = (state = initialState, action) => {
    switch (action.type) {
    case actions.RECEIVE_ORGANIZATION_REPOSITORIES: {
        return {...state, repositoryList: action.payload}
    }

    case actions.UPDATE_PAGINATION: {
        return {...state, pagination: action.payload}
    }
    default: return state
    }
}
