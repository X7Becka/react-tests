export const FETCH_ORGANIZATION_REPOSITORIES = 'githubRepos/FETCH_ORGANIZATION_REPOSITORIES'
export type FetchReposAction = {
    type: typeof FETCH_ORGANIZATION_REPOSITORIES
    payload: string
}

export const RECEIVE_ORGANIZATION_REPOSITORIES = 'githubRepos/RECEIVE_ORGANIZATION_REPOSITORIES'
export type ReceiveReposAction = {
    type: typeof RECEIVE_ORGANIZATION_REPOSITORIES
    payload: Array<RepoItemType>
}

export type GithubReposActions =
    | FetchReposAction
    | ReceiveReposAction



export type RepoItemType = {
    id: number;
    name: string;
    git_url: string;
    forks: number;
    watchers: number;
    stargazers_count: number;
}
