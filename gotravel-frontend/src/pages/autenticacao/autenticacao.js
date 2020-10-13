import React from 'react';
import FormLogin from '../../components/Molecules/FormLogin/FormLogin';
import Login from '../../components/Organisms/Login/Login';
import { Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout';

const Autenticacao = () => {
  return (
    <Layout>
      <Switch>
        <Route to="/login">
          <Login />
        </Route>
        <Route to="/register"></Route>
      </Switch>
    </Layout>
  );
};

export default Autenticacao;
