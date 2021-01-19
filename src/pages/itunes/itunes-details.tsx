import React, {useState} from 'react'
import {ItunesTItem} from '../../redux/types/itunes'
import {Video} from '../../components/data-display/video'
import {CustomButton} from '../../components/buttons/custom-button'
import {CloseSvg} from '../../assets/svg'

export const ItunesDetails: React.FC<TProps> = React.memo(props => {
    const {className, product, toggleDetails} = props
    const [trailerAutoplay, setTrailerAutoplay] = useState<string | null>(localStorage.getItem('trailerAutoplay') || 'ON')
    const [isWatchingPreview, setIsWatchingPreview] = useState(false)

    if (!product) {
        toggleDetails({state: false})
        return null
    }
    const isTrailer = product.kind === 'feature-movie' && !!product.previewUrl
    const detailsData = {
        'feature-movie': {
            explicitness: product.collectionExplicitness,
            'advisory rating': product.contentAdvisoryRating,
            description: product.longDescription,
            genre: product.primaryGenreName,
            duration: `${Math.floor(product.trackTimeMillis / 1000 / 60)} mins`
        },
        song: {
            album: product.collectionName,
            track: product.trackCensoredName,
            genre: product.primaryGenreName,
            explicitness: product.trackExplicitness

        },
        audiobook: {
            edition: product.collectionCensoredName,
            description: <div dangerouslySetInnerHTML={{__html: product.description}} />,
            genre: product.primaryGenreName,
            'track count': product.trackCount
        },
        podcast: {
            edition: product.collectionName,
            'primary genre': product.primaryGenreName,
            genres: product.genres?.map((genre, i) => <span key={i}>{genre}&nbsp;</span>),
            'track count': product.trackCount
        }
    }

    const detailsDataTitle = {
        'feature-movie': product.trackCensoredName,
        song: product.artistName,
        audiobook: product.artistName,
        podcast: product.artistName
    }

    const _preview = (): JSX.Element | null => {
        if (!product.previewUrl) return null
        return (
            <div className="itunes-details__trailer-wrapper">
                <CustomButton className={`itunes-details__btn itunes-details__btn--trailer ${isWatchingPreview ? '' : 'itunes-details__btn--hidden'}`}
                              onClick={() => setIsWatchingPreview(false)}
                >
                    RETURN
                </CustomButton>
                <Video className="itunes-details__trailer"
                       url={product.previewUrl}
                       muted={!isWatchingPreview}
                       playing={trailerAutoplay !== 'OFF' && isTrailer}
                       loop={!isWatchingPreview}
                       controls={isWatchingPreview}
                />
            </div>
        )
    }

    const _info = () => {
        return (
            <div className={`itunes-details__info ${isWatchingPreview ? 'itunes-details__info--hidden' : ''}`}>
                <CloseSvg className="itunes-details__close"
                          onClick={() => toggleDetails({state: false})}
                />
                {_controls()}
                {_details()}
            </div>
        )
    }

    const _details = () => {
        const detailsList = Object.keys(detailsData[product.kind ?? product.wrapperType]).map((item, i) => {
            return (
                <>
                    <li key={i}
                        className="itunes-details__list-item"
                    >
                        <span>{item}</span>
                        <span>{detailsData[product.kind ?? product.wrapperType][item]}</span>
                    </li>
                </>
            )
        })
        return (
            <div className="itunes-details__details">
                <div className="itunes-details__details-header">
                    <div className="itunes-details__pic-wrapper">
                        <img className="itunes-details__pic"
                             src={
                                 product.artworkUrl600
                                 || product.artworkUrl500
                                 || product.artworkUrl400
                                 || product.artworkUrl300
                                 || product.artworkUrl200
                                 || product.artworkUrl100
                             }
                             alt="label"
                        />
                    </div>
                    <span className="itunes-details__title">
                    {detailsDataTitle[product.kind ?? product.wrapperType]}
                </span>
                </div>
                <div className="itunes-details__details-list">
                    {detailsList}
                </div>
            </div>
        )
    }

    const _controls = () => {
        return (
            <div className="itunes-details__trailer-controls">
                <CustomButton className="itunes-details__btn"
                              onClick={() => toggleAutoplay()}
                >
                    AUTOPLAY: {localStorage.getItem('trailerAutoplay') || 'ON'}
                </CustomButton>
                <CustomButton className="itunes-details__btn"
                              onClick={() => _toggleWatch()}
                >
                    PREVIEW
                </CustomButton>
            </div>
        )
    }

    function toggleAutoplay() {
        const isAutoplayEnabled = localStorage.getItem('trailerAutoplay') !== 'OFF'
        localStorage.setItem('trailerAutoplay', isAutoplayEnabled ? 'OFF' : 'ON')
        setTrailerAutoplay(localStorage.getItem('trailerAutoplay'))
    }

    function _toggleWatch() {
        setIsWatchingPreview(!isWatchingPreview)
    }

    return (
        <div className={`itunes-details ${className}`}>
            {_preview()}
            {_info()}
        </div>
    )
})


type TProps = {
    className: string
    product?: ItunesTItem
    toggleDetails: ({state}: { state: boolean }) => void
}
