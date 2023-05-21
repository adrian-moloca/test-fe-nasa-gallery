import { ApiResponse } from 'hooks/use-search/index.interfaces';
import {
    CLEAR_RESULTS, SET_RESULTS
} from 'store/types';

export interface IInitialState {
    results: ApiResponse;
    searchedValue: string | undefined;
}

const initialState: IInitialState = {
    results: {},
    searchedValue: "",
};

const resultsReducer = (state = initialState, action: {type: string, payload: ApiResponse}) => {
    switch (action.type) {
        case SET_RESULTS:
            return {
                ...state,
                results: action?.payload,
                searchedValue: action?.payload?.collection?.href.split("=")[1].split("&")[0]
            };
        case CLEAR_RESULTS:
            return {
                ...state,
                results: {},
            };
        default:
            return state;
    }
};

export default resultsReducer;
