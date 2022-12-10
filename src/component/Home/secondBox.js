import { Typography , styled , Box } from '@mui/material'
import React from 'react'
import earthPlan from '../../svgs/earthPlan.svg'
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
width : '50%',
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
<StyledTitle variant='h4'  > Explore The World</StyledTitle>
<StyledTitle variant='h5' > Sky is not the limit </StyledTitle>
            </Box>
            <StyledText>
            Visite and explore new cities arround 
the world is becoming easier ussing 
new technologies , 
{/* here you can travel arround diffrent cities with less time and effort */}
            </StyledText>
            <StyledText>
            search the weather for your target city
and pick the best hotels     
            </StyledText>
            </Container>
          )
}

export default SecondBox
