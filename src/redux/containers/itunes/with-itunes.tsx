import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import * as actions from '../../actions/itunes'
import * as types from '../../types/itunes'
import {RootState} from '../../root-reducer'
import {Dispatch} from 'redux'
import {RouteComponentProps} from 'react-router'
import {ReqStatusState} from '../../reducers/req-status'
import {ReqStatusActions} from '../../types/req-status'
import {ItunesActions} from '../../types/itunes'
import {ItunesState} from '../../reducers/itunes'

export type ItunesEnhancedTProps = {
    reqStatus: ReqStatusState
    itunes: ItunesState
    searchProducts: <T extends types.FetchProductsTAction['payload']> (productName: T['productName'], page: T['page']) => void
    location: RouteComponentProps['location']
}

const mapDispatchToProps = (dispatch: Dispatch<ItunesActions | ReqStatusActions>) => {
    return {
        fetchProducts: <P extends types.FetchProductsTAction['payload']>(productName: P['productName'], page: P['page']) => dispatch(actions.fetchProductsAction(productName, page))
    }
}

const mapStateToProps = (store: RootState) => {
    return {
        reqStatus: store.reqStatus,
        itunes: store.itunes
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type TProps = ConnectedProps<typeof connector> & RouteComponentProps

export function withItunes<T> (EnhancedComponent: React.ComponentType<T & TProps>) {

    function ComponentContainer(props: TProps) {
        const isFetchingProducts = false
        const {itunes, reqStatus, fetchProducts, location} = props
        const enhancedProps = {
            itunes,
            reqStatus,
            isFetchingProducts,
            searchProducts,
            location
        } as unknown as T & TProps

        // useEffect(() => {
        //
        // }, [])

        function searchProducts<T extends types.FetchProductsTAction['payload']>(productName: T['productName']) {
            fetchProducts(productName, 1)
        }

        return <EnhancedComponent {...enhancedProps}/>
    }
    return connector(ComponentContainer) as unknown as React.ComponentType<T>
}
