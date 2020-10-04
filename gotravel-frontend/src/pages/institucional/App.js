import React from 'react';
import Layout from '../../components/Layout';
import ExternNavbar from '../../components/Organisms/ExternNavbar';
import ContainerTop from '../../components/Molecules/ContainerTop';
import ContainerRegister from '../../components/Organisms/ContainerRegister';
import ContainerKnowMore from '../../components/Organisms/ContainerKnowMore';
import {ReactComponent as ProcessIcon} from '../../components/assets/process.svg';
import {ReactComponent as MapIcon} from '../../components/assets/map-icon.svg';

const App = () => {
  return (
    <Layout>
      <ExternNavbar 
        first="Home"
        second="Sobre"
        textButton='Entrar'
        textColorButton='#2D73DD'
      />
      <ContainerTop
      textButton='Entrar'
      textColorButton='#2D73DD'
      />
      <ContainerKnowMore 
        title='Planeje suas viagens!'
        icon={<ProcessIcon />}
        description='Com o nosso sistema, você poderá ter uma organização melhor da sua viagem ao criar uma agenda de pontos de paradas!'
        textButton='Saiba mais!'
        textColorButton='black'
      />
      <ContainerKnowMore
        title='Filtre e conheça novos lugares!'
        icon={<MapIcon />}
        description='A GO Travel! oferece uma variedade de filtros para você pesquisar por estabelecimentos ou serviços para enriquecer sua viagem!'
        backgroundColor="#FFF2E1"
        textButton='Saiba mais!'
        textColorButton='black'
      />
      <ContainerRegister 
        textButton='Cadastre-se'
        textColorButton='black'
      />
    </Layout>
  )
}

export default App;
