import {CombinedState, combineReducers} from 'redux';

import {githubReposReducer} from './reducers/github-repos';
import {reqStatusReducer} from "./reducers/req-status";

export const rootReducer = combineReducers({
    githubRepos: githubReposReducer,
    reqStatus: reqStatusReducer,
})

type State = ReturnType<typeof rootReducer>;

type kek<T> = T extends CombinedState<infer R> ? R : never

export type RootState = kek<State>
