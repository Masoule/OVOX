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

5. User pages


## Technologies

* Ruby on Rails
* React.js frontend components
* Redux
* BCrypt for authentication
* Javascript
* PostgreSQL
* Paperclip to store audio tracks and images and post to AWS
* AWS S3 for storage
* HTML5 Audio for track actions
* Lodash
* Node.js

