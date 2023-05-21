export interface CollectionItemData {
    center?: string;
    title?: string;
    photographer?: string;
    keywords?: string[];
    location?: string;
    nasa_id?: string;
    media_type?: string;
    date_created?: string;
    description?: string;
}

export interface CollectionItemLink {
    href?: string;
    rel?: string;
    render?: string;
}

export interface CollectionItem {
    href: string;
    data: CollectionItemData[];
    links: CollectionItemLink[];
};

export interface CollectionMetadata {
    total_hits: number;
}

export interface Collection {
    version: string;
    href: string;
    items: CollectionItem[];
    metadata: CollectionMetadata;
}

export interface ApiResponse {
    collection?: Collection;
}

export interface SearchParams {
    q: string;
    startYear: string;
    endYear: string;
}
