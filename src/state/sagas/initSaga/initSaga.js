import React from 'react';
import { AsyncStorage } from 'react-native';
import { takeLatest, call, put } from 'redux-saga/effects';
import { INITIALIZE_APP, INITIALIZE_APP_FAILURE, SAVE_TO_FAVORITES_SUCCESS } from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(INITIALIZE_APP, saga);
}

function* saga() {
    console.log('initializing');
    try {
        const favArray = yield call(initApp);
        console.log(favArray);
        yield put({ type: SAVE_TO_FAVORITES_SUCCESS, favArray });
    } catch (err) {
        console.log(err);
        yield put({ type: INITIALIZE_APP_FAILURE });
    }

}

async function initApp() {
    return JSON.parse(await AsyncStorage.getItem('favorites'));
}

module.exports = {
  sagaWatcher,
};
