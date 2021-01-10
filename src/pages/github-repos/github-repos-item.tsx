import React from 'react'
import {GithubReposTItem} from '../../redux/types/github-repos'
import {ForkSvg, StarSvg, WatchersSvg} from '../../assets/svg'

export class GithubReposItem extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {className, repoItem} = this.props
        return (
            <div className={`${className} github-repos-item`}>
                <a href={repoItem.svn_url}
                    target="_blank"
                    rel="noreferrer"
                    className="github-repos-item__wrapper"
                >
                    <div className="github-repos-item__header">
                        <div className="github-repos-item__header-item">
                            <StarSvg className="github-repos-item__icon github-repos-item__icon--star"/>
                            {repoItem.stargazers_count}
                        </div>
                        <div className="github-repos-item__header-item">
                            <ForkSvg className="github-repos-item__icon github-repos-item__icon--fork"/>
                            {repoItem.forks}
                        </div>
                        <div className="github-repos-item__header-item">
                            <WatchersSvg className="github-repos-item__icon github-repos-item__icon--watchers"/>
                            {repoItem.watchers}
                        </div>
                    </div>
                    <div className="github-repos-item__body">
                        <div className="github-repos-item__name">
                            {repoItem.name}
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

type TProps = {
    repoItem: GithubReposTItem
    className: string
}
