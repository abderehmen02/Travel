import { Typography , styled , Box } from '@mui/material'
import React from 'react'

function SecondBox() {
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
gap : theme.spacing(3) , 
 flex : 1 , 
 borderRadius : theme.spacing(1) ,
 boxShadow : `2px 2px 4px ${theme.palette.pink.main}` ,
 padding : theme.spacing(5) ,
 backgroundColor : theme.palette.pink.main 
    }))
    return (
            <Container >
            <Box style={{ gap  : 0 , display  : 'flex' , flexDirection : 'column' ,  }} >
<StyledTitle variant='h4'  >Cities Weather</StyledTitle>
<StyledTitle variant='h5' >   </StyledTitle>
            </Box>
            <StyledText>
See the wather in any city you want
and see all the details of that city{/* here you can travel arround diffrent cities with less time and effort */}
            </StyledText>
            <StyledText>
Current weather in any city in the 
world so you can get an idea of the 
weather before you travel            </StyledText>
            </Container>
          )
}

export default SecondBox
