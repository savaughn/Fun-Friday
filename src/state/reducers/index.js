import { combineReducers } from 'redux';
import randomJokeReducer from './randomJoke/randomJokeReducer';

const combinedReducers = combineReducers({
  randomJoke: randomJokeReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

module.exports = {
  rootReducer,
};
