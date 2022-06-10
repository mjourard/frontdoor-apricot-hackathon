import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration/Registration.renderer';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { orgId } from './helpers/integration/integrationProps';

const Routes = () => (
      <HashRouter basename=''>
        <Switch>
            <Route exact path='/' component={() => (<Registration orgId={orgId || 3223}/>)} />
            <Route exact path='/registration-form' component={() => (<RegistrationForm />)} />
        </Switch>
      </HashRouter>
  );
  
  export default Routes;