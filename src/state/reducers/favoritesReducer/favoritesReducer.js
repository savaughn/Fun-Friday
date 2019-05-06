import { SAVE_TO_FAVORITES, SAVE_TO_FAVORITES_SUCCESS, SAVE_TO_FAVORITES_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    favorites: [],
    error: false,
    refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_TO_FAVORITES:
            return {...state, refreshing: true };
        case SAVE_TO_FAVORITES_SUCCESS: {
            return {...state, favorites: action.favArray, error: false, refreshing: false };
        }
        case SAVE_TO_FAVORITES_FAILURE:
            return { ...state, error: true, refreshing: false };
        default:
            return { ...state };
    }
};
