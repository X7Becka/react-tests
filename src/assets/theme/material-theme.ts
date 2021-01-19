import {createMuiTheme} from '@material-ui/core'

const MUI_THEME = createMuiTheme({
    palette: {
        primary: {
            main: '#fffd6f'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: 'unset',
                    borderRadius: 0,
                    width: '100%'
                }
            }
        }
    }
})

export default MUI_THEME
