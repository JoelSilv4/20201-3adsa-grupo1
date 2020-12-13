import React, { useContext, useEffect, useState } from 'react';
import TitlePage from '../../Atoms/TitlePage';
import { Container } from './Itinerario.style'
import StateContext from '../../../StateContext';
import { ReactComponent as Image } from '../../../assets/plane.svg';
import { TitleMapsWrapper, TitleMaps, MapsWrapper, ContainerGif } from '../MapTrips/MapTrips.style';
import PostMap from '../../Molecules/PostMap'
import Axios from 'axios';
import Car from '../../../assets/car-loading.gif'

const Itinerario = () => {

    const appState = useContext(StateContext);
    const [trip, setTrip] = useState([]);
    const [loanding, setLoanding] = useState(false)

    useEffect(() => {
        Axios.get(`trip/${appState.user.id}`, { headers: { authorization: appState.user.jwtkey } })
          .then((e) => {
            setLoanding(true)
           setTrip(e.data.content);
          })
          .catch((e) => {
            console.error(e);
          });
      }, []);

      console.log(trip)

      const renderItinerario = () => (
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
            <TitleMaps>Origem: {item.destiny.split(';')[0]}</TitleMaps>
            <Image />
            <TitleMaps>Destino: {item.destiny.split(';')[1]} </TitleMaps>
        </TitleMapsWrapper>
        <MapsWrapper>
            <PostMap center={center}/>
        </MapsWrapper>
        </>
            )
        }
        ))

     return (
        <Container >
        <TitlePage text="SUA VIAGEM" />
        { loanding ? renderItinerario() : <ContainerGif id= "teste"><img src={Car} alt="loading..." /></ContainerGif> }
    </Container>
     )  
}

export default Itinerario