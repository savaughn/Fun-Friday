import { GET_HISTORY_FACT, GET_HISTORY_FACT_SUCCESS, GET_HISTORY_FACT_FAILURE } from '../../ActionTypes';

export const INITIAL_STATE = {
    event: [],
    error: false,
    refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HISTORY_FACT:
            return {...state};
        case GET_HISTORY_FACT_SUCCESS: {
            return {...state, event: action.payload, error: false, refreshing: true};
        }
        case GET_HISTORY_FACT_FAILURE:
            return { ...state, error: true, refreshing: false };
        default:
            return { ...state };
    }
};
