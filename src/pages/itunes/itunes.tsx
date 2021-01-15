import React from 'react'
import {ItunesEnhancedTProps} from '../../redux/containers/itunes/with-itunes'
import {ItunesList} from './itunes-list'
import {Route} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {ItunesHeader} from './itunes-header'
import {ItunesCart} from './itunes-cart'


export const Itunes: React.FC<ItunesEnhancedTProps> = React.memo((props) => {
    const {itunes, location, searchProducts} = props

    const routes = [
        {path: '/itunes', Component: <ItunesList className="itunes__list" productList={itunes.products?.results} />},
        {path: '/itunes/cart', Component: <ItunesCart className="itunes__cart"/>}
    ]

    const _view = () => {
        return routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
                {({match}) => (
                    <CSSTransition in={match !== null} timeout={300} classNames="itunes__animation-"
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

    return (
        <div className="itunes">
            <ItunesHeader className="itunes__header" searchProducts={searchProducts} />
            <div className="itunes__view-container">
                {_view()}
            </div>
        </div>
    )
})
