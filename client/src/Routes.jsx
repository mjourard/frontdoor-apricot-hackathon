import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration/Registration';

const Routes = () => (
      <BrowserRouter basename=''>
        <Switch>
            <Route exact path='/' component={Registration} />
        </Switch>
      </BrowserRouter>
  );
  
  export default Routes;