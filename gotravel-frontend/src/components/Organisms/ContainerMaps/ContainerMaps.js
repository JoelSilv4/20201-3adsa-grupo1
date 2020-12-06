import React, { useCallback, useContext, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, DirectionsService, DirectionsRenderer, InfoWindow } from '@react-google-maps/api';

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
import CInfoWindow from '../../Molecules/CInfoWindow';
import StateContext from '../../../StateContext';
import FilterList from '../FilterList';

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
  const [nearbySearch, setNearbySearch] = useState();
  const [markers, setMarkers] = useState();

  // Contém os locais selecionados pelo usuário
  const [placesSaved, setPlacesSaved] = useState();

  // Controle do centro do nearbySearch
  const [nearbySearchCenter, setNearbySearchCenter] = useState();
  const [canRender, setCanRender] = useState(true);

  // Controle da InfoWindow para visualizar
  // infos do local selecionado
  const [infoWindow, setInfoWindow] = useState(false);

  const appState = useContext(StateContext);

  //Function que lida com o clica em um marcador de comércio
  function handleFilterMarker(place) {
    setInfoWindow(place);
  }

  useEffect(() => {
    function defineNearbyPlaces() {
      const rota = [];
      // rota.push(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${nearbySearchCenter.lat},${nearbySearchCenter.lng}&radius=${'1500'}&type=${filterSelected}&key=AIzaSyBw46FEvXL1fBBgw8bocxI-fYTcva5yTeQ`);
      rota.push(`/trip/place_location/${nearbySearchCenter.lat}/${nearbySearchCenter.lng}/1500/${filterSelected ? filterSelected : 'restaurant'}`);

      // Axios.get('https://cors-anywhere.herokuapp.com/' + rota[0], {
      Axios.get(rota[0], { headers: { authorization: appState.user.jwtkey } })
        .then((response) => {
          setMarkers(null);
          const locais = [];

          response.data.results.forEach((local) => {
            locais.push(local);
          });

          setMarkers(locais);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (canRender && nearbySearchCenter && filterSelected) {
      defineNearbyPlaces();
    }

    setCanRender(false);
    setTimeout(() => {
      setCanRender(true);
    }, 500);
  }, [filterSelected, nearbySearchCenter]);

  // useEffect(() => {
  //   defineNearbyPlaces();
  // }, [nearbySearch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        setUserLocation({
          lat: data.coords.latitude,
          lng: data.coords.longitude,
        });
        setNearbySearchCenter({
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

                {!filterMenu ? (
                  <form className="inputs">
                    <div className="filter">
                      <div className="container">
                        <input
                          name="filtro"
                          onClick={() => {
                            setFilterSelected('parques');
                          }}
                          type="radio"
                        />
                        <span className="checkmark"></span>
                      </div>
                      <img src={parques} alt="" />
                      <label>Parques</label>
                    </div>

                    <div className="filter">
                      <div className="container">
                        <input
                          name="filtro"
                          onClick={() => {
                            setFilterSelected('restaurantes');
                          }}
                          type="radio"
                        />
                        <span className="checkmark"></span>
                      </div>
                      <img src={restaurante} alt="" />
                      <label>Restaurantes</label>
                    </div>

                    <div className="filter">
                      <div className="container">
                        <input
                          name="filtro"
                          onClick={() => {
                            setFilterSelected('bares');
                          }}
                          type="radio"
                        />
                        <span className="checkmark"></span>
                      </div>
                      <img src={bares} alt="" />
                      <label>Bares</label>
                    </div>
                    <div className="filter">
                      <div className="container">
                        <input
                          name="filtro"
                          onClick={() => {
                            setFilterSelected('hoteis');
                          }}
                          type="radio"
                        />
                        <span className="checkmark"></span>
                      </div>
                      <img src={hoteis} alt="" />
                      <label>Hoteis</label>
                    </div>

                    <div className="filter">
                      <div className="container">
                        <input
                          name="filtro"
                          onClick={() => {
                            setFilterSelected('farmacia');
                          }}
                          type="radio"
                        />
                        <span className="checkmark"></span>
                      </div>
                      <img src={farmacia} alt="" />
                      <label>Farmácias</label>
                    </div>

                    <div className="filter">
                      <div className="container">
                        <input
                          name="filtro"
                          onClick={() => {
                            setFilterSelected('hospital');
                          }}
                          type="radio"
                        />
                        <span className="checkmark"></span>
                      </div>
                      <img src={hospitais} alt="" />
                      <label>Hospitais</label>
                    </div>
                  </form>
                ) : (
                  <></>
                )}
              </div>

              <FilterList placesSaved={placesSaved} />
            </div>
          </div>

          <div className="map">
            <GoogleMap
              onDrag={(e) => {
                setNearbySearchCenter({
                  lat: map.center.lat((r) => r),
                  lng: map.center.lng((r) => r),
                });
              }}
              onClick={onClick}
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={options}
            >
              {/* {marker ? <Marker position={marker} /> : <></>} */}
              {markerUser ? <Marker icon={you_icon} position={markerUser} /> : <></>}
              {markers ? (
                markers.map((place, ind) => {
                  return (
                    <Marker
                      key={ind}
                      position={place.geometry.location}
                      onClick={() => {
                        handleFilterMarker(place);
                      }}
                    ></Marker>
                  );
                })
              ) : (
                <></>
              )}

              {infoWindow ? <CInfoWindow data={infoWindow}></CInfoWindow> : <></>}

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
