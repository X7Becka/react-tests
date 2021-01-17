import React, {MouseEventHandler} from 'react'
import Button from '@material-ui/core/Button'

export const CustomButton: React.FC<TProps> = React.memo(props =>  {
    const {children, className, to, component, disabled, onClick} = props
    const componentProps: TProps = {
        className: `${className} custom-button custom-button__wrapper`,
        component,
        to,
        disabled,
        onClick,
        type: 'reset'
    }

    return (
        <Button {...componentProps}>
            {children}
        </Button>
    )
})

type TProps = {
    className: string
    type?: 'button' | 'submit' | 'reset'
    to?: string
    component?: React.ElementType,
    disabled?: boolean
    onClick?: MouseEventHandler
}
