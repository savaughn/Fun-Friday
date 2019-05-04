import { combineReducers } from 'redux';
import randomJokeReducer from './randomJoke/randomJokeReducer';
import dateHistoryReducer from './dateHistory/dateHistoryReducer';

const combinedReducers = combineReducers({
  randomJoke: randomJokeReducer,
  dateHistory: dateHistoryReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

module.exports = {
  rootReducer,
};
