import React from 'react'
import {GithubReposEnhancedTProps, GithubReposEnhancedTState} from '../../redux/containers/github-repos/with-github-repos'
import {GithubReposList} from './github-repos-list'
import {CustomInput} from '../../components/data-input/custom-input'
import _ from 'lodash'
import {numToStr} from '../../utils/utils'
import {CustomPagination} from '../../components/buttons/custom-pagination'

export class GithubRepos extends React.PureComponent<GithubReposEnhancedTProps, GithubReposEnhancedTState> {

    state = {
        searchQuery: ''
    }

    // private currentOrganization: React.RefObject<HTMLDivElement> = React.createRef()

    render(): JSX.Element {
        const {githubRepos, isFetchingRepos} = this.props


        return (
            <div className="github-repos">
                <div className="github-repos__header">
                    <h1 className="github-repos__title">Repository search</h1>
                    <div className="github-repos__input-wrapper">
                        <CustomInput
                            onInput={_.debounce(this.handleSearch, 1000)}
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
                <CustomPagination className="github-repos__pagination"
                    count={this.lastPage}
                    onChange={(e, page) => this.handlePagination(page)}
                    isHidden={!githubRepos.pagination}
                />
            </div>
        )
    }

    handleSearch = (event: React.SyntheticEvent): void => {
        const organization = (event?.target as HTMLInputElement).value
        this.setState({searchQuery: organization}, () => this.props.searchRepositories(this.state.searchQuery, 1))

    }

    handlePagination = (page: number): void => {
        this.props.searchRepositories(this.state.searchQuery, page)
    }

    get lastPage() {
        const {githubRepos} = this.props
        const last = githubRepos.pagination?.last
        const prev = githubRepos.pagination?.prev

        if (githubRepos.pagination && last) return last.num
        if (!last && prev) return prev.num + 1
        return 1
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
