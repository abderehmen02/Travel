import { Box , Typography } from '@mui/material'
import React from 'react'

function NoCityFound() {
    return (
        <Box width="640px" height="310px"  sx={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center' , backgroundColor : '#ffffff' , boxShadow : '2px 2px 5px black' , border: '1px groove black' }} >
            <Box>
            <Typography color='error' variant='h3' >Sorry</Typography>
            <Typography variant='h4' >No City Found</Typography>
            </Box>
        </Box>
    )
}

export default NoCityFound
