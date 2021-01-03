import React from 'react'
import {GithubReposEnhancedTProps, GithubReposEnhancedTState} from '../../redux/containers/github-repos/with-github-repos'
import {GithubReposList} from './github-repos-list'
import {CustomInput} from '../../components/data-input/custom-input'
import _ from 'lodash'
import {numToStr} from '../../utils/utils'

export class GithubRepos extends React.PureComponent<GithubReposEnhancedTProps, GithubReposEnhancedTState> {

    render(): JSX.Element {
        const {githubRepos, isFetchingRepos} = this.props

        return (
            <div className="github-repos">
                <div className="github-repos__header">
                    <div className="github-repos__input-wrapper">
                        <CustomInput onInput={_.debounce(this.handleSearch, 1000)}
                            className="github-repos__input"
                            isLoading={isFetchingRepos}
                            label="Repository name"
                        />
                    </div>
                    <div className="github-repos__results-counter">
                        {this.resultsMessage}
                    </div>
                </div>
                <GithubReposList className="github-repos__list"
                    reposList={githubRepos.repositoryList || []}
                />
            </div>
        )
    }

    // loadingStatus = {
    //
    // }

    // handleSearch = (e: React.SyntheticEvent): void => {
    //     const {fetchOrganizationRepositories} = this.props
    //     const value = (e.target as HTMLInputElement).value
    //     _.debounce((value) => {
    //         this.setState({val: value}, () => fetchOrganizationRepositories)
    //     }, 1500)
    // }
    handleSearch = (event: React.SyntheticEvent): void => {
        this.props.searchRepositories((event.target as HTMLInputElement).value)
    }

    get resultsMessage(): string {
        const resultsLength = this.props.githubRepos.repositoryList?.length

        if (resultsLength === undefined) {
            return 'Let\'s search'
        } else if (resultsLength > 0) {
            return `Found ${resultsLength} ${numToStr(resultsLength, ['repository', 'repositories', 'repositories'])}`
        } else {
            return 'Nothing found :('
        }

    }

}
