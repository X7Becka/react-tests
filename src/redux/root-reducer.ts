import {combineReducers} from 'redux';

import {githubReposReducer} from './reducers/github-repos';


export const rootReducer = combineReducers({
    githubRepos: githubReposReducer,
});
