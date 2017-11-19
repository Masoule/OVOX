# README
OVOX, a Soundcloud clone, is a social media application that allows sound producers to upload and publicly share streamable audio tracks. OVOX users can create profiles, continuously play audio tacks and like and comment on tracks.

OVOX is built with Ruby on Rails and a postgresSQL database. The database queries are minimized by utilizing associations to prefetch data in the controller actions. Backend routes respond to asynchronous AJAX requests from the frontend with JSON and Frontend rendering is done through React implementing the flex architecture. 

React's virtual DOM handles fast, efficient updates of the DOM. The normalized state in the Redux store allocates slices of state to session, users, tracks, comments, likes, and errors, simplifying relational data management.

[Live Link](https://ovox.herokuapp.com) 

## Features

1.  User authentication

2. Track CRUD 

3. Playing Tracks with continuous play

4. Comments

5. User profile page listing user tracks


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


## Future and in progress:

* Demo login
* Track Progress tracker
* Track likes and unlikes
* Playlists
* waveforms

