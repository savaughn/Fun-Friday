import { SAVE_TO_FAVORITES, SAVE_TO_FAVORITES_SUCCESS, SAVE_TO_FAVORITES_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    favorites: [],
    error: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_TO_FAVORITES:
            return {...state};
        case SAVE_TO_FAVORITES_SUCCESS:
            return { ...state, favorites: action.favArray, error: false };
        case SAVE_TO_FAVORITES_FAILURE:
            return { ...state, error: true };
        default:
            return { ...state };
    }
};
