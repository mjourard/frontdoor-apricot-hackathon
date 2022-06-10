import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration/Registration.renderer';
import { orgId } from './helpers/integration/integrationProps';

const Routes = () => (
      <HashRouter basename=''>
        <Switch>
            <Route exact path='/' component={() => (<Registration orgId={orgId || 3223}/>)} />
        </Switch>
      </HashRouter>
  );
  
  export default Routes;