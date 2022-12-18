import { Box, Typography } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <Box alignItems='center' >
            <Typography variant='h2' >Weather</Typography>
            <Typography variant='h4' >Explore the weather in any city at any time</Typography>
        </Box>
    )
}

export default Header
