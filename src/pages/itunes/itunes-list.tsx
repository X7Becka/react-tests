import React, {useRef} from 'react'
import {ItunesTItem} from '../../redux/types/itunes'
import {ItunesCard} from './itunes-card'
import Scrollbar from 'react-scrollbars-custom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const ItunesList: React.FC<TProps> = React.memo((props) => {
    const {productList, className} = props

    function addToCart(index: number): void {
        const currentCard = JSON.parse(localStorage.getItem('cart') || '[]')
        if (productList) localStorage.setItem('cart', JSON.stringify(currentCard.concat(productList[index])))

    }

    const _renderList = () => {
        return productList?.map((card, i) => {
            return (
                <ItunesCard
                    key={i}
                    index={i}
                    className="itunes-list__card"
                    card={card}
                    addToCart={addToCart}
                />
            )
        })
    }
    return (
        <div className={`itunes-list ${className}`}>
            <Scrollbar>
                {_renderList()}
            </Scrollbar>
        </div>
    )
})

type TProps = {
    className: string
    productList?: ItunesTItem[]
}
