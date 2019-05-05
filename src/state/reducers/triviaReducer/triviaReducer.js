import { GET_RANDOM_TRIVIA, GET_RANDOM_TRIVIA_SUCCESS, GET_RANDOM_TRIVIA_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    trivia: [],
    error: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RANDOM_TRIVIA:
            return {...state};
        case GET_RANDOM_TRIVIA_SUCCESS:
            return {...state, trivia: action.payload, error: false};
        case GET_RANDOM_TRIVIA_FAILURE:
            return { ...state, error: true };
        default:
            return { ...state };
    }
};
