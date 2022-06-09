import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration/Registration.renderer';
import { orgId } from './helpers/integration/integrationProps';

const Routes = () => (
      <BrowserRouter basename=''>
        <Switch>
            <Route exact path='/' component={() => (<Registration orgId={orgId || 448}/>)} />
        </Switch>
      </BrowserRouter>
  );
  
  export default Routes;