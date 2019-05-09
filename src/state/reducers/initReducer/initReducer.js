import { INITIALIZE_APP, INITIALIZE_APP_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    favorites: [],
    error: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return { ...state };
        case INITIALIZE_APP_FAILURE:
            return { ...state, favorites: [], error: true };
        default:
            return { ...state };
    }
};
