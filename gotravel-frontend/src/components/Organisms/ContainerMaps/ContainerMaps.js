import React, { useCallback, useState } from 'react';
import { GoogleMap, useLoadScript, LoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

import './style.css';
import { MapWrapper } from './ContainerMaps.style';
import mapStyles from './mapStyles';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const options = {
  styles: mapStyles, // mais estilos em SnazzyMaps
  disableDefaultUI: true,
  zoomControl: true,
};

const ContainerMaps = () => {
  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ContainerMaps;
