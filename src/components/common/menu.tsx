import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {CustomButton} from '../buttons/custom-button'
import {RouteComponentProps} from 'react-router'

class Menu extends React.PureComponent<RouteComponentProps> {
    private _urls: Array<{
            url: string
            label: string
        }>

    constructor(props: RouteComponentProps) {
        super(props)
        this._urls = [
            {url: '/math', label: 'Математический тест'},
            {url: '/github-repos', label: 'Работа с апи гитхаба'}
        ]
    }

    render(): JSX.Element {
        return (
            <div className="menu">
                <div className="menu__links-wrapper">
                    {this.buttons}
                </div>
            </div>
        )
    }

    get buttons(): JSX.Element[] {
        return this._urls.map(item => {
            return (
                <CustomButton key={item.url}
                    className="menu__button"
                    component={Link}
                    to={item.url}
                    disabled={this.props.location.pathname === item.url}
                >
                    {item.label}
                </CustomButton>
            )
        })
    }
}

export default withRouter(Menu)
