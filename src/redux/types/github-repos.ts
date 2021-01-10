export const FETCH_ORGANIZATION_REPOSITORIES = 'githubRepos/FETCH_ORGANIZATION_REPOSITORIES'
export type FetchReposAction = {
    type: typeof FETCH_ORGANIZATION_REPOSITORIES
    payload: {
        organization: string
        page: number
    }
}

export const RECEIVE_ORGANIZATION_REPOSITORIES = 'githubRepos/RECEIVE_ORGANIZATION_REPOSITORIES'
export type ReceiveReposAction = {
    type: typeof RECEIVE_ORGANIZATION_REPOSITORIES
    payload: Array<GithubReposTItem>
}

export const UPDATE_PAGINATION = 'githubRepos/UPDATE_PAGINATION'
export type UpdatePaginationAction = {
    type: typeof UPDATE_PAGINATION
    payload?: GithubReposTPagination
}

export type GithubReposActions =
    | FetchReposAction
    | ReceiveReposAction
    | UpdatePaginationAction



export type GithubReposTItem = {
    id: number
    name: string
    git_url: string
    forks: number
    watchers: number
    stargazers_count: number
    url: string
    svn_url: string
}

export type GithubReposTPagination <URL = string, NUM = number> = {
    last: {
        url: URL
        num: NUM
    }
    next?: {
        url: URL
        num: NUM
    }
    prev?: {
        url: URL
        num: NUM
    }
}
