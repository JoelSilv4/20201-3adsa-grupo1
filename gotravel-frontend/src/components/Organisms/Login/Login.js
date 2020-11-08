import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import FormLogin from '../../Molecules/FormLogin/FormLogin';
import FormRegister from '../../Molecules/FormRegister/FormRegister';
import { FirstContainer, ArtContainer, FormContainer, FormStyle } from '../../Molecules/FormLogin/Form.style';

import StateContext from '../../../StateContext';
import DispatchContext from '../../../DispatchContext';
import Layout from '../../Layout';

const Login = (props) => {
  const appState = useContext(StateContext);

  if (appState.logged) {
    return <Redirect to="/dashboard" />;
  }

  return <FirstContainer>{appState.formType ? <FormLogin /> : <FormRegister />}</FirstContainer>;
};

export default Login;
