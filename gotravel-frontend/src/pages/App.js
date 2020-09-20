import React from 'react';
import Layout from '../components/Layout';
import ExternNavbar from '../components/Organisms/ExternNavbar'
import ContainerImageBackground from '../components/Molecules/ContainerImageBackground'
import Button from '../components/Atoms/Button'
import img from '../components/assets/banner-image.png';

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
      <Button
        text='Saiba Mais'
        textColor='black'
      />
    </Layout>
  )
}

export default App;
