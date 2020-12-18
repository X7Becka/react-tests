import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchOrganizationRepositoriesApi } from '../utils/api';
import {fetchOrganizationRepositoriesAction, receiveOrganizationRepositoriesAction} from '../actions/github-repos';
import * as githubReposActions from '../actions/github-repos';


export function* watchGetOrganizationRepositories() {
    yield takeLatest(githubReposActions.FETCH_ORGANIZATION_REPOSITORIES, callGetOrganizationRepositories);
}
//@ts-ignore
function* callGetOrganizationRepositories(action) {
    try {
        const repos = action.payload;
        const response = yield call(fetchOrganizationRepositoriesApi, repos);
        yield put(receiveOrganizationRepositoriesAction(response.data));
    } catch(error) {
        // yield put(receiveMessageAction(error));
        console.log('err')
    }
}
