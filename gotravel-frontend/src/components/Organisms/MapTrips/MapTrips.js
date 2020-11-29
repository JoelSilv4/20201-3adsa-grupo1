import React, { useContext, useEffect, useState } from 'react';
import {TitleMapsWrapper, TitleMaps} from './MapTrips.style';
import { ReactComponent as Image } from '../../../assets/plane.svg';
import Axios from 'axios';
import StateContext from '../../../StateContext';
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
        trip.map(item => (
        <TitleMapsWrapper>
            <TitleMaps>Origem: {item.id}</TitleMaps>
            <Image />
            <TitleMaps>Destino: {item.destiny} </TitleMaps>
        </TitleMapsWrapper>
        )))

        const renderNoContent = () => (
            <Error nenhumText="nenhuma" text="viagem" buttonText="Fazer viagem" textCollor="#2D73DD"/>
        )
          
    return (
        trip.length > 0 ? renderTrips() : renderNoContent() 
    )
}

export default MapTrips;
