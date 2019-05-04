import React from 'react';
import { takeLatest, call, put } from 'redux-saga/effects';
import {GET_RANDOM_JOKE, GET_RANDOM_JOKE_FAILURE, GET_RANDOM_JOKE_SUCCESS} from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(GET_RANDOM_JOKE, saga);
}

function* saga() {
    console.log('in saga');
    try {
        const joke = yield call(getRandomJoke);
        console.log(joke);
        yield put({ type: GET_RANDOM_JOKE_SUCCESS, payload: joke });
    } catch (err) {
        yield put({ type: GET_RANDOM_JOKE_FAILURE });
    }

}

function getRandomJoke() {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => res.json());
}


module.exports = {
  sagaWatcher,
};
