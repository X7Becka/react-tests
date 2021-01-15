import React, {MouseEventHandler} from 'react'
import Button from '@material-ui/core/Button'

export class CustomButton extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {children, className, to, component, disabled, onClick} = this.props

        const props: TProps = {
            className: `${className} custom-button custom-button__wrapper`,
            component,
            to,
            disabled,
            onClick,
            type: 'reset'
        }

        return (
            <Button {...props}>
                {children}
            </Button>
        )
    }
}

type TProps = {
    className: string
    type?: 'button' | 'submit' | 'reset'
    to?: string
    component?: React.ElementType,
    disabled?: boolean
    onClick?: MouseEventHandler
}
