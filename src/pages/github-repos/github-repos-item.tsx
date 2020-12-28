import React from 'react'
import {GithubReposItemType} from '../../redux/types/github-repos'

export class GithubReposItem extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {className, repoItem} = this.props
        return (
            <div className={`${className} github-repos-item`}>
                {repoItem.git_url}
            </div>
        )
    }
}

type TProps = {
    repoItem: GithubReposItemType
    className: string
}
