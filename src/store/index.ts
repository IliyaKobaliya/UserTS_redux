import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from "../redux/actions/Users";
import {rootReducer} from "../redux/reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);