import React from 'react';
import { AsyncStorage } from 'react-native';
import { call, takeLatest, put } from 'redux-saga/effects';
import _ from 'lodash';
import {
    SAVE_TO_FAVORITES,
    SAVE_TO_FAVORITES_SUCCESS,
    SAVE_TO_FAVORITES_FAILURE,
    REMOVE_FROM_FAVORITES,
    REMOVE_FROM_FAVORITES_SUCCESS,
    REMOVE_FROM_FAVORITES_FAILURE,
    SAVE_TO_FAVORITES_LIST,
    SAVE_TO_FAVORITES_LIST_SUCCESS,
    SAVE_TO_FAVORITES_LIST_FAILURE,
} from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(SAVE_TO_FAVORITES, saveItem);
  yield takeLatest(REMOVE_FROM_FAVORITES, deleteItem);
  yield takeLatest(SAVE_TO_FAVORITES_LIST, saveItem);
}

function* deleteItem({ payload, type }) {
    try {
        const favArray = yield call(removeItemFromArray, payload);
        yield storeData(type, favArray);
        yield put({ type: REMOVE_FROM_FAVORITES_SUCCESS, favArray});
    } catch (err) {
        yield put({ type: REMOVE_FROM_FAVORITES_FAILURE });
    }
}

storeData = async (type, data) => {
    const key = type === 'save_to_favorites_list' ? 'favList' : 'favorites';
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        // Error saving data
    }
};

function removeItemFromArray(payload) {
    _.remove(payload.favArray, function(itemInArray) {
        return itemInArray === payload.item;
    });
    return payload.favArray;
}

function* saveItem({ payload, type }) {
    if (type === 'save_to_favorites_list') {
        try {
            const favList = yield call(saveListToArray, payload);
            console.log('after save', favList);
            yield put({ type: SAVE_TO_FAVORITES_LIST_SUCCESS, favList });
            yield storeData(type, favList);
        } catch (err) {
            console.log(err);
            yield put({ type: SAVE_TO_FAVORITES_LIST_FAILURE });
        }
    } else {
        try {
            console.log('ethnhn', payload);
            const favArray = yield call(saveItemToArray, payload);
            yield put({ type: SAVE_TO_FAVORITES_SUCCESS, favArray });
            yield storeData(type, favArray)
        } catch (err) {
            yield put({ type: SAVE_TO_FAVORITES_FAILURE });
        }
    }
}

function saveItemToArray(payload) {
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

function saveListToArray(payload) {
    console.log('in save', payload);
    const date = new Date();
    payload.favList.push({
        id: Date.now(),
        date: date.toDateString(),
        list: payload.favArray,
    });
    console.log('end save', payload);
    return payload.favList;
}

module.exports = {
  sagaWatcher,
};
