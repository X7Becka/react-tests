import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchOrganizationRepositoriesApi} from '../utils/api'
import {receiveOrganizationRepositoriesAction} from '../actions/github-repos'
import * as types from '../types/github-repos'
import {reqStatusAction} from '../actions/req-status'


export function* watchGetOrganizationRepositories() {
    yield takeEvery(types.FETCH_ORGANIZATION_REPOSITORIES, callGetOrganizationRepositories)
}

function* callGetOrganizationRepositories({payload}: types.FetchReposAction) {
    try {
        yield put(reqStatusAction('loading'))
        const response = yield call(fetchOrganizationRepositoriesApi, payload)
        yield put(receiveOrganizationRepositoriesAction(response.data))
        yield put(reqStatusAction('complete'))
    } catch(error) {
        console.log(error, 'error')
        yield put(reqStatusAction('error'))
        yield put(receiveOrganizationRepositoriesAction([]))
    }
}
