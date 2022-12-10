import { Button , Stack } from '@mui/material'
import React from 'react'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function Buttons() {
    return (
        <Stack justifyContent='center' gap={5} sx={{width : '90%' }}  direction='row'  >
            <Button startIcon={<MapsHomeWorkIcon/>} variant='contained'  > Explore the weather </Button>
            <Button startIcon={<WbSunnyIcon/>} variant='outlined'  > Explore the hotels  </Button>
        </Stack>
    )
}

export default Buttons
