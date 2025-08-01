import Places from './Places.jsx';
import { useState,useEffect } from 'react';

import Error from './Error.jsx'

import {sortPlacesByDistance} from '../loc.js' ;
import {fetchAvailablePlaces} from '../http.js';

//const places = localStorage.getItem('places');
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);

  const [availablePlaces,setAvailablePlaces] = useState([]);

  const [error, setError] =useState();

  useEffect(()=> {
    async function fetchPlaces(){ 
     setIsFetching(true);
     try {
      const places = await fetchAvailablePlaces();
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitud,
          position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });
     }catch(error){
      setError({message: error.message || 'No se pudo ',});
      setIsFetching(false);
     }
    
    }
    fetchPlaces();
  },[]);

  if(error){
    return <Error title= "An error ocurred" message={ error.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data.."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
