import { ApiResponse, SearchParams } from "./index.interfaces";

async function searchMedia(params: SearchParams): Promise<ApiResponse> {
    const apiUrl = "https://images-api.nasa.gov/search";
    const queryParameters = new URLSearchParams({
        q: params?.q,
        year_start: params?.startYear,
        year_end: params?.endYear,
        media_type: 'image'
    }).toString();
    try {
        const response = await fetch(`${apiUrl}?${queryParameters}`);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { searchMedia };
