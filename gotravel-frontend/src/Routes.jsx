import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/institucional/App';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch>
    </BrowserRouter>
);