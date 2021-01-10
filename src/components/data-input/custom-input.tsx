import React, {FormEventHandler} from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

export class CustomInput extends React.PureComponent <TProps> {
    render(): JSX.Element {
        const {className, onInput, isLoading, label, value, reference} = this.props
        const props: TProps = {
            className: `${className} ${isLoading && 'custom-input__loading'}`,
            variant: 'standard',
            onInput,
            value,
        }
        return (
            <FormControl classes={{root: 'custom-input'}}>
                <InputLabel classes={{root: 'custom-input__label'}}>{label}</InputLabel>
                <Input classes={{root: 'custom-input__input', focused: 'custom-input__input--focused'}}
                    {...props}
                    ref={reference}
                />
            </FormControl>
        )
    }
}

type TProps = {
    className: string
    onInput?: FormEventHandler<HTMLDivElement>
    isLoading?: boolean
    label?: string
    variant?: 'standard' | 'filled' | 'outlined',
    value?: string | number
    reference?: any
}
