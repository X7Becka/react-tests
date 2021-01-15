import {all, call} from 'redux-saga/effects'
import {watchGithubReposSaga} from './sagas/github-repos'
import {watchItunesSaga} from './sagas/itunes'

export default function* rootSaga() {
    yield all([
        call(watchGithubReposSaga),
        call(watchItunesSaga)
    ])
}
