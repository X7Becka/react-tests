import React from 'react'
import {connect} from 'react-redux'
import {RootState} from '../../root-reducer'

type TProps = ReturnType<typeof mapStateToProps>

class RequestLoader extends React.PureComponent <TProps> {
    mounted = false;

    componentDidMount = () => {
        if (!this.mounted) this.mounted = true
    }

    render = () => {
        const {reqStatus} = this.props
        const status = [
            'request-loader__bar',
            !this.mounted ? 'request-loader__bar--hidden' : '',
            reqStatus?.isFetching ? 'request-loader__bar--90' : 'request-loader__bar--100 ',
            reqStatus?.error ? 'request-loader__bar--error' : ''

        ]
        return (
            <div className="request-loader">
                <div className={status.join(' ')}/>
            </div>
        )
    }
}

const mapStateToProps = (store: RootState) => {
    return {
        reqStatus: store.reqStatus
    }
}

export const RequestLoaderContainer = connect(mapStateToProps)(RequestLoader)

