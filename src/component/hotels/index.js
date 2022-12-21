import React , {useState , useEffect , useReducer , useCallback } from 'react'
import GoogleMapReact from 'google-map-react';
import  { StarHalf , StarOutline} from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';
import data from './data'
import { Box , TextField  , Typography } from '@mui/material'
import {useHistory } from 'react-router-dom'
function City() {
const history = useHistory()
const [MapMarkerLat, setMapMarkerLat] = useState('51.509865')
const [PriceMin, setPriceMin] = useState(0)
const [PriceMax, setPriceMax] = useState(1000000)
const [MapMarkerLon, setMapMarkerLon] = useState('-0.118092')
const [state, dispatch] = useReducer(reducer, {status: false , Hotels: []})
const showPosition = (position) =>{
    // data(position.coords.latitude , position.coords.longitude).then(res =>{
   // })
setMapMarkerLat(position.coords.latitude.toString() )
setMapMarkerLon(position.coords.longitude.toString() )
}
function reducer (state , action){
    switch (action.type) {
        case 'Add-hotels':  return ({ Hotels : action.Hotels , status : true })
        case 'error' :  return ({  Hotels :[] , status : false})  ;   
        case 'loading' :  return ({Hotels : ['loading'] , status : false })   
        default:  return ({ Hotels : [] , status :false })
    }
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
const getHotels = ()=>{
  if(localStorage.getItem('hotelsData')){
    dispatch({type: 'Add-hotels' , Hotels : JSON.parse( localStorage.getItem('hotelsData') ) })
  }
else{
 dispatch({type: 'loading' , Hotels: [] })
data(MapMarkerLat  , MapMarkerLon , PriceMax , PriceMin ).then(res =>{
localStorage.setItem('hotelsData' , JSON.stringify( res.searchResults.results) )
    dispatch({type: 'Add-hotels' , Hotels : res.searchResults.results })
    }).catch(err =>{
dispatch({type: 'error' , Hotels: []})
    })
  }
}
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
const HotelsComponent =  useCallback( ()=>{
if(state.status  && state.Hotels.length){
return <div  className='hotelsComponent' > 
 { state.Hotels.map(item => <div className='HotelComponent'>
<div className='info' > 
<span>{item.address.countryName}</span>
<span> {item.address.locality}</span>
<span>{item.address.streetAddress}</span> 
<span> {item.ratePlan.price.current}</span>
</div>
<div className='HotelThumbnail' style={{backgroundImage: `url(${item.optimizedThumbUrls.srpDesktop})`}}  > </div>
<div className='footer' >
<button onClick={()=>{history.push(`/hotelDetails/${item.id}`)}} >More Details </button>
<RatingComponent rate={item.guestReviews.rating} />
     </div>   
</div> ) }</div> 
}
else if(state.status  && !state.Hotels.length) return  <div className='hotelErr'> <h1 > it seems that there  is no hotel in this place</h1></div>
else if(!state.status &&  state.Hotels.length ) return (<div>this is the skeleton </div>)
else if(!state.status && !state.Hotels.length) return <div className='hotelErr' > <h1  > error !! can't fetch the data  </h1></div>
else return <h1>some error happened</h1>
} , [state] )
useEffect(() => {
  getLocation()
   getHotels()
}, [])
return ( 
<Box >
<Typography>Hotels </Typography>
<Box >
      <Box > <GoogleMapReact
        onClick={ (e)=>{  setMapMarkerLat(e.lat.toString()) ; setMapMarkerLon(e.lng.toString()) } }
       defaultCenter={{
      lat: Number(MapMarkerLat),
      lng: Number(MapMarkerLon)}}
          defaultZoom={11}
        >
<Box  lat={Number(MapMarkerLat)}
            lng={Number(MapMarkerLon)} >
        </Box>
        </GoogleMapReact></Box>
        <Box className='parameters' >
  <StarIcon onClick={myLocation} />
  <Box variant='extended' onClick={getHotels} >
Search Hotels
  </Box>
  <TextField type='number' value={PriceMin} onChange={(e)=>{setPriceMin(e.target.value)}} />
  <TextField type='number' value={PriceMax} onChange={(e)=>{ setPriceMax(e.target.value) }} ></TextField>
  </Box>
  <Box>
  <HotelsComponent/>
</Box></Box></Box>
    )
}

export default City
