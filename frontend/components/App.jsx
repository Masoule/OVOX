import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Form , Buttons} from './session/session_form_container';

const App = () => (
  <div>

    <header>
      <h1>OVOX</h1>
      <Buttons />
    </header>


    <AuthRoute path="/login" component={Form} />
    <AuthRoute path="/signup" component={Form} />

  </div>
);

export default App;
