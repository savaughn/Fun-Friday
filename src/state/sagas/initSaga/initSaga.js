import React from 'react';
import { AsyncStorage } from 'react-native';
import { takeLatest, call, put } from 'redux-saga/effects';
import { INITIALIZE_APP, INITIALIZE_APP_FAILURE, RESTORE_FROM_ASYNC } from '../../ActionTypes';
import {navigateTo} from "../../../navigator/navigateTo";

function* sagaWatcher() {
  yield takeLatest(INITIALIZE_APP, saga);
}

function* saga() {
    console.log('init');
    try {
        const currentFavList = yield call(getCurrentFavList);
        const pastFavList = yield call(getSavedFavList);
        yield put({ type: RESTORE_FROM_ASYNC, payload: { favArray: currentFavList, favList: pastFavList }});
        navigateTo('homeScreen');
    } catch (err) {
        console.log(err);
        yield put({ type: INITIALIZE_APP_FAILURE });
    }

}

async function getCurrentFavList() {
    return JSON.parse(await AsyncStorage.getItem('favorites')) || [];
}

async function getSavedFavList() {
    return JSON.parse(await AsyncStorage.getItem('favList')) || [];
}

module.exports = {
  sagaWatcher,
};
