import React from 'react'
import {GithubReposItem} from './github-repos-item'
import {GithubReposTItem} from '../../redux/types/github-repos'
import {Scrollbar} from 'react-scrollbars-custom'

export class GithubReposList extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {className} = this.props

        return (
            <div className={`${className} github-repos-list`}>
                <Scrollbar>
                    {this.list}
                </Scrollbar>
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
    reposList: GithubReposTItem[]
    className: string
}
