
export const FETCH_PRODUCTS = 'itunes/FETCH_PRODUCTS'
export type FetchProductsTAction = {
    type: typeof FETCH_PRODUCTS
    payload: {
        productName: string
        page: number
    }
}

export const STORE_PRODUCTS = 'itunes/STORE_PRODUCTS'
export type StoreProductsTAction = {
    type: typeof STORE_PRODUCTS
    payload: {
        resultCount: number
        results: ItunesTItem[]
    } | null
}


export type ItunesActions =
    | FetchProductsTAction
    | StoreProductsTAction


export type ItunesTItem = {
    'artistId': number,
    'artistName': string,
    'artistViewUrl': string
    'artworkUrl100': string
    'artworkUrl30': string
    'artworkUrl60': string
    'collectionCensoredName': string,
    'collectionExplicitness': 'explicit',
    'collectionId': number,
    'collectionName': string,
    'collectionPrice': number,
    'collectionViewUrl': string
    'contentAdvisoryRating': 'Explicit',
    'country': string,
    'currency': 'USD',
    'discCount': number,
    'discNumber': number,
    'isStreamable': boolean
    'kind'?: 'song' | 'feature-movie',
    'previewUrl': string
    'primaryGenreName': string,
    'releaseDate': string,
    'trackCensoredName': string,
    'trackCount': number,
    'trackExplicitness': 'explicit',
    'trackId': number,
    'trackName': string,
    'trackNumber': number,
    'trackPrice': number,
    'trackTimeMillis': number,
    'trackViewUrl': string
    'wrapperType': 'track' | 'audiobook',
    'copyright'?: string,
    'description': string
}

export type GithubReposTPagination<URL = string, NUM = number> = {
    last: {
        url: URL
        num: NUM
    }
    next?: {
        url: URL
        num: NUM
    }
    prev?: {
        url: URL
        num: NUM
    }
}
