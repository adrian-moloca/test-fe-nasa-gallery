export interface ImageData {
    version: string;
    href: string;
    items: ImageItem[];
}

export interface IAssetsResponse {
    collection: ImageData;
}

export interface ImageItem {
    href: string;
}


export interface IGetProps {
    dependencies: unknown[];
    disabled: boolean;
    params: string
}