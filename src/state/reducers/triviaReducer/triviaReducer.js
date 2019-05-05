import { GET_RANDOM_TRIVIA, GET_RANDOM_TRIVIA_SUCCESS, GET_RANDOM_TRIVIA_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    trivia: [],
    error: false,
    refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RANDOM_TRIVIA:
            return { ...state, refreshing: true };
        case GET_RANDOM_TRIVIA_SUCCESS:
            return { ...state, trivia: action.payload, error: false, refreshing: false };
        case GET_RANDOM_TRIVIA_FAILURE:
            return { ...state, error: true, refreshing: false };
        default:
            return { ...state };
    }
};
