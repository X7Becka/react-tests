import React, {useEffect, useState} from 'react'
import {ItunesTItem} from '../../redux/types/itunes'
import ReactPlayer from 'react-player'
import {Video} from '../../components/data-display/video'
import {CustomButton} from '../../components/buttons/custom-button'

export const ItunesDetails: React.FC<TProps> = React.memo(props => {
    const {className, product, toggleDetails} = props
    const [trailerAutoplay, setTrailerAutoplay] = useState<string | null>(localStorage.getItem('trailerAutoplay') || 'ON')
    const [isWatchingTrailer, setIsWatchingTrailer] = useState(false)
    console.log(product, 'product')
    if (!product) {
        toggleDetails({state: false})
        return null
    }

    const _renderTrailer = (): JSX.Element | null => {
        if (!product.previewUrl) return null
        return (
            <div className="itunes-details__trailer-wrapper">
                <CustomButton className={`itunes-details__btn itunes-details__btn--trailer ${isWatchingTrailer ? '' : 'itunes-details__btn--hidden'}`}
                    onClick={() => setIsWatchingTrailer(false)}
                >
                    RETURN
                </CustomButton>
                <Video className="itunes-details__trailer"
                    url={product.previewUrl}
                    muted={!isWatchingTrailer}
                    playing={trailerAutoplay !== 'OFF'}
                    loop={!isWatchingTrailer}
                    controls={isWatchingTrailer}
                />
            </div>
        )
    }

    const _renderInfo = () => {
        return (
            <div className={`itunes-details__info ${isWatchingTrailer ? 'itunes-details__info--hidden' : ''}`}>
                {product.collectionName}
                <CustomButton className="itunes-details__btn"
                    onClick={() => toggleAutoplay()}
                >
                    AUTOPLAY: {localStorage.getItem('trailerAutoplay') || 'ON'}
                </CustomButton>
                <CustomButton className="itunes-details__btn"
                    onClick={() => _toggleWatchTrailer()}
                >
                    WATCH TRAILER
                </CustomButton>
            </div>
        )
    }

    function toggleAutoplay() {
        const isAutoplayEnabled = localStorage.getItem('trailerAutoplay') !== 'OFF'
        localStorage.setItem('trailerAutoplay', isAutoplayEnabled ? 'OFF' : 'ON')
        setTrailerAutoplay(localStorage.getItem('trailerAutoplay'))
    }

    function _toggleWatchTrailer() {
        setIsWatchingTrailer(!isWatchingTrailer)
    }

    return (
        <div className={`itunes-details ${className}`}>
            {_renderTrailer()}
            {_renderInfo()}
        </div>
    )
})


type TProps = {
    className: string
    product?: ItunesTItem
    toggleDetails: ({state}: { state: boolean }) => void
}
