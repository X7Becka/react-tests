import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchOrganizationRepositoriesApi} from '../utils/api'
import {receiveOrganizationRepositoriesAction, updatePaginationAction} from '../actions/github-repos'
import * as types from '../types/github-repos'
import {reqStatusAction} from '../actions/req-status'
import {githubAPIv3PaginationParser} from '../../utils/utils'

export function* watchGetOrganizationRepositories() {
    yield takeEvery(types.FETCH_ORGANIZATION_REPOSITORIES, callGetOrganizationRepositories)
}

function* callGetOrganizationRepositories({payload}: types.FetchReposAction) {
    try {
        yield put(reqStatusAction('loading'))
        const response = yield call(fetchOrganizationRepositoriesApi, payload.organization, payload.page)
        yield put(updatePaginationAction(githubAPIv3PaginationParser(response.headers.link)))
        yield put(receiveOrganizationRepositoriesAction(response.data))
        yield put(reqStatusAction('complete'))
    } catch(error) {
        console.log(error, 'error')
        yield put(reqStatusAction('error'))
        yield put(updatePaginationAction(undefined))
        yield put(receiveOrganizationRepositoriesAction([]))
    }
}
