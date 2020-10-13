import Institucional from './pages/institucional/institucional';
import Autenticacao from './pages/autenticacao/autenticacao.js';
import Dashboard from './pages/dashboard/dashboard';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import Axios from 'axios';
import Navbar from './components/Organisms/Navbar/Navbar';
// Axios.defaults.baseURL = 'http://localhost:8080';
Axios.defaults.baseURL = 'https://go-travel-ads.herokuapp.com';

function Index() {
  const initialState = {
    logged: Boolean(localStorage.getItem('gotravelUserEmail')),
    user: {
      email: localStorage.getItem('gotravelUserEmail'),
      id: localStorage.getItem('gotravelUserId'),
      name: localStorage.getItem('gotravelUserName'),
    },
    formType: true,
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case 'login':
        draft.logged = true;
        draft.user = action.data;
        return;
      case 'logout':
        draft.logged = false;
        return;
      case 'form-login':
        draft.formType = true;
        return;
      case 'form-register':
        draft.formType = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.logged) {
      localStorage.setItem('gotravelUserEmail', state.user.email);
      localStorage.setItem('gotravelUserId', state.user.id);
      localStorage.setItem('gotravelUserName', state.user.name);
    } else {
      localStorage.removeItem('gotravelUserEmail');
      localStorage.removeItem('gotravelUserId');
      localStorage.removeItem('gotravelUserName');
    }
  }, [state.logged]);

  useEffect(() => {}, [state.formType]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Institucional />
            </Route>
            <Route path="/auth">
              <Autenticacao />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
