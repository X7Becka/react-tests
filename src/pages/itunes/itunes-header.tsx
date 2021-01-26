import React, {MutableRefObject} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {CustomInput} from '../../components/data-input/custom-input'
import {CustomButton} from '../../components/buttons/custom-button'
import {ArrowSvg, ShoppingCartSvg} from '../../assets/svg'
import * as types from '../../redux/types/itunes'
import {ReqStatusState} from '../../redux/reducers/req-status'


export const ItunesHeader: React.FC<TProps> = React.memo((props) => {
    const {reqStatus} = props
    const searchQuery = React.useRef() as MutableRefObject<HTMLInputElement>

    const _main = () => {
        return (
            <div className="itunes-header__header">
                <h1 className="itunes-header__title">Itunes shop</h1>
                <div className="itunes-header__control-wrapper">

                    <CustomInput className="itunes-header__search-input"
                                 onEnter={() => searchProducts(searchQuery.current.value, 1)}
                                 inputRef={searchQuery}
                                 isLoading={reqStatus?.state === 'loading'}
                    />
                    <CustomButton className="itunes-header__button itunes-header__button--search"
                                  onClick={() => searchProducts(searchQuery.current.value, 1)}
                                  disabled={reqStatus?.state === 'loading'}
                    >
                        search
                    </CustomButton>
                    <CustomButton className="itunes-header__button itunes-header__button--cart"
                                  component={Link}
                                  to="/itunes/cart"
                    >
                        Cart <ShoppingCartSvg className="itunes-header__icon itunes-header__icon--cart" />
                    </CustomButton>
                </div>
            </div>
        )
    }

    const _cart = () => {
        return (
            <div className="itunes-header__header">
                <h1 className="itunes-header__title">Itunes cart</h1>
                <div className="itunes-header__control-wrapper">
                    <CustomButton className="itunes-header__button itunes-header__button--return"
                                  component={Link}
                                  to="/itunes"
                    >
                        <ArrowSvg className="itunes-header__icon itunes-header__icon--return" /> return
                    </CustomButton>
                </div>
            </div>
        )
    }
    const _header = () => {
        return (
            <Switch>
                <Route exact
                       path="/itunes"
                >
                    {_main()}
                </Route>
                <Route exact
                       path="/itunes/cart"
                >
                    {_cart()}
                </Route>
            </Switch>
        )
    }

    function searchProducts<T extends types.FetchProductsTAction['payload']>(productName: T['productName'], page: T['page']) {
        props.searchProducts(productName, page)
    }
    return _header()
})

type TProps = {
    className: string
    searchProducts: <T extends types.FetchProductsTAction['payload']> (productName: T['productName'], page: T['page']) => void
    reqStatus?: ReqStatusState
}
