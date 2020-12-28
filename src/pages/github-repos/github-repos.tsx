import React from 'react'
import {GithubReposEnhancedTProps} from '../../redux/containers/github-repos/with-github-repos'
import {GithubReposList} from './github-repos-list'
import {CustomInput} from '../../components/data-input/custom-input'

export class GithubRepos extends React.PureComponent<GithubReposEnhancedTProps> {
    render(): JSX.Element {
        const {githubRepos} = this.props
        console.log(this.props, 'this.props CHILD')

        return (
            <div className="github-repos">
                <CustomInput onInput={this.handleSearch}
                    className="github-repos__input"
                />
                <GithubReposList className="github-repos__list"
                    reposList={githubRepos.repositoryList}
                />
            </div>
        )
    }

    handleSearch = (e: React.SyntheticEvent): void => {
        console.log((e.target as HTMLTextAreaElement).value, 'e')
    }
}
