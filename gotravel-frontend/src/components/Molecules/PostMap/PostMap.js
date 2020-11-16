import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
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

function PostMap({ center }) {
  const [map, setMap] = useState(null);

  const mapOnLoad = useCallback((map) => {
    setMap(map);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={libraries}>
        <GoogleMap mapContainerStyle={mapContainerStyle} onLoad={mapOnLoad} center={center} zoom={15} options={options}></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default PostMap;
