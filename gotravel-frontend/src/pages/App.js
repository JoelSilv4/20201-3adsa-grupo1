import React from 'react';
import Layout from '../components/Layout';
import ExternNavbar from '../components/Organisms/ExternNavbar'

const App = () => {
  return (
    <Layout>
      <ExternNavbar 
        first="Home"
        second="Sobre"
        third="Entrar"
      />
    </Layout>
  )
}

export default App;
