
export const assetsMedia = async (params: string): Promise<unknown> => {
    const apiUrl = "https://images-api.nasa.gov/asset";

    try {
        const response = await fetch(`${apiUrl}/${params}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
