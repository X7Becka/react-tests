import * as actions from '../types/github-repos'

export function fetchOrganizationRepositoriesAction<P extends actions.FetchReposAction['payload']>(organization: P['organization'], page: P['page']): actions.FetchReposAction {
    return {
        type: actions.FETCH_ORGANIZATION_REPOSITORIES,
        payload: {
            organization,
            page
        }
    }
}

export function receiveOrganizationRepositoriesAction(repos: actions.ReceiveReposAction['payload']): actions.ReceiveReposAction {
    return {
        type: actions.RECEIVE_ORGANIZATION_REPOSITORIES,
        payload: repos
    }
}

export function updatePaginationAction(pagination: actions.UpdatePaginationAction['payload']): actions.UpdatePaginationAction {
    return {
        type: actions.UPDATE_PAGINATION,
        payload: pagination
    }
}
