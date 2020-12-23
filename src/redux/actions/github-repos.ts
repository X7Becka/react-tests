import * as actions from "../types/github-repos";

export function fetchOrganizationRepositoriesAction(organization: actions.FetchReposAction['payload']): actions.FetchReposAction {
    return {
        type: actions.FETCH_ORGANIZATION_REPOSITORIES,
        payload: organization
    }
}

export function receiveOrganizationRepositoriesAction(repos: actions.ReceiveReposAction['payload']): actions.ReceiveReposAction {
    return {
        type: actions.RECEIVE_ORGANIZATION_REPOSITORIES,
        payload: repos
    }
}
