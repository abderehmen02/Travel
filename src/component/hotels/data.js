import axios from 'axios' ;
import "dotenv"
export default async ( lat='51.509865' , lon='-0.118092' , priceMax='10000', priceMin='0'  ) =>{
var options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby',
  params: {
    latitude: lat,
    currency: 'USD',
    longitude: lon ,
    checkout_date: '2022-03-27',
    sort_order: 'STAR_RATING_HIGHEST_FIRST',
    checkin_date: '2022-03-26',
    adults_number: '1',
    locale: 'en_US',
    guest_rating_min: '4',
    star_rating_ids: '3,4,5',
    children_ages: '4,0,15',
    page_number: '1',
    price_min: priceMin,
    accommodation_ids: '20,8,15,5,1',
    theme_ids: '14,27,25',
    price_max: priceMax,
    amenity_ids: '527,2063'
  },
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
};
const res = await  axios.request(options)
return res.data
} 
export const HotelReviews = async (geoid)=>{
  var options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews',
  params: {locale: 'en_US', hotel_id: geoid , page_number: '1'},
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
};

const response = await axios.request(options)
return response.data
}
export const HotelPhotos = async (id)=>{  
  var options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos',
  params: {hotel_id: id},
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
};
//pie pie
const response = await axios.request(options)
return response.data
}
export const HotelDetais = async (id)=>{
  var options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details',
  params: {
    adults_number: '1',
    checkin_date: '2022-03-26',
    locale: 'en_US',
    currency: 'USD',
    hotel_id: id,
    checkout_date: '2022-03-27',
    children_ages: '4,0'
  },
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
};

const response = await axios.request(options)
return response.data
}
