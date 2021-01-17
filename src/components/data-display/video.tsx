import React from 'react'
import ReactPlayer from 'react-player'


export const Video: React.FC<TProps> = React.memo(props => {
    const {className, url, playing, muted, width = '100%', height = '100%', style, loop, onReady, onPause, controls} = props
    const componentProps: Omit<TProps, 'className'> = {
        url,
        playing,
        muted,
        width,
        height,
        style,
        loop,
        onReady,
        onPause,
        controls
    }
    const player = React.useRef<ReactPlayer>(null)

    return (
        <div className={`video ${className}`}>
            <ReactPlayer ref={player} {...componentProps}/>
        </div>
    )
})

type TProps = {
    className: string
    url: string
    playing?: boolean
    muted?: boolean
    width?: string | number
    height?: string | number
    style?: object
    loop?: boolean
    onReady?: (player: ReactPlayer) => void
    onPause?: () => void
    controls?: boolean
}
