import { useCallback, useState } from 'react';
import { searchMedia } from './index.actions';
import { ApiResponse, SearchParams } from './index.interfaces';
import { useDispatch } from 'react-redux';
import { setResults } from 'store/types';

export interface SearchReturnType {
    search: (params: SearchParams) => void
    data: ApiResponse
    setData: React.Dispatch<React.SetStateAction<ApiResponse | undefined>>
    loading: boolean
}

function useSearch(): SearchReturnType {
    const [data, setData] = useState<ApiResponse>();
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch();

    const search = useCallback(
        async (params: SearchParams) => {
          try {
            setLoading(true);
            const responseData = await searchMedia(params);
            setData(responseData);
            dispatch(setResults(responseData));
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        [setData, dispatch]
      );
      

    return ({ data: data as ApiResponse, search, loading, setData });
};

export default useSearch;