import { INITIALIZE_APP, INITIALIZE_APP_SUCCESS, INITIALIZE_APP_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    favorites: [],
    error: false,
    initializing: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {...state, initializing: true };
        case INITIALIZE_APP_SUCCESS: {
            return {...state, favorites: action.favArray, error: false, initializing: false };
        }
        case INITIALIZE_APP_FAILURE:
            return { ...state, error: true, initializing: false };
        default:
            return { ...state };
    }
};
