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
    const [trip, setTrip] = useState([
        {
            "id": "aaa5fc57a58c5cf2b1cbae39b06",
            "latMatch": "-3.222",
            "lngMatch": "-34.533",
            "latDestiny": "-3.115",
            "lngDestiny": "-32.523",
            "destiny": "Avenida Paulista ; Rua Horácio de Carvalho",
            "idUser": "5fc556949197b03c48816a9f"
        }
    ]);
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

      const renderItinerario = () => {

        const latOBJ = parseFloat(trip[0].latDestiny);
        const lngOBJ = parseFloat(trip[0].lngDestiny);

        const center = {
          lat: latOBJ,
          lng: lngOBJ,
        };

         return (
        <>
        <TitleMapsWrapper>
            <TitleMaps>Origem: {trip[0].destiny.split(';')[0]}</TitleMaps>
            <Image />
            <TitleMaps>Destino: {trip[0].destiny.split(';')[1]} </TitleMaps>
        </TitleMapsWrapper>
        <MapsWrapper>
            <PostMap center={center}/>
        </MapsWrapper>
        </>
            )}

     return (
        <Container >
        <TitlePage text="SUA VIAGEM" />
        { loanding ? renderItinerario() : <ContainerGif id= "teste"><img src={Car} alt="loading..." /></ContainerGif> }
    </Container>
     )  
}

export default Itinerario