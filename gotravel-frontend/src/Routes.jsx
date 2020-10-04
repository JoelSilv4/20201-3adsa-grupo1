import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/institucional/App';
import Dashboard from './pages/dashboard/dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                {/* <Dashboard /> */}
                {<App />}
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;