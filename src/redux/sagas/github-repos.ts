import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchOrganizationRepositoriesApi } from '../utils/api'
import {receiveOrganizationRepositoriesAction} from '../actions/github-repos'
import * as types from '../types/github-repos'
import {reqErrorAction, reqStatusAction} from '../actions/req-status'


export function* watchGetOrganizationRepositories() {
    yield takeEvery(types.FETCH_ORGANIZATION_REPOSITORIES, callGetOrganizationRepositories)
}

function* callGetOrganizationRepositories({payload}: types.FetchReposAction) {
    try {
        const response = yield call(fetchOrganizationRepositoriesApi, payload)
        yield put(reqStatusAction(true))
        yield put(receiveOrganizationRepositoriesAction(response.data))
        yield put(reqStatusAction(false))
    } catch(error) {
        console.log(error, 'error')
        yield put(reqErrorAction(true))
    }
}
