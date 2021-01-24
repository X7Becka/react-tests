import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from 'components/common/menu'
import {PreloaderSvg} from '../assets/svg'

export class MainLayout extends React.PureComponent {
    render(): JSX.Element {

        const WithGithubReposContainer = React.lazy(() =>
            import('redux/containers/github-repos/with-github-repos')
        )
        const MathContainer = React.lazy(() =>
            import('pages/math/math')
        )
        const ItunesContainer = React.lazy(() =>
            import('redux/containers/itunes/with-itunes')
        )

        return (
            <div className="main-layout">
                <Router>
                    <Menu />
                    <div className="main-layout__content">
                        <React.Suspense fallback={<PreloaderSvg className="main-layout__preload" />}>
                            <Switch>
                                <Route path="/github-repos" component={WithGithubReposContainer} />
                                <Route path="/math" component={MathContainer} />
                                <Route path="/itunes" component={ItunesContainer} />
                            </Switch>
                        </React.Suspense>
                    </div>
                </Router>
            </div>
        )
    }
}
