import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import mapStyles from './mapStyles';
// import { formatRelative } from 'date-fns';
// import { getGeocode, getLatLng } from 'use-places-autocomplete';
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import { Logo } from './ContainerMaps.style';

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
};

const center = {
    lat: 43.653225,
    lng: -79.383186
};

const options = {
    styles: mapStyles, // mais estilos em SnazzyMaps
    disableDefaultUI: true,
    zoomControl: true
};

const ContainerMaps = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    if (loadError) return "Erro carregando o google maps";
    if (!isLoaded) return "Carregando o maps";

    return (
        <div>
            <Logo />
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={8}
                center={center}
                options={options}
            ></GoogleMap>
        </div>
    )
}

export default ContainerMaps;