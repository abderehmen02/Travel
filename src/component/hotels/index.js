import React , {useState , useEffect , useReducer , useCallback } from 'react'
import GoogleMapReact from 'google-map-react';
import  { StarHalf , StarOutline} from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';
import { nearbyHotels } from './data'
import { Box , TextField  , Typography , styled, Button } from '@mui/material'
import {useHistory } from 'react-router-dom'
import NavBar from '../navBar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Stack } from '@mui/system';


const ActionTypes={
  ADD_HOTELS: 'Add-hotels',
  ERROR: 'error' ,
  LOADING : 'loading',
}



function City() {
const history = useHistory()
const [MapMarkerLat, setMapMarkerLat] = useState('51.509865')
const [MapMarkerLon, setMapMarkerLon] = useState('-0.118092')
const [state, dispatch] = useReducer(reducer, {status: false , Hotels: []})


const showPosition = (position) =>{
    // data(position.coords.latitude , position.coords.longitude).then(res =>{
   // })
setMapMarkerLat(position.coords.latitude.toString() )
setMapMarkerLon(position.coords.longitude.toString() )
}
// components

const HeaderBox = styled(Box)()
const HotelPage = styled(Box)(({theme})=>({
  width : '100vw' , 
  minHeight : '100vh' ,
  display : 'flex' ,
  alignItems : 'center' , 
  justifyContent : 'start' ,
  backgroundColor : theme.palette.primary.main ,
  flexDirection : 'column'
}))



// const StyledTextField = styled(TextField)(({theme})=>({
//   '& label.Mui-focused': {
//     color: theme.palette.dark.dark,
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'black',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: theme.palette.dark.dark,
//     },
//     '&:hover fieldset': {
//       borderColor: theme.palette.dark.dark,
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: theme.palette.dark.dark,
//     },
//   },
//   backgroundColor : theme.palette.white.main,
//    borderTopLeftRadius : theme.spacing(1) ,
//    borderTopRightRadius : theme.spacing(1)
// }));





// functions

function reducer (state , action){
    switch (action.type) {
        case ActionTypes.ADD_HOTELS:  return ({ Hotels : action.Hotels , status : action.type })
        case  ActionTypes.ERROR :  return ({  Hotels :[] , status : action.type})  ;   
        case  ActionTypes.LOADING :  return ({Hotels : [] , status : action.type })   
        default:  return ({ Hotels : [] , status :false })
    }
}

// functional components
const HotelComponent = ({hotel})=>{
  return <Stack sx={{padding : '16px' , backgroundColor: '#fff' , boxShadow :'2px 2px 4px black'  , borderRadius : '8px' }} spacing={2} >
    <Typography variant="h4" textAlign="center" >{hotel.name}</Typography>
    <Stack direction="row" spacing='80px' ><Typography>{hotel.region}</Typography><Typography>distance : {Number(hotel.distance).toFixed(2)}</Typography> </Stack>
  </Stack>
}


function HotelsComponent (){
return <Stack>
{state.status === ActionTypes.LOADING && <Typography>Loading...</Typography> } 
{state.status === ActionTypes.ADD_HOTELS && state.Hotels.length && <Stack spacing={1} >{state.Hotels.map(hotel =><HotelComponent hotel={hotel}/>)}</Stack>}      
{state.status === ActionTypes.ADD_HOTELS && !state.Hotels.length && <Typography>There is no hotels near this place</Typography> }
{state.sttatus === ActionTypes.ERROR && <Typography>Some Error Happened , Please Try Later</Typography>}
</Stack>
}

const PositionError = (err)=>{
    // data().then(res =>{
    //     console.log(res)
    //     setHotels(res.searchResults.results)
    // })
    setMapMarkerLat('59.955413')
    setMapMarkerLon('30.337844')
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition , PositionError);
  } else {
   alert("Sorry ... ! this browser doesn't support location  ")
  } 
}

async function getHotels(){
  dispatch({type: ActionTypes.LOADING})
  const {data , error} = await nearbyHotels(MapMarkerLat , MapMarkerLon) ;
  console.log(data)
  if(data){
  dispatch({type: ActionTypes.ADD_HOTELS , Hotels: data}) ;
  }
  else if(error){
  dispatch({type : ActionTypes.ERROR})
  console.log(error)
  }
}

useEffect(() => {
  
getHotels()
  return () => {
  }
}, [[MapMarkerLat , MapMarkerLon]])

// const getHotels = ()=>{
//   if(localStorage.getItem('hotelsData')){
//     dispatch({type: 'Add-hotels' , Hotels : JSON.parse( localStorage.getItem('hotelsData') ) })
//   }
// else{
//  dispatch({type: 'loading' , Hotels: [] })

