import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormLogin from '../../Molecules/FormLogin/FormLogin';
import FormRegister from '../../Molecules/FormRegister/FormRegister';
import { FirstContainer, ArtContainer, FormContainer, FormStyle } from '../../Molecules/FormLogin/Form.style';

import StateContext from '../../../StateContext';
import DispatchContext from '../../../DispatchContext';
import Layout from '../../Layout';

const Login = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  return <FirstContainer>{appState.formType ? <FormLogin /> : <FormRegister />}</FirstContainer>;
};

export default Login;
