import React from 'react';
import { call, takeLatest, put } from 'redux-saga/effects';
import { SAVE_TO_FAVORITES, SAVE_TO_FAVORITES_SUCCESS, SAVE_TO_FAVORITES_FAILURE } from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(SAVE_TO_FAVORITES, saga);
}

function* saga({ payload }) {
    console.log('saga', payload);
    try {
        const favArray = yield call(createFavoritesArray, payload);
        console.log('fafafaf', favArray);
        yield put({ type: SAVE_TO_FAVORITES_SUCCESS, favArray });
    } catch (err) {
        yield put({ type: SAVE_TO_FAVORITES_FAILURE });
    }
}

function createFavoritesArray(payload) {
    console.log('gggg', payload);
    const tmp = [];
    tmp.push({
        id: payload.id,
        text: `${payload.setup}\n${payload.punchline}`,
    });
    return tmp;
}

module.exports = {
  sagaWatcher,
};
