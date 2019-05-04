import { all } from 'redux-saga/effects';
import randomJoke from './randomJoke/randomJokeSaga';

export default function* rootSaga() {
  yield all([
    randomJoke.sagaWatcher(),
  ]);
}
