import {combineReducers} from 'redux';

import githubReposReducer from './reducers/github-repos';
import {reqStatusReducer} from "./reducers/req-status";

const rootReducer = combineReducers({
    githubRepos: githubReposReducer,
    reqStatus: reqStatusReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer
