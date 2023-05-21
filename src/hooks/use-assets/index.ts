import { useState, useEffect } from 'react';
import axios from 'axios';
import { assetsMedia } from './index.actions';
import { IAssetsResponse, IGetProps } from './index.interfaces';


function useAssets(props: IGetProps) {
    const { dependencies, params, disabled = false } = props;
    const [data, setData] = useState<IAssetsResponse>({
        collection: {
            version: '',
        href: '',
        items: [{
            href: ''
        }]
    }
    });
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string>('');

useEffect(() => {
    setLoading(true);
    setError('');

    const source = axios.CancelToken.source();

    !disabled && (async function () {
        const dataResponse = await assetsMedia(params);
        setData(dataResponse as unknown as IAssetsResponse);
        setLoading(false);
    })()

    return () => source.cancel();
    // eslint-disable-next-line
}, [...dependencies])

const clearError = () => setError('')

return { data, loading, error, clearError };
}
export default useAssets;