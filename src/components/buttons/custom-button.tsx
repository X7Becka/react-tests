import React from 'react'
import Button from '@material-ui/core/Button'
import {WithStyles, withStyles} from '@material-ui/core'

type TProps = {
  className: string
  type?: 'button' | 'submit' | 'reset'
  to?: string
  component?: React.ElementType
}

class _CustomButton extends React.PureComponent <TProps & WithStyles<'root'>> {
  render() {
    const {children, className, to, component} = this.props

    const props: TProps = {
      className,
      component,
      to,
      type: 'reset'
    }

    return (
      <Button {...props}>
        {children}
      </Button>
    )
  }
}

const styles = {
  root: {
    backgroundColor: '#FFF'
  }
}

export const CustomButton = withStyles(styles)(_CustomButton)
