import React from 'react'
import {Box , Toolbar, Typography  , styled } from '@mui/material'
import Logo from '../../Images/logoNavBar.png'


function NavBar() {
const StyledToolBar = styled(Toolbar)({
width : '80vw' , 
display : 'flex' , 
margin : '8px' ,
justifyContent : 'space-between' ,
gap : '128px' ,
})



const LogoName = styled(Box)({
    display : 'flex' , 
    gap : '8px' ,
    alignItems : 'center'
})


const PagesLinks = styled(Box)({
    display : 'flex' ,
    alignItems : 'center' , 
     gap : '96px'
})
    return (
        <StyledToolBar>
            <LogoName>
            <img src={Logo} ></img>
            <Typography variant='h3' >TravelW</Typography>
 
            </LogoName>
            <PagesLinks>
            <Typography variant='h4' > Home </Typography>
            <Typography variant='h4' > Weather </Typography>
            <Typography variant='h4' >Map </Typography>
            <Typography variant='h4' >Hotels</Typography>
            </PagesLinks>
        </StyledToolBar>
    )
}

export default NavBar