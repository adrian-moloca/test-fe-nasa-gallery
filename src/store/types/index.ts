import { ApiResponse } from "hooks/use-search/index.interfaces";

export const SET_RESULTS = 'SET_RESULTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';



export const setResults = (payload?: ApiResponse) => {
    return {
        type: SET_RESULTS,
        payload: payload,
    };
};

export const clearResults = () => {
    return {
        type: CLEAR_RESULTS,
    };
};
