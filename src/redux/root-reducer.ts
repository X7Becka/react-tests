import {combineReducers} from 'redux'

import {githubReposReducer, GithubReposState} from './reducers/github-repos'
import {reqStatusReducer, ReqStatusState} from './reducers/req-status'
import {itunesReducer, ItunesState} from './reducers/itunes'

export const rootReducer = combineReducers<RootState>({
    githubRepos: githubReposReducer,
    reqStatus: reqStatusReducer,
    itunes: itunesReducer
})


// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
    githubRepos: GithubReposState
    reqStatus: ReqStatusState,
    itunes: ItunesState
}


// type kek<T> = T extends CombinedState<infer R> ? R : never
//
// export type State = kek<RootState>
