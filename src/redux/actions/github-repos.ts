import {call, put} from 'redux-saga/effects'
import {ACTIONS_GET_ORGANIZATION_REPOSITORIES, RepoItemType} from "../types/github-repos";
import {fetchOrganizationRepositoriesApi} from "../utils/api";
import * as actions from "../types/github-repos";

// export const FETCH_ORGANIZATION_REPOSITORIES = "FETCH_ORGANIZATION_REPOSITORIES";
// export const RECEIVE_ORGANIZATION_REPOSITORIES = "RECEIVE_ORGANIZATION_REPOSITORIES";

export function fetchOrganizationRepositoriesAction(organization: string): actions.FetchReposAction {
    return {
        type: actions.FETCH_ORGANIZATION_REPOSITORIES,
        payload: organization
    }
}

export function receiveOrganizationRepositoriesAction(repos: Array<RepoItemType>): actions.ReceiveReposAction {
    return {
        type: actions.RECEIVE_ORGANIZATION_REPOSITORIES,
        payload: repos
    }
}
