import React, { useContext } from 'react';
import DispatchContext from '../../DispatchContext';
import StateContext from '../../StateContext';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import Itinerario from '../../components/Organisms/Itinerario';

const Intinerarios = () => {
  const appDispatch = useContext(DispatchContext);
  appDispatch({ type: 'is-not-institutional' });

  const appState = useContext(StateContext);

  if (!appState.logged) {
    return <Redirect to="/auth" />;
  }

  return (
    <Layout>
      <Itinerario />
    </Layout>
  );
};

export default Intinerarios;
