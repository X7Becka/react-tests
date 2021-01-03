import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/github-repos'
import * as types from '../../types/github-repos'
import {GithubReposActions} from '../../types/github-repos'
import {RootState} from '../../root-reducer'
import {Dispatch} from 'redux'
import {RouteComponentProps} from 'react-router'
import {GithubRepos} from '../../../pages/github-repos/github-repos'
import {ReqStatusState} from '../../reducers/req-status'
import {ReqStatusActions} from '../../types/req-status'
import {GithubReposState} from '../../reducers/github-repos'

export type GithubReposEnhancedTProps = {
    githubRepos: GithubReposState
    reqStatus: ReqStatusState
    searchRepositories: (organization: types.FetchReposAction['payload']) => void
    isFetchingRepos: boolean
}

export type GithubReposEnhancedTState = {

}

type TProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & RouteComponentProps


class GithubReposContainer extends React.PureComponent <TProps> {
    isFetchingRepos = false

    // componentDidMount = () => {
    //
    // }

    render = () => {
        const {githubRepos, reqStatus} = this.props
        const props = {
            githubRepos,
            reqStatus,
            searchRepositories: this.searchRepositories,
            isFetchingRepos: this.isFetchingRepos
        }
console.log(this.isFetchingRepos, 'this.isFetchingRepos')
        return <GithubRepos {...props} />
    }

    searchRepositories = async (value: types.FetchReposAction['payload']) => {
        const {fetchOrganizationRepositories} = this.props
        this.isFetchingRepos = true
        await fetchOrganizationRepositories(value)
        this.isFetchingRepos = false
    }

    // onSearch = (value: types.FetchReposAction['payload']) => new Promise((resolve, reject) => {
    //     const {fetchOrganizationRepositories} = this.props
    //     console.log(fetchOrganizationRepositories(value), 'fetchOrganizationRepositories(value)')
    // })

    // _init = () => {
    //
    // }
}

const mapDispatchToProps = (dispatch: Dispatch<GithubReposActions | ReqStatusActions>) => {
    return {
        fetchOrganizationRepositories: (organization: types.FetchReposAction['payload']) => dispatch(actions.fetchOrganizationRepositoriesAction(organization))
    }
}

const mapStateToProps = (store: RootState) => {
    return {
        reqStatus: store.reqStatus,
        githubRepos: store.githubRepos
    }
}

export const withGithubRepos = connect(mapStateToProps, mapDispatchToProps)(GithubReposContainer)

