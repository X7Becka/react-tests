import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../../actions/github-repos";
import * as types from "../../types/github-repos";
import {GithubReposActions, withGithubReposTProps} from "../../types/github-repos";
import {RootState} from "../../root-reducer";
import {Dispatch} from "redux";

export const withGithubRepos = <P extends object> (ChildComponent: React.ComponentType<P>) => {
    class GithubReposContainer extends React.PureComponent <withGithubReposTProps> {

        componentDidMount = () => {
            this._init();
        }

        render = () => {
            const {githubRepos} = this.props;
            const props = {
                githubRepos
            };
            return <ChildComponent {...props as P}/>;
        }

        _init = () => {
            console.log(this.props, 'this.props')
            this.props.fetchOrganizationRepositories("adobe")
        }
    }

    const mapDispatchToProps = (dispatch: Dispatch<GithubReposActions>) => {
        return {
            fetchOrganizationRepositories: (organization: types.FetchReposAction['payload']) => dispatch(actions.fetchOrganizationRepositoriesAction(organization))
        };
    };

    const mapStateToProps = (store: RootState) => {
        return {
            reqStatus: store.reqStatus,
            githubRepos: store.githubRepos
        };
    };



    return connect<P, ReturnType<typeof mapStateToProps>>(mapStateToProps, mapDispatchToProps)(GithubReposContainer);
};
