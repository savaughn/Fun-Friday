import { GET_RANDOM_JOKE, GET_RANDOM_JOKE_SUCCESS, GET_RANDOM_JOKE_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    jokes: [],
    error: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RANDOM_JOKE:
            return {...state};
        case GET_RANDOM_JOKE_SUCCESS:
            return { ...state, jokes: action.payload, error: false };
        case GET_RANDOM_JOKE_FAILURE:
            return { ...state, error: true };
        default:
            return { ...state };
    }
};
