import {ItunesTItem} from '../../redux/types/itunes'
import React, {useState} from 'react'
import {CustomButton} from '../../components/buttons/custom-button'


export const ItunesCard: React.FC<TProps> = React.memo((props) => {
    const {card, className, addToCart, index, toggleDetails} = props
    const [isImgLoaded, setImgLoaded] = useState(false)

    return (
        <div className={`itunes-card ${className}`}>
            <div className="itunes-card__wrapper">
                <div className="itunes-card__thumbnail">
                    <img className={`itunes-card__image ${!isImgLoaded && 'itunes-card__image--hidden'}`}
                        src={card.artworkUrl100}
                        alt={card.artistName}
                        onLoad={() => setImgLoaded(true)}
                    />
                </div>
                <div className="itunes-card__name">
                    {card.collectionName || card.trackCensoredName}
                </div>
                <div className="itunes-card__price">
                    {card.collectionPrice && card.collectionPrice > 0 ? `${card.collectionPrice} $` : 'FREE'}
                </div>
                <div className="itunes-card__btn-group">
                    <CustomButton onClick={() => addToCart(index)}
                        className="itunes-card__btn itunes-card__btn--cart"
                    >CART ITEM</CustomButton>
                    <CustomButton onClick={() => toggleDetails({state: true, index})}
                        className="itunes-card__btn itunes-card__btn--details"
                    >DETAILS</CustomButton>
                </div>
            </div>
        </div>
    )
})

type TProps = {
    className: string
    card: ItunesTItem
    index: number
    addToCart: (index: number) => void
    toggleDetails: ({state, index}: {state: boolean, index: number}) => void
}
