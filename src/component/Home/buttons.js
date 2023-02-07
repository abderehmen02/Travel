import { Button , Stack } from '@mui/material'
import React from 'react'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from 'react-router-dom';


function Buttons() {
    return (
        <Stack justifyContent='center' gap={5} sx={{width : '90%' }}  direction='row'  >
<Link to="/weather" style={{textDecoration :'none'}} >            <Button startIcon={<MapsHomeWorkIcon/>} variant='contained'  > Explore the weather </Button></Link>
<Link to="/map" style={{textDecoration : 'none'}} >            <Button startIcon={<WbSunnyIcon/>} variant='outlined'  > Explore the hotels  </Button></Link>
        </Stack>
    )
}

export default Buttons
