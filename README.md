# README
OVOX, a Soundcloud clone, is a social media application that allows sound producers to upload and publicly share streamable audio tracks. OVOX users can create profiles, continuously play audio tacks and like and comment on tracks.

OVOX is built with Ruby on Rails and a postgresSQL database. The database queries are minimized by utilizing associations to prefetch data in the controller actions. Frontend rendering is done through React implementing the flex architecture.

OVOX has RESTful backend routes which respond to asynchronous requests from the front end with JSON and the frontend routes are imitating the routes in Soundcloud website.

React's virtual DOM handles fast, efficient updates of the DOM. The normalized state in the Redux store allocates slices of state to session, users, tracks, comments, likes, and errors, simplifying relational data management.

[Live Link](https://ovox.herokuapp.com)


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

4. Track show page displaying the track comments

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/track-show.png" alt="track show page" width="600px" style="margin: 0 auto;">

5. Logged in users can post comments

6. User profile page listing user tracks

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/user.png" alt="user profile page" width="600px" style="margin: 0 auto;">

7. Frontend waveforms


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


## Future and in progress features:
* Comment delete
* Track likes and unlikes
* Playlists
* search
