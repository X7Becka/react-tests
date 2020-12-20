import React from 'react';
import {connect} from 'react-redux';
// import {reqStatusAction} from '../../actions/req-status';
import * as actions from "../../actions/github-repos";
import {githubReposTProps, withGithubReposTProps} from "../../types/github-repos";
import {RootState} from "MyTypes"
import {AppState} from "../../root-reducer";

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
            this.props.fetchOrganizationRepositories("adobe123")
        }
    }

    const mapDispatchToProps = (dispatch: any) => {
        return {
            // setReqStatus: (isFetching: any) => dispatch(reqStatusAction(isFetching))
            fetchOrganizationRepositories: (organization: string) => dispatch(actions.fetchOrganizationRepositoriesAction(organization))
        };
    };

    const mapStateToProps = (store: AppState) => {
        return {
            reqStatus: store.reqStatus,
            githubRepos: store.githubRepos
        };
    };

    // @ts-ignore
    return connect<P, ReturnType<typeof mapStateToProps>>(mapStateToProps, mapDispatchToProps)(GithubReposContainer);
};
