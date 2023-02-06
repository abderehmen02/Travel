import axios from 'axios' ;
import "dotenv"





// export default async ( lat='51.509865' , lon='-0.118092' , priceMax='10000', priceMin='0'  ) =>{


// const options = {
//   method: 'GET',
//   url: 'https://priceline-com.p.rapidapi.com/hotels/city/nearby/37.788719679657554/-122.40057774847898',
//   params: {radius: '100'},
//   headers: {
//     'X-RapidAPI-Key': '755a496f99mshcc845d2e84994e3p1a6c8djsn13bf2bce5c56',
//     'X-RapidAPI-Host': 'priceline-com.p.rapidapi.com'
//   }
// };


// axios.get('https://priceline-com.p.rapidapi.com/hotels/city/nearby/37.788719679657554/-122.40057774847898'  , {
//   headers: {
//     'X-RapidAPI-Key': '755a496f99mshcc845d2e84994e3p1a6c8djsn13bf2bce5c56',
//     'X-RapidAPI-Host': 'priceline-com.p.rapidapi.com'
//   }

// }).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// axios.request(options).then(function (response) {
//   console.log(response.data)
// 	console.log(response.data);
// }).catch(function (error) {

// });
// return null
// }





// export const HotelReviews = async (geoid)=>{
// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//   params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
//   headers: {
//     'X-RapidAPI-Key': '755a496f99mshcc845d2e84994e3p1a6c8djsn13bf2bce5c56',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data)
// 	console.log(response.data);
// }).catch(function (error) {
//   console.log("post error")
// 	console.error(error);
// });
// return null
// }
// export const HotelPhotos = async (id)=>{  
//   var options = {
//   method: 'GET',
//   url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos',
//   params: {hotel_id: id},
//   headers: {
//     'x-rapidapi-host': process.env.REACT_APP_API_HOST,
//     'x-rapidapi-key': process.env.REACT_APP_API_KEY
//   }
// };
// //pie pie
// const response = await axios.request(options)
// return response.data
// }
// export const HotelDetais = async (id)=>{
//   var options = {
//   method: 'GET',
//   url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details',
//   params: {
//     adults_number: '1',
//     checkin_date: '2022-03-26',
//     locale: 'en_US',
//     currency: 'USD',
//     hotel_id: id,
//     checkout_date: '2022-03-27',
//     children_ages: '4,0'
//   },
//   headers: {
//     'x-rapidapi-host': process.env.REACT_APP_API_HOST,
//     'x-rapidapi-key': process.env.REACT_APP_API_KEY
//   }
// };

// const response = await axios.request(options)
// return response.data
// }



export const nearbyHotels = async (lat , long)=>{
  try{
const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/nearby-cities',
  params: {longitude: lat, locale: 'en-gb', latitude: long},
  headers: {
    'X-RapidAPI-Key': '16d419c209mshc5e16371018746ap1939f1jsn36c21016982a',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

const res = await axios.request(options)
  return ({data : res.data})
  }
catch (error){
  return ({error })
}
}