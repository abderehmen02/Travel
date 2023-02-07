import React , {useState , useEffect , useRef}from 'react'
import fetchWeather from './data'
import './index.css'
import Dialog  from '@mui/material/Dialog';
import { TextField ,  styled , Box, Skeleton } from '@mui/material';
import WeatherCard from './weatherCard';
import DetailsComponent from './details'
import NavBar from '../navBar';
import NoCityFound from './NoCityFound'
import Header from './header';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';import CardSkeleton from './cardSkeleton'
import Dots from '../Home/dots'



function Weather() {
const [CityName, setCityName] = useState('')
const [Options, setOptions] = useState([])
const [CityNameWeather, setCityNameWeather] = useState(false)
const [Details, setDetails] = useState(false)
const CityInput = useRef()




const SearchTextField = styled(TextField)(({theme})=>({
  '& label.Mui-focused': {
    color: theme.palette.dark.dark,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.dark.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.dark.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.dark.dark,
    },
  },
}));

const WeatherContainer = styled(Box)(({theme})=>({
width : '100vw' , 
height : '100vh' ,
display : 'flex' , 
alignItems : 'center' ,
justifyContent : 'space-between' , 
flexDirection : 'column' ,
backgroundColor : theme.palette.primary.main
}))


// effects 

useEffect(() => {
  CityInput.current.focus() 
})

const CityNameChanged = (e) =>{
    setOptions([])
    setCityNameWeather(null)
setCityName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)) 

fetchWeather(e.target.value).then(data =>{
    if(data.weather[0].main ){
    setCityNameWeather(data) 
}
}).catch(err =>{
  console.log('error:' + err)
    setCityNameWeather(false)
}) 
}
return (
     <WeatherContainer>
<NavBar/>
<Header/>
<Box sx={{display : 'flex' , gap : '16px' , paddingX :  '32px',  paddingY : '16px', alignItems : 'center' ,  justifyContent: 'space-around' , flexDirection : 'column'  }}  >
        <SearchTextField
        inputRef={CityInput} value={CityName} onChange={(event) => {CityNameChanged(event)}}
        id="input-with-icon-textfield"
        fontSize='larger'
        placeholder="Type a city name ..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
{
CityName === '' || CityNameWeather === false ? <NoCityFound/> :  
  (  CityNameWeather?
  <WeatherCard CityNameWeather={CityNameWeather} setDetails={setDetails} />
    :    <CardSkeleton/>   )   
}</Box>
<Dialog open={Boolean(Details)} onClose={()=>{setDetails(false)}} >
<DetailsComponent CityNameWeather={CityNameWeather } Details={Details} setDetails={setDetails}  />
</Dialog>
<Dots componentNumber={1} ></Dots>
        </WeatherContainer>)
}

export default Weather