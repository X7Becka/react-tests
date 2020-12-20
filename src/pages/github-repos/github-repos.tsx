import React from 'react';
import {githubReposTProps} from "../../redux/types/github-repos";

export class GithubRepos extends React.PureComponent <githubReposTProps> {
    render() {
        console.log(this.props, 'this.props')
        return (
            <div>
                test
            </div>
        );
    }
}
