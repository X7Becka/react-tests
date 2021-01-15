import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {withGithubRepos} from '../redux/containers/github-repos/with-github-repos'
import {Math} from '../pages/math/math'
import Menu from '../components/common/menu'
import {withItunes} from '../redux/containers/itunes/with-itunes'
import {Itunes} from '../pages/itunes/itunes'

export class MainLayout extends React.PureComponent {
    render(): JSX.Element {

        return (
            <div className="main-layout">
                <Router>
                    <Menu />
                    <div className="main-layout__content">
                        <Route path="/github-repos"
                            component={withGithubRepos}
                        />
                        <Route path="/math"
                            component={Math}
                        />
                        <Route path="/itunes"
                            component={withItunes(Itunes)}
                        />
                    </div>
                </Router>
            </div>
        )
    }
}
