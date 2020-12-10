import React, { useContext, useEffect, useState } from 'react';
import {TitleMapsWrapper, TitleMaps, MapsWrapper} from './MapTrips.style';
import { ReactComponent as Image } from '../../../assets/plane.svg';
import Axios from 'axios';
import StateContext from '../../../StateContext';
import PostMap from '../../Molecules/PostMap'
import TitlePage from '../../Atoms/TitlePage';
import Error from '../Error'

const MapTrips = () => {
    const appState = useContext(StateContext);
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        Axios.get(`trip/${appState.user.id}`, { headers: { authorization: appState.user.jwtkey } })
          .then((e) => {
           setTrip(e.data.content);
          })
          .catch((e) => {
            console.error(e);
          });
      }, []);

      

      const renderTrips = () => (
        trip.map(item => {

        const latOBJ = parseFloat(item.latDestiny);
        const lngOBJ = parseFloat(item.lngDestiny);

        const center = {
          lat: latOBJ,
          lng: lngOBJ,
        };

         return (
        <>
        <TitleMapsWrapper>
            <TitleMaps>Origem: {item.destiny.split('-')[0]}</TitleMaps>
            <Image />
            <TitleMaps>Destino: {item.destiny.split('-')[1]} </TitleMaps>
        </TitleMapsWrapper>
        <MapsWrapper>
            <PostMap center={center}/>
        </MapsWrapper>
        </>
            )
        }
        ))

        const renderNoContent = () => (
            <Error nenhumText="nenhuma" text="viagem" buttonText="Fazer viagem" textCollor="#2D73DD"/>
        )
          
    return (
        trip.length > 0 ? renderTrips() : renderNoContent() 
    )
}

export default MapTrips;
