import React from 'react'
import {GithubReposItem} from './github-repos-item'
import {GithubReposItemType} from '../../redux/types/github-repos'

export class GithubReposList extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {className} = this.props
        return (
            <div className={`${className} github-repos-list`}>
                {this.list}
            </div>
        )
    }

    get list(): JSX.Element[] {
        return this.props.reposList.map(repo => {
            return (
                <GithubReposItem repoItem={repo}
                    key={repo.id}
                    className="github-repos-list__item"
                />
            )
        })
    }
}

type TProps = {
    reposList: GithubReposItemType[]
    className: string
}
