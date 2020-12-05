import { InfoWindow } from '@react-google-maps/api';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import { InfoWrapper } from './styles';

const CInfoWindow = (props) => {
  const placeData = props.data;
  const [image, setImage] = useState();

  useEffect(() => {
    //Function para requisitar imagens
    function requestImage(photoreference, width, height) {
      if (!photoreference && !width && !height) {
        return;
      }
      const url = `https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBw46FEvXL1fBBgw8bocxI-fYTcva5yTeQ&photoreference=${photoreference}&maxwidth=${width}&maxheight=${height}`;

      return Axios.get('https://cors-anywhere.herokuapp.com/' + url)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (placeData.photos[0] != null) {
      console.log(placeData.photos[0].photo_reference);
      requestImage(placeData.photos[0].photo_reference, placeData.photos[0].width, placeData.photos[0].height).then((response) => {
        setImage(response.data);
      });
    }
  }, []);

  return (
    <InfoWindow position={placeData.geometry.location}>
      <InfoWrapper>
        {image ? console.log(image) : <></>}
        {placeData.name && <h1 className="name">{placeData.name}</h1>}
        <p></p>
      </InfoWrapper>
    </InfoWindow>
  );
};

export default CInfoWindow;
