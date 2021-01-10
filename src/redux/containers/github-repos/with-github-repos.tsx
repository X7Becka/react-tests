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
    searchRepositories: <P extends types.FetchReposAction['payload']>(organization: P['organization'], page: P['page']) => void
    isFetchingRepos: boolean
}

export type GithubReposEnhancedTState = {
    searchQuery: string
}

type TProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & RouteComponentProps


class GithubReposContainer extends React.PureComponent <TProps> {
    isFetchingRepos = false

    render = () => {
        const {githubRepos, reqStatus} = this.props
        const props = {
            githubRepos,
            reqStatus,
            searchRepositories: this.searchRepositories,
            isFetchingRepos: this.isFetchingRepos
        }

        return <GithubRepos {...props} />
    }

    searchRepositories = async <P extends types.FetchReposAction['payload']>(organization: P['organization'], page: P['page']) => {
        const {fetchOrganizationRepositories} = this.props
        this.isFetchingRepos = true
        await fetchOrganizationRepositories(organization, page)
        this.isFetchingRepos = false
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GithubReposActions | ReqStatusActions>) => {
    return {
        fetchOrganizationRepositories: <P extends types.FetchReposAction['payload']>(organization: P['organization'], page: P['page']) => dispatch(actions.fetchOrganizationRepositoriesAction(organization, page))
    }
}

const mapStateToProps = (store: RootState) => {
    return {
        reqStatus: store.reqStatus,
        githubRepos: store.githubRepos
    }
}

export const withGithubRepos = connect(mapStateToProps, mapDispatchToProps)(GithubReposContainer)