//  console.log("mapmarkerlat")
//  console.log(MapMarkerLat)
//  console.log(MapMarkerLon)
//  console.log(PriceMax)
//  console.log(PriceMin)
// data(MapMarkerLat  , MapMarkerLon , PriceMax , PriceMin ).then(res =>{
// localStorage.setItem('hotelsData' , JSON.stringify( res.searchResults.results) )
//     dispatch({type: 'Add-hotels' , Hotels : res.searchResults.results })
//     }).catch(err =>{
//   console.log("error")
//   console.log(err)
// dispatch({type: 'error' , Hotels: []})
//     })
//   }
// }
const myLocation = ()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition , PositionError );
  } else {
   alert('sorry this browser does not support location')
}
}
const RatingComponent =({rate})=>{
const stars = [ 1 , 2 , 3 , 4 , 5]
return <div className='ratingComponent' >  
{ stars.map(item => {return <div> {item <= Math.floor(rate) ? <StarIcon/> :(  rate > item - 1 && Math.floor(rate) ==  item -1 ? <StarHalf/> : <StarOutline/> ) }  </div>} ) }
</div>
}
// const HotelsComponent =  useCallback( ()=>{
// if(state.status  && state.Hotels.length){
// return <div  className='hotelsComponent' > 
//  { state.Hotels.map(item => <div className='HotelComponent'>
// <div className='info' > 
// <span>{item.address.countryName}</span>
// <span> {item.address.locality}</span>
// <span>{item.address.streetAddress}</span> 
// <span> {item.ratePlan.price.current}</span>
// </div>
// <div className='HotelThumbnail' style={{backgroundImage: `url(${item.optimizedThumbUrls.srpDesktop})`}}  > </div>
// <div className='footer' >
// <button onClick={()=>{history.push(`/hotelDetails/${item.id}`)}} >More Details </button>
// <RatingComponent rate={item.guestReviews.rating} />
//      </div>   
// </div> ) }</div> 
// }
// else if(state.status  && !state.Hotels.length) return  <div className='hotelErr'> <h1 > it seems that there  is no hotel in this place</h1></div>
// else if(!state.status &&  state.Hotels.length ) return (<div>this is the skeleton </div>)
// else if(!state.status && !state.Hotels.length) return <div className='hotelErr' > <h1  > error !! can't fetch the data  </h1></div>
// else return <h1>some error happened</h1>
// } , [state] )
useEffect(() => {
  getLocation()
  //  getHotels()
}, [])
    return <HotelPage>
    <NavBar/>
      <Typography variant='h3' margin={2} >Hotels</Typography>
      <HeaderBox>
<Box sx={{width : '90vw'  , height : '20vh' }} >
<GoogleMapReact
        onClick={ (e)=>{  setMapMarkerLat(e.lat.toString()) ; setMapMarkerLon(e.lng.toString()) } }
       defaultCenter={{
      lat: Number(MapMarkerLat),
      lng: Number(MapMarkerLon)}}
          defaultZoom={11}
        >

<Box  >
        </Box>
        <LocationOnIcon lat={Number(MapMarkerLat)}
            lng={Number(MapMarkerLon)}  />
        </GoogleMapReact>    
</Box>
        <Box  sx={{display : 'flex' , alignItems: 'center' , justifyContent : 'space-around' , margin : '24px'}} >
        </Box>
      </HeaderBox>
      <Box>
      <HotelsComponent/>
      </Box>
    </HotelPage>
//     return ( 
// <Box >
// <Typography>Hotels </Typography>
// <Box >
//       <Box > <GoogleMapReact
//         onClick={ (e)=>{  setMapMarkerLat(e.lat.toString()) ; setMapMarkerLon(e.lng.toString()) } }
//        defaultCenter={{
//       lat: Number(MapMarkerLat),
//       lng: Number(MapMarkerLon)}}
//           defaultZoom={11}
//         >
// <Box  lat={Number(MapMarkerLat)}
//             lng={Number(MapMarkerLon)} >
//         </Box>
//         </GoogleMapReact></Box>
//         <Box className='parameters' >
//   <StarIcon onClick={myLocation} />
//   <Box variant='extended' onClick={getHotels} >
// Search Hotels
//   </Box>
//   <TextField type='number' value={PriceMin} onChange={(e)=>{setPriceMin(e.target.value)}} />
//   <TextField type='number' value={PriceMax} onChange={(e)=>{ setPriceMax(e.target.value) }} ></TextField>
//   </Box>
//   <Box>
//   <HotelsComponent/>
// </Box></Box></Box>
//     )

}

export default City
