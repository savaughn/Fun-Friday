import React from 'react';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_HISTORY_FACT, GET_HISTORY_FACT_SUCCESS, GET_RANDOM_JOKE_FAILURE } from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(GET_HISTORY_FACT, saga);
}

function* saga() {
    try {
        const historyFacts = yield call(getHistoryFact);
        yield put({ type: GET_HISTORY_FACT_SUCCESS, payload: historyFacts });
    } catch (err) {
        yield put({ type: GET_RANDOM_JOKE_FAILURE });
    }

}

function getHistoryFact() {
    let data = {
        filteredEvents: [],
        currentDate: new Date().toDateString(),
    };
    let index = 0;
    return fetch('https://history.muffinlabs.com/date')
        .then((res) => res.json())
        .then((json) => {
            const unfilteredEventArray = json.data.Events;
            unfilteredEventArray.map((item) => {
                data.filteredEvents.push({
                    index,
                    year: item.year,
                    text: item.text,
                });
                index++;
            });
            console.log(data);
            return data;
        });
}


module.exports = {
  sagaWatcher,
};
