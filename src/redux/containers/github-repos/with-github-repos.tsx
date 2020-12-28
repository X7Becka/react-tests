import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/github-repos'
import * as types from '../../types/github-repos'
import {GithubReposActions, GithubReposItemType} from '../../types/github-repos'
import {RootState} from '../../root-reducer'
import {Dispatch} from 'redux'
import {RouteComponentProps} from 'react-router'
import {GithubRepos} from '../../../pages/github-repos/github-repos'

export type GithubReposEnhancedTProps = {
    githubRepos: {repositoryList: Array<GithubReposItemType>}
}


// export const withGithubRepos = <P extends object>(EnhancedComponent: React.ComponentType<P>) => {
//
//     type TProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & RouteComponentProps
//
//     class GithubReposContainer extends React.PureComponent <TProps> {
//
//         componentDidMount = () => {
//             this._init()
//         }
//
//         render = () => {
//             const {githubRepos} = this.props
//             const props = {
//                 githubRepos
//             }
//
//             return <EnhancedComponent {...props as P}/>
//         }
//
//         _init = () => {
//             this.props.fetchOrganizationRepositories('adobe')
//         }
//     }
//
//     const mapDispatchToProps = (dispatch: Dispatch<GithubReposActions>) => {
//         return {
//             fetchOrganizationRepositories: (organization: types.FetchReposAction['payload']) => dispatch(actions.fetchOrganizationRepositoriesAction(organization))
//         }
//     }
//
//   const mapStateToProps = (store: RootState) => {
//     return {
//       reqStatus: store.reqStatus,
//       githubRepos: store.githubRepos
//         }
//     }
//
//     return connect(mapStateToProps, mapDispatchToProps)(GithubReposContainer)
//
// }

type TProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & RouteComponentProps


class GithubReposContainer extends React.PureComponent <TProps> {

    componentDidMount = () => {
        this._init()
    }

    render = () => {
        const {githubRepos} = this.props
        const props = {
            githubRepos
        }

        return <GithubRepos {...props}/>
    }

    _init = () => {
        this.props.fetchOrganizationRepositories('adobe')
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GithubReposActions>) => {
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

