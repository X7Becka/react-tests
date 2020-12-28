import React, {FormEventHandler} from 'react'
import {Input} from '@material-ui/core'

export class CustomInput extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {className, onInput} = this.props
        const props: TProps = {
            className: `${className} custom-input custom-input__wrapper`,
            onInput
        }
        return (
            <Input  {...props}>

            </Input>
        )
    }
}

type TProps = {
    className: string
    onInput?: FormEventHandler<HTMLDivElement>
}
