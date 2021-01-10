import React from 'react'
import {Pagination} from '@material-ui/core'

export class CustomPagination extends React.PureComponent <TProps> {
    render(): JSX.Element | null {
        const {className, count, onChange, isHidden} = this.props

        const props: TProps = {
            className: `${className} custom-pagination custom-pagination__wrapper`,
            count,
            onChange
        }

        return isHidden ? null : <Pagination {...props} />
    }
}

type TProps = {
    className: string
    count?: number,
    onChange: (event: object, page: number) => void
    isHidden?: boolean
}
