import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import SubmitThankYou from './components/SubmitThankYou/SubmitThankYou';
import Registration from './components/Registration/Registration.renderer';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { orgId } from './helpers/integration/integrationProps';

const Routes = () => (
      <HashRouter basename=''>
        <Switch>
            <Route exact path='/' component={() => (<Registration orgId={orgId || 3223}/>)} />
            <Route exact path='/registration-form' component={() => (<RegistrationForm />)} />
            <Route exact path='/submit-thank-you' component={() => (<SubmitThankYou />)} />
        </Switch>
      </HashRouter>
  );
  
  export default Routes;