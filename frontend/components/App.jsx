import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HeaderContainer from './headers/header_container';

import SessionFormContainer from './session/session_form_container';

import TracksIndexGeneralContainer from './tracks/tracks_index_general_container';
import TrackShowContainer from './tracks/track_show_container';
import TrackFormContainer from './tracks/track_form_container';
import TracksIndexContainer from './tracks/tracks_index_container';

const App = () => (

  <div className='page'>

    <header className='header'>
      <Route path="/" component={HeaderContainer} />
    </header>

    <section className='main'>
        <AuthRoute path="/" component={TracksIndexGeneralContainer} />

        <Route exact path="/stream" component={TracksIndexContainer} />
        <Route exact path="/upload" component={TrackFormContainer} />

        <Route exact path="/:userId/:trackId" component={TrackShowContainer} />

    </section>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />


  </div>
);

export default App;



// <HeaderContainer />
