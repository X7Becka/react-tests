import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga)
