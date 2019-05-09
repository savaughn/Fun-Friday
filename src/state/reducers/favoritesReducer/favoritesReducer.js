import {
    SAVE_TO_FAVORITES,
    SAVE_TO_FAVORITES_SUCCESS,
    SAVE_TO_FAVORITES_FAILURE,
    SAVE_TO_FAVORITES_LIST_SUCCESS,
    RESTORE_FROM_ASYNC
} from '../../ActionTypes';

export const INITIAL_STATE = {
    favArray: [],
    error: false,
    refreshing: false,
    favList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_TO_FAVORITES:
            return {...state, refreshing: true };
        case SAVE_TO_FAVORITES_SUCCESS: {
            return {...state, favArray: action.favArray, error: false, refreshing: false };
        }
        case SAVE_TO_FAVORITES_FAILURE:
            return { ...state, error: true, refreshing: false };
        case SAVE_TO_FAVORITES_LIST_SUCCESS:
            return { ...state, favList: action.favList, error: false, refreshing: false };
        case RESTORE_FROM_ASYNC:
            return { ...state, favArray: action.payload.favArray, favList: action.payload.favList, refreshing: false };
        default:
            return { ...state };
    }
};
