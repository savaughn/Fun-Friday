import React from 'react';
import { call, takeLatest, put } from 'redux-saga/effects';
import _ from 'lodash';
import {
    SAVE_TO_FAVORITES,
    SAVE_TO_FAVORITES_SUCCESS,
    SAVE_TO_FAVORITES_FAILURE,
    REMOVE_FROM_FAVORITES,
    REMOVE_FROM_FAVORITES_SUCCESS,
    REMOVE_FROM_FAVORITES_FAILURE,
} from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(SAVE_TO_FAVORITES, saveItem);
  yield takeLatest(REMOVE_FROM_FAVORITES, deleteItem)
}

function* deleteItem({ payload }) {
    try {
        const favArray = yield call(removeItemFromArray, payload);
        yield put({ type: REMOVE_FROM_FAVORITES_SUCCESS, favArray});
    } catch (err) {
        yield put({ type: REMOVE_FROM_FAVORITES_FAILURE });
    }
}

function removeItemFromArray(payload) {
    console.log('del', payload);
    _.remove(payload.favArray, function(itemInArray) {
        return itemInArray === payload.item;
    });
}

function* saveItem({ payload }) {
    console.log('saga', payload);
    try {
        const favArray = yield call(saveItemToArray, payload);
        console.log('done', favArray);
        yield put({ type: SAVE_TO_FAVORITES_SUCCESS, favArray });
    } catch (err) {
        console.log('fail');
        yield put({ type: SAVE_TO_FAVORITES_FAILURE });
    }
}

function saveItemToArray(payload) {
    console.log('payload', payload);
    const type = payload.item.type;
    switch(type) {
        case 'history': {
            payload.favArray.push({
                id: payload.item.id,
                text: `${payload.item.year}: ${payload.item.text}\n`,
            });
            break;
        }
        case 'trivia': {
            payload.favArray.push({
                id: payload.item.id,
                text: `${payload.item.category}: ${payload.item.question}\nCorrect Answer:${payload.item.correctAnswer}\nMultiple Choice: ${payload.item.multipleChoice}`,
            });
            break;
        }
        default: {
            payload.favArray.push({
                id: payload.item.id,
                text: `${payload.item.setup}\n${payload.item.punchline}`,
            });
        }
    }
    return payload.favArray;
}

module.exports = {
  sagaWatcher,
};
