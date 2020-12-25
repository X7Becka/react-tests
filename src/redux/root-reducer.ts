import {CombinedState, combineReducers} from 'redux';

import {githubReposReducer, GithubReposState} from './reducers/github-repos';
import {reqStatusReducer, ReqStatusState} from "./reducers/req-status";

export const rootReducer = combineReducers<RootState>({
    githubRepos: githubReposReducer,
    reqStatus: reqStatusReducer,
})


// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
    githubRepos: GithubReposState
    reqStatus: ReqStatusState
}


// type kek<T> = T extends CombinedState<infer R> ? R : never
//
// export type State = kek<RootState>
