import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

import './style.css';
import { MapWrapper } from './ContainerMaps.style';
import mapStyles from './mapStyles';

const libraries = ['places', 'directions'];

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
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState();
  const [userLocation, setUserLocation] = useState(null);
  const [partida, setPartida] = useState(null);
  const [destino, setDestino] = useState(null);
  const [directionsOrigin, setDirectionsOrigin] = useState('');
  const [directionsDestiny, setDirectionsDestiny] = useState('');
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [directionsRef, setDirectionsRef] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        setUserLocation({
          lat: data.coords.latitude,
          lng: data.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    if (userLocation && map) {
      map.panTo(userLocation);
      map.setZoom(13);
    }
  }, [userLocation]);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onClick = (e) => {
    setMarker(e.latLng);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const partidaRef = (ref) => setPartida(ref);

  const destinoRef = (ref) => setDestino(ref);

  const handlePartida = (e) => {
    const { location } = partida.getPlaces()[0].geometry;
    map.panTo(location);
    map.setZoom(16);
    setMarker(location);
    setDirectionsOrigin(location);
  };

  const handleDestino = (e) => {
    const { location } = destino.getPlaces()[0].geometry;
    setMarker(null);
    setDirectionsDestiny(location);
  };

  const directionsCallback = (response) => {
    setDirectionsResponse(response);
    // console.log('OBJETO DE DIREÇÕES', response);
  };

  const directRef = (ref) => setDirectionsRef(ref);

  const rendererOnLoad = (lulz) => {
    console.log('ref: ', directRef);
  };

  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={libraries}>
        <div className="divider">
          <div className="form">
            <h2>Hora de planejar sua viagem.</h2>
            <StandaloneSearchBox onLoad={partidaRef} onPlacesChanged={handlePartida}>
              <input className="autocomplete" placeholder="De onde você está partindo?" />
            </StandaloneSearchBox>
            <StandaloneSearchBox onLoad={destinoRef} onPlacesChanged={handleDestino}>
              <input className="autocomplete" placeholder="Para onde você esta indo?" />
            </StandaloneSearchBox>
            {/* <button>Definir rota</button> */}
          </div>

          <div className="map">
            <GoogleMap onClick={onClick} mapContainerStyle={mapContainerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount} options={options}>
              {marker ? <Marker position={marker} /> : <></>}

              {directionsDestiny !== '' && directionsOrigin !== '' ? (
                <DirectionsService
                  callback={directionsCallback}
                  options={{
                    destination: directionsDestiny,
                    origin: directionsOrigin,
                    travelMode: 'WALKING',
                  }}
                />
              ) : (
                <DirectionsService callback={directionsCallback} options={{}} />
              )}

              {directionsResponse !== null ? (
                <DirectionsRenderer
                  directions={directionsResponse}
                  ref={directRef}
                  options={{
                    directions: directionsResponse,
                  }}
                  onLoad={rendererOnLoad}
                />
              ) : (
                <DirectionsRenderer options={{}} />
              )}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>
    </MapWrapper>
  );
};

export default ContainerMaps;
