import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import SessionButtonsContainer from './session/session_buttons_container';
import TracksIndexGeneralContainer from './tracks/tracks_index_general_container';

const App = () => (
  <div>

    <header className='header'>
      <SessionButtonsContainer />
    </header>

    <section className='main'>
      <AuthRoute path="/" component={TracksIndexGeneralContainer} />
    </section>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;








// <AuthRoute path="/stream" component={TracksIndexContainer} />
