import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Institucional from './pages/institucional/institucional';
import Autenticacao from './pages/autenticacao/autenticacao';
import Dashboard from './pages/dashboard/dashboard';

const Routes = () => (
    <BrowserRouter>
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
);

export default Routes;