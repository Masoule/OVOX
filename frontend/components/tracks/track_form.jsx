import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../nav/header_container'

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.trackId) {
      this.props.fetchTrack(this.props.match.params.trackId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.track);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!track.validity.valid) {
      error.innerHTML = "Don't forget the audio track, darling!";
      error.className = "error active";
      return;
    }
    if (!title.validity.valid) {
      error.innerHTML = "Please enter a title";
      error.className = "error active";
      return;
    }
    if (!artist_name.validity.valid) {
      error.innerHTML = "Please enter the artist name";
      error.className = "error active";
      return;
    }

    const formData = new FormData();
    if ( this.state.id ) {
      formData.append("track[id]", this.state.id)
    }
    formData.append("track[title]", this.state.title);
    formData.append("track[artist_name]", this.state.artist_name);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[description]", this.state.description);
    if (image) formData.append("track[image]", image);
    if (track) formData.append("track[track]", track);
    this.props.processForm(formData)
      .then((res) => {
        this.props.history.push(`/${this.props.currentUser.id}/${res.data.track.id}`)
      });
  }

  handleUpload(field){
    let url = `${field}Url`
    return (e) => {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      reader.onloadend = () => {
        this.setState({ [url]: reader.result, [field]: file});
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ [url]: "", [field]: null });
      }
    }

  }

  update(field) {
    return (e) =>
    this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    let errors = [];
    this.props.errors.forEach( (err, idx) => {
      errors.push(<li key={`${idx}`}>{err}</li>);
    });

    return (
      <ul>
        {errors}
      </ul>
    );
  }

  uploadImage (){
    return (
      <div className='image-upload'>
        <div className="image-box">

          <input
            className='upload-button'
            type="file"
            accept="image/jpeg,image/pjpeg,image/gif,image/png"
            onChange={this.handleUpload('image')} />

          <img
            className="image"
            src={this.state.imageUrl}
            />

        </div>
      </div>
    )
  }

  uploadTrack (){
    return (
        <label>
          <input
            className='upload-track-button'
            type="file"
            accept="audio/*"
            onChange={this.handleUpload('track')}
            required />
        </label>
    )
  }

  // validSubmit() {
  //   const { title, genre } = this.state;
  //   return (
  //     title.length > 0 &&
  //     genre.length > 0 && this.state.track
  //   );
  // }

  render () {
    // const enabled = this.validSubmit();
    return (
      <div>
        <Header currentUser={this.props.currentUser}/>

        <div className='track-form-content'>
          <form
            className='track-form'
            onSubmit={this.handleSubmit}>

            <h1 className='form-title'>
              Upload to OVOX
            </h1>

            <div className='track-upload'>
              {this.uploadTrack()}
            </div>

            <div className='form-fields'>
              {this.uploadImage()}

              <div className='fields'>
                <div className='form-input'>
                  <label className='form-label'>Title
                    <input
                      className='textfield'
                      type="text"
                      value={this.state.title}
                      onChange={this.update('title')}
                      placeholder='Title'
                      required
                      />
                  </label>
                </div>

                <div className='form-input'>
                  <label className='form-label'>Artist
                    <input
                      className='textfield'
                      type="text"
                      value={this.state.artist_name}
                      onChange={this.update('artist_name')}
                      placeholder='Artist'
                      required
                      />
                  </label>
                </div>

                <div className='form-input'>
                  <label className='form-label'>
                    <select
                      onChange={this.update('genre')}
                      defaultValue={this.state.genre}
                      >
                      <option >Genre</option>
                      <option value="Audiobooks">Audiobooks</option>
                      <option value="Ambient">Ambient</option>
                      <option value="Avant Garde">Avant Garde</option>
                      <option value="Classical">Classical</option>
                      <option value="Country">Country</option>
                      <option value="Dance">Dance</option>
                      <option value="Deep House">Deep House</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Folk">Folk</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Metal">Metal</option>
                      <option value="Pop">Pop</option>
                      <option value="Reggae">Reggae</option>
                      <option value="Rock">Rock</option>
                      <option value="SoundTrack">SoundTrack</option>
                      <option value="World">World</option>
                    </select>
                  </label>
                </div>

                <div className='form-input'>
                  <label className='form-label'>
                    Description
                    <textarea
                      className='textArea textfield'
                      rows="10" cols="47"
                      style={{resize: 'none'}}
                      value={this.state.description}
                      onChange={this.update('description')}
                      placeholder='Describe your track'>
                    </textarea>
                  </label>
                </div>

                <div className='form-submit'>
                  <div className='cancel'>
                    <Link to='/stream'>
                      <span className='small-link'>Cancel</span>
                    </Link>
                    <span className='or'>or</span>
                  </div>
                  <div className='save-button'>
                    <input
                      disabled={!enabled}
                      className='button'
                      type="submit"
                      value='Save'
                      />
                  </div>
                </div>

              </div>

            </div>

            <div className='errors'>
              {this.renderErrors()}
            </div>

          </form>

        </div>
      </div>
    )
  }

}

export default TrackForm;
