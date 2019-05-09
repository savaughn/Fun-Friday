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
    REMOVE_FROM_FAVORITES_LIST,
    REMOVE_FROM_FAVORITES_LIST_SUCCESS,
} from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(SAVE_TO_FAVORITES, saveItem);
  yield takeLatest(SAVE_TO_FAVORITES_LIST, saveItem);
  yield takeLatest(REMOVE_FROM_FAVORITES, deleteItem);
  yield takeLatest(REMOVE_FROM_FAVORITES_LIST, deleteItem);
}

function* deleteItem(action) {
    try {
        const newArray = yield call(removeItemFromArray, action);
        yield asyncData(action.type, newArray, 'delete');
        if (action.payload.type === 'remove_from_favorites_list') {
            yield put({ type: REMOVE_FROM_FAVORITES_LIST_SUCCESS, favList: newArray});
        } else {
            yield put({type: REMOVE_FROM_FAVORITES_SUCCESS, favArray: newArray});
        }
    } catch (err) {
        yield put({ type: REMOVE_FROM_FAVORITES_FAILURE });
    }
}

asyncData = async (type, data, operation) => {
    let key;
    if (operation === 'delete'){
        key = type === 'remove_to_favorites_list' ? 'favList' : 'favorites';
    } else {
        key = type === 'save_to_favorites_list' ? 'favList' : 'favorites';
    }
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
        // Error saving data
    }
};

function removeItemFromArray(action) {
    const array = action.type === "remove_from_favorites_list" ? action.payload.favList : action.payload.favArray;
    console.log(array);
    _.remove(array, function(itemInArray) {
        return itemInArray === action.payload.item;
    });
    return array;
}

function* saveItem({ payload, type }) {
    if (type === 'save_to_favorites_list') {
        try {
            const favList = yield call(saveListToArray, payload);
            yield put({ type: SAVE_TO_FAVORITES_LIST_SUCCESS, favList });
            yield asyncData(type, favList, 'save');
        } catch (err) {
            console.log(err);
            yield put({ type: SAVE_TO_FAVORITES_LIST_FAILURE });
        }
    } else {
        try {
            const favArray = yield call(saveItemToArray, payload);
            yield put({ type: SAVE_TO_FAVORITES_SUCCESS, favArray });
            yield asyncData(type, favArray, 'save');
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
    const date = new Date();
    payload.favList.push({
        id: Date.now(),
        date: date.toDateString(),
        list: payload.favArray,
    });
    return payload.favList;
}

module.exports = {
  sagaWatcher,
};
