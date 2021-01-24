import React, {useEffect, useState} from 'react'
import {ItunesEnhancedTProps} from '../../redux/containers/itunes/with-itunes'
import {ItunesList} from './itunes-list'
import {Route, Switch} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import {ItunesHeader} from './itunes-header'
import {ItunesCart} from './itunes-cart'
import {ItunesDetails} from './itunes-details'
import {ItunesTItem} from '../../redux/types/itunes'


export const Itunes: React.FC<ItunesEnhancedTProps> = React.memo((props) => {
    const {itunes, searchProducts, reqStatus} = props
    const [isDetailsOpened, toggleIsDetailsOpened] = useState(false)
    const [details, setDetails] = useState<ItunesTItem | undefined>(undefined)

    useEffect(() => {
        return () => {
            if (itunes.products === null) toggleIsDetailsOpened(false)
        }
    }, [itunes.products])

    const routes = [
        {path: '/itunes', Component: <ItunesList toggleDetails={toggleDetails} className="itunes__list" productList={itunes.products?.results} />},
        {path: '/itunes/cart', Component: <ItunesCart className="itunes__cart" />}
    ]

    const _view = () => {
        console.log('VIEW')
        return routes.map(({path, Component}) => (
            <Route  key={path}
                   exact
                   path={path}
            >
                {({match}) => (
                    <CSSTransition in={match !== null}
                                   timeout={300}
                                   classNames="itunes__animation-"
                                   unmountOnExit
                    >
                        <div className="itunes__animation">
                            {Component}
                        </div>
                    </CSSTransition>
                )}
            </Route>
        ))
    }

    function toggleDetails({state, index}: { state: boolean, index?: number }): void {
        toggleIsDetailsOpened(state)
        if (index !== undefined) setDetails(itunes.products?.results[index])
    }

    return (
        <div className="itunes">
            <ItunesHeader className="itunes__header"
                          searchProducts={searchProducts}
                          reqStatus={reqStatus}
            />
            <div className="itunes__view-container">
                <CSSTransition in={!isDetailsOpened}
                               timeout={300}
                               classNames="itunes__animation-details-"
                               unmountOnExit
                >
                    <div className="itunes__animation-details">{_view()}</div>
                </CSSTransition>
                <CSSTransition in={isDetailsOpened && !!details}
                               timeout={300}
                               classNames="itunes__animation-details-"
                               unmountOnExit
                >
                    <div className="itunes__animation-details">
                        <ItunesDetails className="itunes__details"
                                       product={details}
                                       toggleDetails={toggleDetails}
                        />
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
})
