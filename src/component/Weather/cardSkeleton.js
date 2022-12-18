import { Skeleton, Box } from '@mui/material'
import React from 'react'
function CardSkeleton() {
    return (
        <Box width='640px' height="310px" sx={{  backgroundColor : '#ffffff' ,  display : 'flex' , alignItems: 'center' , justifyContent: "center" , flexDirection: 'column' }} >
            <Skeleton   animation="wave" variant="rectangular" width="100%" height="140px" ></Skeleton>
            <Skeleton variant="text"  height={25} width="90%" ></Skeleton>
            <Skeleton variant="text" sx={{   marginBottom : '30px' }} height={20} width="50%"  ></Skeleton>
            <Skeleton   sx={{ borderRadius:50    , margin : '10px'  }} animation="wave" variant="rectangular" width='30%' height={40} ></Skeleton>
        </Box>
    )
}

export default CardSkeleton
