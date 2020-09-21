import React from 'react';
import Layout from '../components/Layout';
import ExternNavbar from '../components/Organisms/ExternNavbar'
import ContainerImageBackground from '../components/Molecules/ContainerImageBackground'
import img from '../components/assets/banner-image.png';
import ContainerKnowMore from '../components/Organisms/ContainerKnowMore'
import {ReactComponent as ProcessIcon} from '../components/assets/process.svg'

const App = () => {
  return (
    <Layout>
      <ExternNavbar 
        first="Home"
        second="Sobre"
        third="Entrar"
      />
      <ContainerImageBackground
        title='Explore novos horizontes.'
        image={img}
        fontColor='#FFF'
      />
      <ContainerKnowMore 
        title='Planeje suas viagens!'
        icon={<ProcessIcon />}
        description='Com o nosso sistema, você poderá ter uma organização melhor da sua viagem ao criar uma agenda de pontos de paradas!'
        textButton='Saiba mais!'
        textColorButton='black'>
        </ContainerKnowMore>
    </Layout>
  )
}

export default App;
