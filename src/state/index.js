import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducers from './reducers/index';
import rootSaga from './sagas/root.saga';

export function getStore () {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(AppReducers.rootReducer, {}, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
