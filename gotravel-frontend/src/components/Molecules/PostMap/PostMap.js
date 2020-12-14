import React, { useCallback, useEffect, useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import mapStyles from '../../Organisms/ContainerMaps/mapStyles';

const libraries = ['places', 'directions'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  styles: mapStyles, // mais estilos em SnazzyMaps
  disableDefaultUI: true,
  zoomControl: true,
};

function PostMap({ data, center }) {
  const [directionsResponse, setDirectionsResponse] = useState();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [map, setMap] = useState(null);

  const directionsCallback = (response) => {
    console.log('CUUUUUUUUUUUUUUUUUU', response);
    setDirectionsResponse(response);
  };

  const mapOnLoad = useCallback((map) => {
    setMap(map);
  }, []);

  useEffect(() => {
    setDestination({
      lat: () => data.trip.latDestiny,
      lng: () => data.trip.lngDestiny,
    });
    setOrigin({
      lat: () => data.trip.latMatch,
      lng: () => data.trip.lngMatch,
    });
  }, []);

  console.log(destination);
  console.log(origin);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={libraries}>
        <GoogleMap mapContainerStyle={mapContainerStyle} onLoad={mapOnLoad} center={center} zoom={15} options={options}>
          {destination && origin ? (
            <DirectionsService
              callback={directionsCallback}
              options={{
                destination: destination,
                origin: origin,
                travelMode: 'DRIVING',
              }}
            />
          ) : (
            <DirectionsService callback={directionsCallback} options={{}} />
          )}

          {directionsResponse ? <DirectionsRenderer directions={directionsResponse} /> : <DirectionsRenderer options={{}} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default PostMap;
