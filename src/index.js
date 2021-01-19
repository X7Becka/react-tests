import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import '.'

import MaterialTheme from './assets/theme/material-theme.ts'

import {MainLayout} from './layouts/main-layout'

import {Provider} from 'react-redux'
import configureStore from './redux/store'
import {RequestLoaderContainer} from './redux/containers/common/request-loader'
import {ThemeProvider} from '@material-ui/core/styles'
import {Router} from 'react-router-dom'
import * as createHistory from 'history'
import MUI_THEME from './assets/theme/material-theme.ts'
// import reportWebVitals from './report-web-vitals'


const store = configureStore()
const history = createHistory.createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <RequestLoaderContainer />
            <ThemeProvider theme={MUI_THEME}>
                <MainLayout />
            </ThemeProvider>
        </Router>
    </Provider>,
    document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
