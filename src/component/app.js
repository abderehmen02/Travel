import React from 'react'
import {Box, ThemeProvider} from '@mui/material'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Home from './Home'
import Theme from '../styling/theme'


function App() {
    return (
        <ThemeProvider theme={Theme} >
    <Router>
        <Router>
            <Switch>
            <Route path='/home'  ><Home/></Route>
            </Switch>
        </Router>
    </Router>
    </ThemeProvider>
    )
}

export default App
