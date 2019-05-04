import { all } from 'redux-saga/effects';
import randomJoke from './randomJoke/randomJokeSaga';
import dateHistory from './dateHistory/dateHistorySaga';

export default function* rootSaga() {
  yield all([
    randomJoke.sagaWatcher(),
    dateHistory.sagaWatcher(),
  ]);
}
