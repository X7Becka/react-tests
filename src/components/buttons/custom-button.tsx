import React, {MouseEventHandler} from 'react'
import Button from '@material-ui/core/Button'

export const CustomButton: React.FC<TProps> = React.memo(props =>  {
    const {children, className, to, component, disabled, onClick} = props
    const componentProps: TProps = {
        component,
        to,
        disabled,
        onClick,
        type: 'reset',
        className: 'spec'
    }


    return (
        <div className={`${className} spec custom-button`}>
            <Button {...componentProps}>
                {children}
            </Button>
        </div>
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
