import React, {useEffect, useState} from 'react'
import {ItunesTItem} from '../../redux/types/itunes'
import {ItunesCard} from './itunes-card'
import Scrollbar from 'react-scrollbars-custom'
import {CustomButton} from '../../components/buttons/custom-button'

export const ItunesList: React.FC<TProps> = React.memo((props) => {
    const {productList, className, toggleDetails} = props
    const [listLimit, setListLimit] = useState(20)
    const isLeftToShowMore = productList && productList?.length - listLimit > 0
    const productsCount = productList && productList?.length || 0
    useEffect(() => {
        return () => {
            if (!productList) {
                setListLimit(20)
            }
        }
    }, [productList])

    function addToCart(index: number): void {
        const currentCard = JSON.parse(localStorage.getItem('cart') || '[]')
        if (productList) localStorage.setItem('cart', JSON.stringify(currentCard.concat(productList[index])))

    }

    function _showMore() {
        const productsLeft = isLeftToShowMore ? 20 : productsCount - listLimit || 0
        setListLimit(listLimit + productsLeft)
    }

    const _renderList = () => {
        console.log(productList, 'productList')
        return productList?.slice(0, listLimit).map((card, i) => {
            return (
                <ItunesCard
                    toggleDetails={toggleDetails}
                    key={i}
                    index={i}
                    className="itunes-list__card"
                    card={card}
                    addToCart={addToCart}
                />
            )
        })
    }

    const _renderShowMore = () => {

        return (
            <div className="itunes-list__btn-wrapper">
                <CustomButton onClick={() => _showMore()}
                              className="itunes-list__btn"
                >
                    Show more
                    <span className="itunes-list__btn-description">Currently: {listLimit}, left: {productsCount - listLimit}</span>
                </CustomButton>
            </div>
        )
    }

    return (
        <div className={`itunes-list ${className}`}>
            <Scrollbar>
                {_renderList()}
                {productsCount > 20 && isLeftToShowMore ? _renderShowMore() : null}
            </Scrollbar>
        </div>
    )
})

type TProps = {
    className: string
    productList?: ItunesTItem[]
    toggleDetails: ({state, index}: { state: boolean, index: number }) => void
}
