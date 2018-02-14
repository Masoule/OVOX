# README
OVOX, a Soundcloud clone, is a social media application that allows sound producers to upload and publicly share streamable audio tracks. OVOX users can create profiles, continuously play audio tacks and like and comment on tracks.

OVOX is built with Ruby on Rails and a postgresSQL database. The database queries are minimized by utilizing associations to prefetch data in the controller actions. Frontend rendering is done through React implementing the flex architecture.

OVOX has RESTful backend routes which respond to asynchronous requests from the front end with JSON and the frontend routes are imitating the routes in Soundcloud website.

React's virtual DOM handles fast, efficient updates of the DOM. The normalized state in the Redux store allocates slices of state to session, users, tracks, comments, likes, and errors, simplifying relational data management.

[Live Link](https://ovox.herokuapp.com)


<!-- ![front](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/front.png | width=100) -->

<img src="https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/front.png" alt="Front page" width="400px">

## Features

1.  User authentication and demo login

![modal](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/modal.png)

2. Playing Tracks with continuous play and progress bar

![index](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/index.png)

3. Logged in users can upload/Edit tracks

![modal](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/upload.png)

4. Logged in users can edit and delete their own tracks

4. Track show page displaying the track comments

![track-show](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/track-show.png)

5. Logged in users can post comments

![comments](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/modal.png)

6. User profile page listing user tracks

![user](https://github.com/Masoule/OVOX/blob/master/app/assets/images/ovox/user.png)

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
