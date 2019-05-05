import { combineReducers } from 'redux';
import jokeReducer from './jokeReducer/jokeReducer';
import historyReducer from './historyReducer/historyReducer';
import triviaReducer from './triviaReducer/triviaReducer';
import favoritesReducer from './favoritesReducer/favoritesReducer';

const combinedReducers = combineReducers({
    randomJoke: jokeReducer,
    randomHistory: historyReducer,
    randomTrivia: triviaReducer,
    favorites: favoritesReducer,
});

const rootReducer = (state, action) => {
    return combinedReducers(state, action);
};

module.exports = {
  rootReducer,
};
