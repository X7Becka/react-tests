import {call, put, takeEvery} from 'redux-saga/effects'
import {getProductsApi} from '../utils/api'
import {storeProductsAction} from '../actions/itunes'
import * as types from '../types/itunes'
import {reqStatusAction} from '../actions/req-status'

export function* watchItunesSaga() {
    yield takeEvery(types.FETCH_PRODUCTS, callGetProducts)
}

function* callGetProducts({payload}: types.FetchProductsTAction) {
    try {
        yield put(storeProductsAction(null))
        yield put(reqStatusAction('loading'))
        const response = yield call(getProductsApi, payload.productName, payload.page)
        yield put(reqStatusAction('complete'))
        yield put(storeProductsAction(response.data))
    } catch(error) {
        yield put(reqStatusAction('error'))
    }
}
