import {call, put} from 'redux-saga/effects'
import {ACTIONS_GET_ORGANIZATION_REPOSITORIES} from "../types/github-repos";
import {fetchOrganizationRepositoriesApi} from "../utils/api";

export const FETCH_ORGANIZATION_REPOSITORIES = "FETCH_ORGANIZATION_REPOSITORIES";
export const RECEIVE_ORGANIZATION_REPOSITORIES = "RECEIVE_ORGANIZATION_REPOSITORIES";

export function fetchOrganizationRepositoriesAction(organization: ACTIONS_GET_ORGANIZATION_REPOSITORIES) {
    return {
        type: FETCH_ORGANIZATION_REPOSITORIES,
        payload: organization
    }
}

export function receiveOrganizationRepositoriesAction(repos: ACTIONS_GET_ORGANIZATION_REPOSITORIES) {
    return {
        type: RECEIVE_ORGANIZATION_REPOSITORIES,
        payload: repos
    }
}
