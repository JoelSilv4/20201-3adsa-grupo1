import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

import './style.css';
import { FormFiltros, MapWrapper } from './ContainerMaps.style';
import mapStyles from './mapStyles';

import you_icon from '../../../assets/you_here.png';
import Axios from 'axios';

import farmacia from '../../../assets/pharmacy.svg';
import restaurante from '../../../assets/restaurant.svg';
import bares from '../../../assets/beer.svg';
import hospitais from '../../../assets/hospital.svg';
import hoteis from '../../../assets/hotel.svg';
import estacionamentos from '../../../assets/estacionamento.svg';
import parques from '../../../assets/Parques.svg';
import mapmarker from '../../../assets/mapmarker.svg';
import flag from '../../../assets/flag.svg';
import minus from '../../../assets/minus.svg';
import plus from '../../../assets/plus.svg';

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

const CustomMarker = ({ icon, position }) => {
  return <Marker position={position} />;
};

const ContainerMaps = () => {
  const [filterMenu, setFilterMenu] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);
  const [map, setMap] = useState(null);
  const [markerUser, setMarkerUser] = useState();
  const [marker, setMarker] = useState();
  const [userLocation, setUserLocation] = useState(null);
  const [partida, setPartida] = useState(null);
  const [destino, setDestino] = useState(null);
  const [directionsOrigin, setDirectionsOrigin] = useState('');
  const [directionsDestiny, setDirectionsDestiny] = useState('');
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [directionsRef, setDirectionsRef] = useState(null);
  const [nearbyRoot, setNearbyRoot] = useState('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-23.5113192,-46.3942144&radius=500&type=restaurant&key=AIzaSyBw46FEvXL1fBBgw8bocxI-fYTcva5yTeQ');
  const [nearbySearch, setNearbySearch] = useState();
  const [nrbyLocation, setNearbyLocation] = useState();
  const [markers, setMarkers] = useState();

  function defineNearbyPlaces() {
    const rota = [];
    rota.push(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-23.5113192,-46.3942144&radius=500&type=${filterSelected ? filterSelected : 'restaurant'}&key=AIzaSyBw46FEvXL1fBBgw8bocxI-fYTcva5yTeQ`);
    console.log(rota[0]);

    Axios.get('https://cors-anywhere.herokuapp.com/' + rota[0], {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
      .then((response) => {
        console.log(response);
        setMarkers(null);
        const locais = [];

        response.data.results.forEach((local) => {
          locais.push(local.geometry.location);
        });

        setMarkers(locais);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    defineNearbyPlaces();
  }, [filterSelected]);

  useEffect(() => {
    defineNearbyPlaces();
  }, [nearbySearch]);

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
      map.setZoom(16);
      setMarkerUser(userLocation);
    }
  }, [userLocation, map]);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onClick = (e) => {
    // setMarker(e.latLng);
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
          <div className="formWrapper">
            <div className="form">
              <h2>Hora de planejar sua viagem.</h2>
              <div className="googleinput">
                <img src={mapmarker} alt="" />
                <StandaloneSearchBox onLoad={partidaRef} onPlacesChanged={handlePartida}>
                  <input className="autocomplete" placeholder="De onde você está partindo?" />
                </StandaloneSearchBox>
              </div>
              <div className="googleinput">
                <img src={flag} alt="" />
                <StandaloneSearchBox onLoad={destinoRef} onPlacesChanged={handleDestino}>
                  <input className="autocomplete" placeholder="Para onde você esta indo?" />
                </StandaloneSearchBox>
              </div>

              <div className="filtersWrapper">
                <div
                  className="openFilters"
                  onClick={() => {
                    setFilterMenu(!filterMenu);
                  }}
                >
                  <img src={plus} alt="" />
                  <p>Definir os filtros da viagem</p>
                </div>

                {filterMenu ? (
                  <form className="inputs">
                    <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('parques');
                        }}
                        type="radio"
                      />
                      <img src={parques} alt="" />
                      <label>Parques</label>
                    </div>
                    <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('restaurantes');
                        }}
                        type="radio"
                      />
                      <img src={restaurante} alt="" />
                      <label>Restaurantes</label>
                    </div>
                    <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('bares');
                        }}
                        type="radio"
                      />
                      <img src={bares} alt="" />
                      <label>Bares</label>
                    </div>
                    <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('hoteis');
                        }}
                        type="radio"
                      />
                      <img src={hoteis} alt="" />
                      <label>Hoteis</label>
                    </div>
                    {/* <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('estacionamento');
                        }}
                        type="radio"
                      />
                      <img src={estacionamentos} alt="" />
                      <label>Estacionamentos</label>
                    </div> */}
                    <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('farmacia');
                        }}
                        type="radio"
                      />
                      <img src={farmacia} alt="" />
                      <label>Farmácias</label>
                    </div>
                    <div className="filter">
                      <input
                        name="filtro"
                        onClick={() => {
                          setFilterSelected('hospital');
                        }}
                        type="radio"
                      />
                      <img src={hospitais} alt="" />
                      <label>Hospitais</label>
                    </div>
                  </form>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <div className="map">
            <GoogleMap onClick={onClick} mapContainerStyle={mapContainerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount} options={options}>
              {/* {marker ? <Marker position={marker} /> : <></>} */}
              {markerUser ? <Marker icon={you_icon} position={markerUser} /> : <></>}
              {markers ? (
                markers.map((item, ind) => {
                  return <CustomMarker key={ind} position={item} />;
                })
              ) : (
                <></>
              )}

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
