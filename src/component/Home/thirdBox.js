import { Typography , styled , Box } from '@mui/material'
import React from 'react'
import earthPlan from '../../svgs/earthPlan.svg'
function ThirdBox() {
    const StyledTitle = styled(Typography)(({theme})=>({
color : theme.palette.white.main ,
    }))

    const StyledText = styled(Typography)(({theme})=>({
        color : theme.palette.white.light , 
        textAlign : 'center'
    }))

    const Container = styled(Box)(({theme})=>({
 display : 'flex' , 
 flexDirection :'column' ,
 alignItems : 'center' ,
width : '50%',
gap : theme.spacing(3) ,

flex : 1 ,
 border :'2px solid red' ,
 padding : theme.spacing(1)
    }))
    return (
            <Container >
            <Box style={{ gap  : 0 , display  : 'flex' , flexDirection : 'column' ,  }} >
<StyledTitle variant='h3'  > Explore The World</StyledTitle>
<StyledTitle variant='h4' > Sky is not the limit </StyledTitle>
            </Box>
            <StyledText>
            Visite and explore new cities arround 
the world is becoming easier ussing 
new technologies ,
            </StyledText>
            <StyledText>
            search the weather for your target city
and pick the best hotels     
            </StyledText>
            </Container>
    )
}

export default ThirdBox
