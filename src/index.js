import React from 'react'
import ReactDOM from 'react-dom'

import '.'
import './index.scss'

import {MainLayout} from './layouts/main-layout'
import reportWebVitals from './report-web-vitals'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import {RequestLoaderContainer} from './redux/containers/common/request-loader'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const store = configureStore()
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00FF00'
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <RequestLoaderContainer />
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
