import { GET_RANDOM_JOKE, GET_RANDOM_JOKE_SUCCESS, GET_RANDOM_JOKE_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    jokes: [],
    error: false,
    refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RANDOM_JOKE:
            return {...state, refreshing: true };
        case GET_RANDOM_JOKE_SUCCESS:
            return { ...state, jokes: action.payload, error: false, refreshing: false };
        case GET_RANDOM_JOKE_FAILURE:
            return { ...state, error: true, refreshing: false };
        default:
            return { ...state };
    }
};
