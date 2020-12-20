export const FETCH_ORGANIZATION_REPOSITORIES = "githubRepos/FETCH_ORGANIZATION_REPOSITORIES"
export interface FetchReposAction {
    type: typeof FETCH_ORGANIZATION_REPOSITORIES
    payload: string
}

export const RECEIVE_ORGANIZATION_REPOSITORIES = "githubRepos/RECEIVE_ORGANIZATION_REPOSITORIES"
export interface ReceiveReposAction {
    type: typeof RECEIVE_ORGANIZATION_REPOSITORIES
    payload: Array<RepoItemType>
}

export type GithubReposAction =
    | FetchReposAction
    | ReceiveReposAction

export type InitialStateGithubReposType = {
    repositoryList: object[] | []
}

// interface FETCH_ORGANIZATION_REPOSITORIES {
//     type: string
//     payload: string
// }
//
// interface RECEIVE_ORGANIZATION_REPOSITORIES {
//     type: string
//     payload: Array<RepoItemType>
// }

// export type GithubReposActionType = FETCH_ORGANIZATION_REPOSITORIES | RECEIVE_ORGANIZATION_REPOSITORIES

export type ACTIONS_GET_ORGANIZATION_REPOSITORIES = string

export interface withGithubReposTProps {
    fetchOrganizationRepositories: (organization?: string) => void,
    githubRepos: repositoryListType
}

export type githubReposTProps = {
    githubRepos: repositoryListType
}

export type repositoryListType = {
    repositoryList: Array<RepoItemType>
}

export type RepoItemType = {
    id: number;
    name: string;
    git_url: string;
    forks: number;
    watchers: number;
    stargazers_count: number;
}
