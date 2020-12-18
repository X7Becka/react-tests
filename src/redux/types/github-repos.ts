export type REDUCER_ACTION = {
    payload: object;
    type: string;
}

export type ACTIONS_GET_ORGANIZATION_REPOSITORIES = string

export type WITH_GITHUB_REPOS_TPROPS = {
    fetchOrganizationRepositories: Function
}
