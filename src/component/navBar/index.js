import React from 'react'
import {Box , Toolbar, Typography  , styled } from '@mui/material'
import Logo from '../../Images/logoNavBar.png'
import {Link} from 'react-router-dom'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HomeIcon from '@mui/icons-material/Home';
import { Stack } from '@mui/system';

function NavBar() {
const StyledToolBar = styled(Toolbar)(({theme})=>({
width : '80vw' , 
display : 'flex' , 
margin : '8px' ,
justifyContent : 'space-between' ,
gap : '128px' ,
}))



const LogoName = styled(Box)(({theme})=>({
    display : 'flex' , 
    gap : '8px' ,
    alignItems : 'center' ,
    [theme.breakpoints.down('md')] : {
        display: 'none'
    }
}))


const PagesLinks = styled(Box)({
    display : 'flex' ,
    alignItems : 'center' , 
     gap : '96px'
})
    return (
        <StyledToolBar>
            <LogoName  >
            <img src={Logo} ></img>
            <Typography variant='h3' >TravelW</Typography>
            </LogoName>
            <PagesLinks>
    <Link style={{textDecoration : 'none'}} to='/' ><Stack direction="row" alignItems="center" spacing="8px" ><Typography variant='h4' display={{xs: "none" , md : 'block'}} > Home   </Typography><HomeIcon/></Stack></Link>
    <Link style={{textDecoration : 'none'}} to='/weather' ><Stack  direction="row" alignItems="center" spacing="8px" ><Typography variant='h4' display={{xs: "none" , md : 'block'}}  > Weather </Typography><ThunderstormIcon/></Stack></Link>
    <Link style={{textDecoration : 'none'}} to='/map' ><Stack  direction="row" alignItems="center" spacing="8px" > <Typography variant='h4' display={{xs: "none" , md : 'block'}} >Map  </Typography><FmdGoodIcon/></Stack></Link>
            </PagesLinks>
        </StyledToolBar>
    )
}

export default NavBar