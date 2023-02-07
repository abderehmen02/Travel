import { Typography , styled , Box } from '@mui/material'
import React , {useState, useEffect} from 'react'
import earthPlan from '../../svgs/earthPlan.svg'
import ImageOne from '../../Images/hotel0.jpg'
import ImageTwo from '../../Images/hotel1.jpg'
import ImageThree from '../../Images/hotel2.jpg'
import ImageFore from '../../Images/hotel3.jpg'


const Images = [ImageOne , ImageTwo , ImageThree , ImageFore]
function ThirdBox() {
//// hooks
const [Background, setBackground] = useState(Images[Math.floor(Math.random()*Images.length - 1)])



useEffect(() => {
const changeBackground =    setInterval(()=>{
    setBackground(Images[Math.floor(Math.random()*Images.length - 1)])
} , 10000)
    return () => {
        clearInterval(changeBackground)
    }
}, [])

const StyledTitle = styled(Typography)(({theme})=>({
color : theme.palette.white.main ,
zIndex : 2
}))


const StyledText = styled(Typography)(({theme})=>({
    color : theme.palette.white.main , 
    textAlign : 'center' ,
    zIndex : 2
    }))

    const Container = styled(Box)(({theme})=>({
display : 'flex' , 
flexDirection :'column' ,
alignItems : 'center' ,
width : '50%',
borderRadius : theme.spacing(1) ,
boxShadow : `2px 2px 4px ${theme.palette.pink.main}` ,
position : 'relative' ,
gap : theme.spacing(3) ,
flex : 1 ,
border : '2px solid black' ,
 padding : theme.spacing(5)
    }))
    return (
            <Container >
            <div   style={{position : 'absolute' , backgroundSize : 'cover' , backgroundImage : `url(${Background})`, opacity : 0.9 , zIndex : 0 ,top : 0 , right :0 , width  : '100%' , height : '100%'}}>            </div>
            <div style={{position : 'absolute'  , top : 0, right :0 , width : '100%' , height : '100%' , backgroundColor : 'black' , opacity :0.7 , zIndex : 1}} ></div>
            <Box style={{ gap  : 0 , zIndex :2, display  : 'flex' , flexDirection : 'column'  }} >
<StyledTitle variant='h4'  > Maps</StyledTitle>
            </Box>
            <StyledText>
            Explore the map and see diffrent places in diffrent countries ;
            </StyledText>
            <StyledText>
            the map is availeble in any place at any time , if you don't have access to google map , this is a great ulternative
            </StyledText>
            </Container>
    )
}

export default ThirdBox
