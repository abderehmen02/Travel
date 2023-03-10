import React from 'react'
import {Box, ThemeProvider} from '@mui/material'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Home from './Home'
import Theme from '../styling/theme'
import Weather from './Weather'
import Map from './map'
import Hotels from './hotels'


function App() {
    return (
        <ThemeProvider theme={Theme} >
    <Router>
        <Router>
            <Switch>
            <Route path='/home'  ><Home/></Route>
            <Route path='/weather' ><Weather/> </Route>
            <Route path='/map' ><Map/></Route> 
            <Route path="/hotels"  ><Hotels/></Route>
            </Switch>
        </Router>
    </Router>
    </ThemeProvider>
    )
}

export default App
