import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box , styled , Stack } from '@mui/material'
import AirIcon from '@mui/icons-material/Air';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Thermostat from '@mui/icons-material/Thermostat';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PictureInPictureIcon from '@mui/icons-material/PictureInPicture';
import SpeedIcon from '@mui/icons-material/Speed';
import HeightIcon from '@mui/icons-material/Height';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import OpacityIcon from '@mui/icons-material/Opacity';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function DetailsTabs({CityNameWeather}) {

    // styled component
    const TabsContainer = styled(Tabs)(({theme})=>({
   backgroundColor : "#fff"
    }))

const SwipeableViewsContainer = styled(SwipeableViews)(({theme})=>({
    backgroundColor: 'white'
}))




    const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
console.log("city name weather")
console.log(CityNameWeather)
  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <TabsContainer
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor='secondary'
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<AirIcon/>} iconPosition="start" label="Wind" {...a11yProps(0)} />
          <Tab icon={<ApartmentIcon/>} iconPosition="start" label="City" {...a11yProps(1)} />
          <Tab icon={<Thermostat/>} iconPosition="start" label="Tempreture" {...a11yProps(2)} />
          <Tab icon={<Thermostat/>} iconPosition="start" label="Others" {...a11yProps(3)} />
        </TabsContainer>
      </AppBar>
      <SwipeableViewsContainer
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Stack  direction="row" alignItems="center" justifyContent="space-around" > <Stack direction="row" alignItems="center" spacing={2} > <AvTimerIcon /> <Typography variant="h5" fontWeight="bolder"  >   degree: </Typography> </Stack> <Typography variant="h5" > {CityNameWeather.wind.deg} </Typography> </Stack>
   <Stack direction="row" alignItems="center" justifyContent='space-around' > <Stack direction="row" alignItems="center" spacing={2} ><SpeedIcon/> <Typography variant='h5' >speed: </Typography  ></Stack> <Typography variant="h5" > {CityNameWeather.wind.speed} </Typography> </Stack>
        </TabPanel>
        

        <TabPanel  value={value} index={1} dir={theme.direction}>
    <Stack direction="row"  justifyContent="space-between"  width="60%"  alignItems="center" > <Stack direction="row" sx={{width : '150px' , justifyContent: 'space-between'   }} alignItems="center" spacing={2} > <HeightIcon /> <Typography variant="h5" fontWeight="bolder"  >    Time Zone:</Typography> </Stack> <Typography   variant="h5" width="100px" align="left" > {CityNameWeather.timezone} </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row" sx={{width : '150px' , justifyContent: 'space-between'   }} alignItems="center" spacing={2} ><PictureInPictureAltIcon/> <Typography variant='h5' >   latitude :</Typography  ></Stack> <Typography  width="100px" align="left"  variant="h5" > {CityNameWeather.coord.lat}  </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row"  sx={{width : '150px' , justifyContent: 'space-between' }}  alignItems="center" spacing={2} ><PictureInPictureIcon/> <Typography variant='h5' >   longitude :</Typography  ></Stack> <Typography    variant="h5" width="100px" align="left"> {CityNameWeather.coord.lon}  </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row"  sx={{width : '150px' , justifyContent: 'space-between' }}  alignItems="center" spacing={2} ><FlagCircleIcon/> <Typography variant='h5' >   Country:</Typography  ></Stack> <Typography  variant="h5" width="100px" align="left"> {CityNameWeather.sys.country}  </Typography> </Stack>
        </TabPanel>
        
        
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row" sx={{width : '150px' , justifyContent: 'space-between'  }} alignItems="center" spacing={2} > <Thermostat /> <Typography  textAlign="start" variant="h5" fontWeight="bolder"  >    Tempreture :</Typography> </Stack> <Typography variant="h5"  >        { Math.round( eval( CityNameWeather.main.temp - 273 )) } </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row" sx={{width : '150px' , justifyContent: 'space-between' }} alignItems="center" spacing={2} ><Thermostat/> <Typography variant='h5' textAlign="start">   Maximum_Tempreture:</Typography  ></Stack> <Typography variant="h5" >        { Math.round( eval( CityNameWeather.main.temp_max - 273 )) }  </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row"  sx={{width : '150px' , justifyContent: 'space-between' }}  alignItems="center" spacing={2} ><Thermostat/> <Typography variant='h5' textAlign="start">   Minimum_Tempreture:</Typography  ></Stack> <Typography variant="h5" >        { Math.round( eval( CityNameWeather.main.temp_min - 273 )) }  </Typography> </Stack>
        </TabPanel>
 
 
 
        <TabPanel value={value} index={3} dir={theme.direction}>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row" sx={{width : '150px' , justifyContent: 'space-between'  }} alignItems="center" spacing={2} > <OpacityIcon /> <Typography variant="h5" fontWeight="bolder"  >  Humidity :  </Typography> </Stack> <Typography variant="h5" >        { CityNameWeather.main.humidity } </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center"> <Stack direction="row" sx={{width : '150px' , justifyContent: 'space-between' }} alignItems="center" spacing={2} ><AccountTreeIcon/> <Typography variant='h5' > Pressure:</Typography  ></Stack> <Typography variant="h5" >        { CityNameWeather.main.pressure }  </Typography> </Stack>
    <Stack direction="row"  justifyContent="space-between"  width="60%"    alignItems="center" > <Stack direction="row"  sx={{width : '150px' , justifyContent: 'space-between' }}  alignItems="center" spacing={2} ><InfoIcon/> <Typography variant='h5' > Weather Info:</Typography  ></Stack> <Typography variant="h5" >        {  CityNameWeather.weather[0].description }  </Typography> </Stack> 
        </TabPanel>
 
 
      </SwipeableViewsContainer>
    </Box>
  );
}