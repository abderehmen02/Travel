import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cloudImage from '../../Images/Clouds.jpg';
import SumImage from '../../Images/sunn.jpg'
import RainImage from  '../../Images/Rain.jpg'
import ClearImage from '../../Images/Clear.jpg'
import DrizzleImage from  '../../Images/drizzle.jpg'
import SnowImage from '../../Images/snow.jpg'
function WeatherCard({CityNameWeather , setDetails }) {
  let WeatherImage = ClearImage ;
  if( CityNameWeather.weather[0].main ==="Clouds" ){
WeatherImage = cloudImage
  }
  else if(CityNameWeather.weather[0].main === "Drizzle"){
WeatherImage = DrizzleImage
  }
  else if (CityNameWeather.weather[0].main === 'Rain'){
    WeatherImage = RainImage
  }
  else if (CityNameWeather.weather[0].main === "Snow" ){
    WeatherImage = SnowImage
  }
  return (
    <Card sx={{   width : '640px' , height : '310px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={WeatherImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {new Date().toString()}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='center' >
          weather : {CityNameWeather.weather[0].main } <br/>
          tempreature :  { Math.round(  eval( (CityNameWeather.main.temp - 273 ) ) ) }
        </Typography>
      </CardContent>
      <CardActions width="100%" sx={{display : 'flex' , alignItems  : 'center' , justifyContent : 'center'}}>
        <Button variant="contained" size="small" onClick={()=>{setDetails(true)}} > See Details </Button>
      </CardActions>
    </Card>
  );
}
export default WeatherCard