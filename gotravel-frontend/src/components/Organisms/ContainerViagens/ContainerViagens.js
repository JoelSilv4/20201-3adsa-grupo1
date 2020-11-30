import React from 'react';
import {ViagensWrapper} from './ContainerViagens.style';
import TitlePage from '../../Atoms/TitlePage/TitlePage';
import MapTrips from '../MapTrips'

const ContainerViagens = () => (
    <ViagensWrapper>
        <TitlePage text="SUAS VIAGENS" />
        <MapTrips />
    </ViagensWrapper>

)

export default ContainerViagens;
