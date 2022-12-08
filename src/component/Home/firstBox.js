import { Typography , styled , Box } from '@mui/material'
import React from 'react'
import earthPlan from '../../svgs/earthPlan.svg'
import { shadows } from '@mui/system';

function FirstBox() {
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
 borderRadius : theme.spacing(1) ,
height : '100%',

gap : theme.spacing(3) , 
 border :'2px solid green' ,
    }))

    const FirstBoxContainer = styled(Box)(({theme})=>({
        display : 'flex' ,  borderRadius : theme.spacing(1)  ,alignItems : 'center' , gap : theme.spacing(2) , justifyContent : 'space-between'  , border : '2px solid red' ,
        backgroundColor : theme.palette.secondary.dark ,
        padding : theme.spacing(1) ,
        borderRadius : theme.spacing(1) ,
        boxShadow : `2px 2px 4px ${theme.palette.secondary.dark}`
    }))
    return (
        <FirstBoxContainer  flex={2}  >
            <Container >
            <Box style={{ gap  : 0 , display  : 'flex' , flexDirection : 'column' ,  }} >
<StyledTitle variant='h3'  > Explore The World</StyledTitle>
<StyledTitle variant='h4' > Sky is not the limit </StyledTitle>
            </Box>
            <StyledText>
            Visite and explore new cities arround 
the world is becoming easier ussing 
new technologies 
            </StyledText>
            <StyledText>
            search the weather for your target city
and pick the best hotels     
            </StyledText>
            </Container>
            <img src={earthPlan} style={{width : 200, border : '2px solid red' ,height : 200}} ></img>
        </FirstBoxContainer>
    )
}

export default FirstBox