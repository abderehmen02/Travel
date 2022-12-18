import { Box, DialogTitle, styled } from '@mui/material'
import DetailsTabs from './tabs'

function Details({CityNameWeather , setDetails  , Details }) {



const DialogContainer = styled(Box)(({theme})=>({
  backgroundColor : "#fff" , 
  padding : theme.spacing(1)
}))


return <DialogContainer>
<DialogTitle textAlign="center" >Details</DialogTitle>
<DetailsTabs CityNameWeather={CityNameWeather} />
</DialogContainer>


  
 }

export default Details
