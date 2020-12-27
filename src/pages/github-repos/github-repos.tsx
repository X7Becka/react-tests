import React from 'react'
import {GithubReposEnhancedTProps} from '../../redux/containers/github-repos/with-github-repos'
// import {GithubReposEnhancedProps} from "../../redux/containers/github-repos/with-github-repos";

export class GithubRepos extends React.PureComponent<GithubReposEnhancedTProps> {
  render(): JSX.Element {
    this.props
    console.log(this.props, 'this.props CHILD')

    return <div>test</div>
  }
}
