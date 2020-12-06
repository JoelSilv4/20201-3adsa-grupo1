import { InfoWindow } from '@react-google-maps/api';
import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../../../StateContext';

import { InfoWrapper } from './styles';

const CInfoWindow = (props) => {
  const placeData = props.data;
  const [image, setImage] = useState();

  const appState = useContext(StateContext);

  useEffect(() => {
    setImage(null);

    //Function para requisitar imagens
    function requestImage(photoreference, width, height) {
      if (!photoreference && !width && !height) {
        return;
      }

      // const url = `https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBw46FEvXL1fBBgw8bocxI-fYTcva5yTeQ&photoreference=${photoreference}&maxwidth=${width}&maxheight=${height}`;
      const url = `/trip/place_image/${photoreference}/${width}/${height}`;

      console.log('JWTKEY', appState.user.jwtkey);

      // return Axios.get('https://cors-anywhere.herokuapp.com/' + url)
      return Axios.get(url, { headers: { authorization: appState.user.jwtkey } })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (placeData.photos != null && placeData.photos != undefined) {
      requestImage(placeData.photos[0].photo_reference, placeData.photos[0].width, placeData.photos[0].height)
        .then((response) => {
          setImage(response.headers['x-final-url']);
        })
        .catch((thrown) => {
          if (Axios.isCancel(thrown)) {
            console.log('Requisição de imagem cancelada', thrown.message);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [placeData]);

  // Salva local
  const handleSave = () => {};

  return (
    <InfoWindow position={placeData.geometry.location}>
      <InfoWrapper>
        {image ? <img className="cape" src={image} /> : <div className="cape-unavailable"></div>}
        {placeData.name && <h1 className="name">{placeData.name}</h1>}
        <p></p>
        <button onClick={handleSave} className="save">
          Salvar local
        </button>
      </InfoWrapper>
    </InfoWindow>
  );
};

export default CInfoWindow;
