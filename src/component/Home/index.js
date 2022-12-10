
import { Box , styled } from '@mui/material'
import React from 'react'
import NavBar from '../navBar'
import Boxes from './boxes'
import Buttons from './buttons'
import Dots from './dots'

function Home() {
    const HomePageContainer = styled(Box)(({theme})=>({
    width: '100vw' , 
    height : '100vh'  ,
    display : 'flex' , 
    alignItems : 'center' ,
    justifyContent : 'space-between' , 
    flexDirection : 'column',

    backgroundColor  : theme.palette.primary.main
    }))
    return (
        <HomePageContainer >
            <NavBar/>
            <Boxes/>
            <Buttons/>
            <Dots componentNumber={0} />
        </HomePageContainer>
    )
}


export default Home