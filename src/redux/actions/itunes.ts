import * as actions from '../types/itunes'

export function fetchProductsAction<P extends actions.FetchProductsTAction['payload']>(productName: P['productName'], page: P['page']): actions.FetchProductsTAction {
    return {
        type: actions.FETCH_PRODUCTS,
        payload: {
            productName,
            page
        }
    }
}

export function storeProductsAction<T extends actions.StoreProductsTAction>(products: T['payload']): actions.StoreProductsTAction {
    return {
        type: actions.STORE_PRODUCTS,
        payload: products
    }
}
