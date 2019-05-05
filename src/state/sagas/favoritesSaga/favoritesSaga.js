import React from 'react';
import { call, takeLatest, put } from 'redux-saga/effects';
import { SAVE_TO_FAVORITES, SAVE_TO_FAVORITES_SUCCESS, SAVE_TO_FAVORITES_FAILURE } from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(SAVE_TO_FAVORITES, saga);
}

function* saga({ payload }) {
    console.log('fav pay', payload);
    try {
        const favArray = yield call(saveItemToArray, payload);
        yield put({ type: SAVE_TO_FAVORITES_SUCCESS, favArray });
    } catch (err) {
        yield put({ type: SAVE_TO_FAVORITES_FAILURE });
    }
}

function saveItemToArray(payload) {
    payload.favArray.push({
        id: payload.item.id,
        text: `${payload.item.setup}\n${payload.item.punchline}`,
    });
    return payload.favArray;
}

module.exports = {
  sagaWatcher,
};
