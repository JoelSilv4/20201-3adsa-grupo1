import React from 'react';
import { ViagensWrapper, BotoesWrapper } from './ContainerViagens.style';
import TitlePage from '../../Atoms/TitlePage/TitlePage';
import MapTrips from '../MapTrips';
import AddPost from '../../Molecules/AddPost';

const ContainerViagens = () => (
    <ViagensWrapper>
        <BotoesWrapper>
            <AddPost text="Importar viagem"/>
            <AddPost text="Exportar viagem"/>
        </BotoesWrapper>
        <TitlePage text="SUAS VIAGENS" />
        <MapTrips />
    </ViagensWrapper>

)

export default ContainerViagens;
