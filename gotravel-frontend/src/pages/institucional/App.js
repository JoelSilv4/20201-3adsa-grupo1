import React from 'react';
import Layout from '../../components/Layout';
import ExternNavbar from '../../components/Organisms/ExternNavbar';
import ContainerTop from '../../components/Organisms/ContainerTop';
import ContainerKnowMore from '../../components/Organisms/ContainerKnowMore';


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
      titleColorInfo='#000000'
      textTitleInfo='Diga onde você quer ir'
      textColorInfo='#FFFFFF'
      textInfo='Informe sua localização e o seu destino'
      textTitleInfo2='Filtre com base nos seus serviços favoritos'
      textInfo2='Selecione o que você quer encontrar pelo caminho '

      />
    </Layout>
  )
}

export default App;
