import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {withGithubRepos} from "../redux/containers/github-repos/with-github-repos";
import {GithubRepos} from "../pages/github-repos/github-repos";
import {Math} from "../pages/math/math";
import {Menu} from "../components/common/menu";

export class MainLayout extends React.PureComponent {
    render() {
        return (
            <Router>
                <Menu/>
                <Route path="/github-repos" component={withGithubRepos(GithubRepos)}/>
                <Route path="/math" component={Math}/>
            </Router>
        );
    }
}
