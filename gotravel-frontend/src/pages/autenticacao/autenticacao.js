import React, { useContext } from 'react';
import Login from '../../components/Organisms/Login/Login';
import Layout from '../../components/Layout';
import DispatchContext from '../../DispatchContext';

const Autenticacao = () => {
  const appDispatch = useContext(DispatchContext);
  appDispatch({ type: 'is-not-institutional' });

  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default Autenticacao;
