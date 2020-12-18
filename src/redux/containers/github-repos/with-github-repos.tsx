import React from 'react';
import {connect} from 'react-redux';
// import {reqStatusAction} from '../../actions/req-status';
import {fetchOrganizationRepositoriesAction} from "../../actions/github-repos";
import {WITH_GITHUB_REPOS_TPROPS} from "../../types/github-repos";

export const withGithubRepos = (ChildComponent: React.ComponentType) => {
    class GithubReposContainer extends React.PureComponent <WITH_GITHUB_REPOS_TPROPS> {

        componentDidMount = () => {
            this._init();
        }

        render = () => {
            // const {githubRepos, childComponentProps} = this.props;
            const props = {
                // ...childComponentProps
            };
            return <ChildComponent {...props}/>;
        }

        _init = () => {
            console.log(this.props, 'this.props')
            this.props.fetchOrganizationRepositories("adobe")
        }
    }

    const mapDispatchToProps = (dispatch: any) => {
        console.log(dispatch, 'dispatch')
        return {
            // setReqStatus: (isFetching: any) => dispatch(reqStatusAction(isFetching))
            fetchOrganizationRepositories: (organization: string) => dispatch(fetchOrganizationRepositoriesAction(organization))
        };
    };

    const mapStateToProps = (store: any) => {
        return {
            reqStatus: store.reqStatus,
            githubRepos: store.githubRepos
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(GithubReposContainer);
};
