import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchOrganizationRepositoriesApi } from '../utils/api';
import {receiveOrganizationRepositoriesAction} from '../actions/github-repos';
import * as types from "../types/github-repos";
import {reqErrorAction, reqStatusAction} from "../actions/req-status";


export function* watchGetOrganizationRepositories() {
    yield takeEvery(types.FETCH_ORGANIZATION_REPOSITORIES, callGetOrganizationRepositories);
}

function* callGetOrganizationRepositories(action: types.ReceiveReposAction & types.FetchReposAction) {
    try {
        console.log(action, 'action')

        // @ts-ignore
        const response = yield call(fetchOrganizationRepositoriesApi, action.payload);
        yield put(reqStatusAction(true));
        yield put(receiveOrganizationRepositoriesAction(response.data));
        yield put(reqStatusAction(false));
    } catch(error) {
        yield put(reqErrorAction(true));
    }
}
