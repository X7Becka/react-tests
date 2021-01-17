import React, {useEffect, useState} from 'react'
import * as types from './../../redux/types/itunes'
import {CustomButton} from '../../components/buttons/custom-button'
import Scrollbar from 'react-scrollbars-custom'


export const ItunesCart: React.FC<TProps> = React.memo(props => {
    const {className} = props
    const cart: types.ItunesTItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const [shouldUpdate, setShouldUpdate] = useState(false)
    useEffect(() => {
        if (shouldUpdate) setShouldUpdate(false)
    }, [shouldUpdate])

    const _product = (item: types.ItunesTItem, index: number) => {
        return (
            <div key={index} className="itunes-cart__product">
                <div className="itunes-cart__thumbnail">
                    <img src={item.artworkUrl100} alt={item.collectionName} className="itunes-cart__image"/>
                </div>
                <div className="itunes-cart__name">
                    {item.collectionName || item.trackCensoredName}
                </div>
                <div className="itunes-cart__price">
                    {item.collectionPrice && item.collectionPrice > 0 ? `${item.collectionPrice} $` : 'FREE'}
                </div>
                <CustomButton className="itunes-cart__btn itunes-cart__btn--remove"
                    onClick={() => _removeProduct({index})}
                >
                    REMOVE
                </CustomButton>
            </div>
        )
    }

    const _cartList = () => {
        return (
            <div className="itunes-cart__list">
                <Scrollbar>
                    {cart.map(_product)}
                </Scrollbar>
            </div>
        )
    }

    function _removeProduct ({index, clearCart}: {index?: number, clearCart?: boolean}): void {
        const productToRemove = cart[index || 0]
        const nextCart = cart.filter(item => item !== productToRemove)

        localStorage.setItem('cart', JSON.stringify(clearCart ? [] : nextCart))
        setShouldUpdate(true)
    }

    function _footer() {
        const total = cart.reduce((accum, currItem) => accum + currItem.collectionPrice, 0)

        return (
            <div className="itunes-cart__footer">
                <div className="itunes-cart__clear-cart">
                    <CustomButton className="itunes-cart__btn itunes-cart__btn--clear-cart"
                        onClick={() => _removeProduct({clearCart: true})}
                    >
                        Clear
                    </CustomButton>
                </div>
                <div className="itunes-cart__total">
                    TOTAL PRICE: {Number(total.toFixed(2))} $
                </div>
            </div>

        )
    }
    return (
        <div className={`itunes-cart ${className}`}>
            {_cartList()}
            {_footer()}
        </div>
    )
})


type TProps = {
    className: string
}
