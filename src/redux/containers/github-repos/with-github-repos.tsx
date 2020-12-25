import React from 'react';
import {connect, MapStateToPropsParam} from 'react-redux';
import * as actions from "../../actions/github-repos";
import * as types from "../../types/github-repos";
import {GithubReposActions, withGithubReposTProps} from "../../types/github-repos";
import {RootState} from "../../root-reducer";
import {Dispatch} from "redux";
import {RouteComponentProps} from "react-router";




export const withGithubRepos = <P extends object> (ChildComponent: React.ComponentType<P>) => {

    type TProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & RouteComponentProps

    class GithubReposContainer extends React.PureComponent <TProps> {
        state = {

        }

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


    return connect<object, object, object, RootState>(mapStateToProps, mapDispatchToProps)(GithubReposContainer);
};

