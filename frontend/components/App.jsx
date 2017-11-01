import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HeaderContainer from './nav/header_container';
import Welcome from './nav/welcome_nav';

import SessionFormContainer from './session/session_form_container';

import TracksIndexGeneralContainer from './tracks/tracks_index_general_container';
import TrackShowContainer from './tracks/track_show_container';
import UserShowContainer from './users/user_show_container';
import TrackFormContainer from './tracks/track_form_container';
import TracksIndexContainer from './tracks/tracks_index_container';
import Player from './player/player_container'

const App = () => (

  <div className='page'>

    <header className='header'>
      <AuthRoute path="/" component={Welcome} />
    </header>

      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route exact path="/upload" component={TrackFormContainer} />
        <Route exact path="/:userId/:trackId/edit" component={TrackFormContainer} />
        <Route exact path="/:userId/:trackId" component={TrackShowContainer} />
        <Route exact path="/:userId" component={UserShowContainer} />
        <Route exact path="/stream" component={TracksIndexContainer} />
        <AuthRoute path="/" component={TracksIndexGeneralContainer} />
      </Switch>



    <Player />

  </div>
);

export default App;




// <section className='main'>
//
// </section>
