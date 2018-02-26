# README
OVOX, a Soundcloud clone, is a social media application that allows sound producers to upload and publicly share streamable audio tracks. OVOX users can create profiles, continuously play audio tacks and like and comment on tracks.

OVOX is built with Ruby on Rails and a postgresSQL database. The database queries are minimized by utilizing associations to prefetch data in the controller actions. Frontend rendering is done through React implementing the flex architecture.

OVOX has RESTful backend routes which respond to asynchronous requests from the front end with JSON and the frontend routes are imitating the routes in Soundcloud website.

React's virtual DOM handles fast, efficient updates of the DOM. The normalized state in the Redux store allocates slices of state to session, users, tracks, comments, likes, and errors, simplifying relational data management.

[Live Link](https://ovox.herokuapp.com)

## Technologies

* Ruby on Rails
* React.js frontend components
* Redux
* BCrypt for authentication
* Javascript
* PostgreSQL
* Paperclip GEM for handling file attachments
* AWS S3 for storing user generated tracks and images
* HTML5 Audio for track play/pause actions
* Lodash
* Node.js
* Babel
* waveSurfer.js

<!-- ![front](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/front.png | width=100) -->

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/front.png" alt="Front page" width="600px" style="margin: 0 auto;">

## Features

1.  User authentication and demo login

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/modal.png" alt="Authentication Modal" width="600px" style="margin: 0 auto;">


2. Playing Tracks with continuous play and progress bar

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/index.png" alt="Index" width="600px" style="margin: 0 auto;">


3. Logged in users can upload/Edit tracks

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/upload.png" alt="upload form" width="600px" style="margin: 0 auto;">

4. Logged in users can edit and delete their own tracks


5. Track show page displaying the track comments

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/track-show.png" alt="track show page" width="600px" style="margin: 0 auto;">


6. Logged in users can post comments


7. User profile page listing user tracks

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/user.png" alt="user profile page" width="600px" style="margin: 0 auto;">


8. Frontend waveforms

OVOX uses Wavesurfer library to generate frontend waveforms for the tracks. Once the track component is mounted, the Wavesurfer is loaded on the track calling it by the id.

```Javascript
componentDidMount() {
  const wavesurfer = WaveSurfer.create({
    container: `#waveform-${this.props.track.id}`,
    waveColor: '#555',
    progressColor: 'orange',
    cursorWidth: 0,
    barWidth: 2,
    height: 80
  });

  wavesurfer.load(this.props.track.trackUrl);
}
```

In order to render a separate waveform for every track on index page, each track component generates its own waveform id.

```Javascript  
<div className='track-waveform' id={`waveform-${track.id}`}></div>
```



## Future and in progress features:
* Track likes and unlikes
* Playlists
* Search
