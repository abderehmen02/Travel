import React from 'react'
import {Box} from '@material-ui/core'
import NavBar from '../navBar'
import { Typography } from '@mui/material'
import WeatherCard from './weatherCard'

function Weather() {
    return (
        <Box sx={{height : '100vh' , width :  '100vw' }} >
        <NavBar/>
        <Box  >
<Typography> Search The Weather  </Typography>
<Typography> explore the weather in any city at any time </Typography>
        </Box>
        <WeatherCard/>
        </Box>
    )
}

export default Weather