import React from 'react';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_RANDOM_TRIVIA, GET_RANDOM_TRIVIA_SUCCESS, GET_RANDOM_TRIVIA_FAILURE } from '../../ActionTypes';

function* sagaWatcher() {
  yield takeLatest(GET_RANDOM_TRIVIA, saga);
}

function* saga() {
    try {
        const randomTrivia = yield call(getRandomTrivia);
        yield put({ type: GET_RANDOM_TRIVIA_SUCCESS, payload: randomTrivia });
    } catch (err) {
        yield put({ type: GET_RANDOM_TRIVIA_FAILURE });
    }

}

function getRandomTrivia() {
    let filteredTrivia = [];
    let index = 0;
    return fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
        .then((res) => res.json())
        .then((json) => {
            const results = json.results;
            results.map((item) => {
                filteredTrivia.push({
                    type: 'trivia',
                    id: `t${index}`,
                    category: item.category,
                    question: item.question,
                    correctAnswer: item.correct_answer,
                    multipleChoice: item.incorrect_answers,
                });
                index++;
            });
            return filteredTrivia;
        });
}


module.exports = {
  sagaWatcher,
};
