import { all } from 'redux-saga/effects';
import jokeSaga from './jokeSaga/jokeSaga';
import historySaga from './historySaga/historySaga';
import triviaSaga from './triviaSaga/triviaSaga';

export default function* rootSaga() {
  yield all([
    jokeSaga.sagaWatcher(),
    historySaga.sagaWatcher(),
    triviaSaga.sagaWatcher(),
  ]);
}
