// import {GithubReposTItem, GithubReposTPagination} from '../types/github-repos'
import * as actions from './../types/itunes'
import {Reducer} from 'redux'

export type ItunesState = {
    readonly products?: actions.StoreProductsTAction['payload']
    readonly pagination?: any
}

const initialState: ItunesState = {
    products: undefined,
    pagination: undefined
}

export const itunesReducer: Reducer<ItunesState, actions.StoreProductsTAction> = (state = initialState, action) => {
    switch (action.type) {
    case actions.STORE_PRODUCTS: {
        return {...state, products: action.payload}
    }

    default: return state
    }
}
