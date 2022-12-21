import React from 'react'
import {Box , Toolbar, Typography  , styled } from '@mui/material'
import Logo from '../../Images/logoNavBar.png'
import {Link} from 'react-router-dom'

function NavBar() {
const StyledToolBar = styled(Toolbar)(({theme})=>({
width : '80vw' , 
display : 'flex' , 
margin : '8px' ,
justifyContent : 'space-between' ,
gap : '128px' ,
}))



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
    <Link style={{textDecoration : 'none'}} to='/home' ><Typography variant='h4'  > Home </Typography></Link>
    <Link style={{textDecoration : 'none'}} to='/weather' ><Typography variant='h4'> Weather </Typography></Link>
    <Link style={{textDecoration : 'none'}} to='/map' ><Typography variant='h4'>Map </Typography></Link>
    <Link style={{textDecoration : 'none'}}  to='/hotels' ><Typography variant='h4'>Hotels</Typography></Link>
            </PagesLinks>
        </StyledToolBar>
    )
}

export default NavBar