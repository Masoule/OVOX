import React from 'react';
import { Link } from 'react-router-dom';
import FileUploadProgress  from 'react-fileupload-progress';

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
    const track = Object.assign({}, this.state);
    this.props.processForm(this.state).then(() => this.props.history.push('/stream'));
  }

  handleUpload(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  update(field) {
    return (e) =>
    this.setState({[field]: e.currentTarget.value});
  }


  uploadImage (){
    return (
      <div className='image-upload'>
        <div className="image-box">
          <img
            className="image"
            src={this.props.track.image}
            />
        </div>

          <input
            className='upload-button'
            type="file"
            accept="image/jpeg,image/pjpeg,image/gif,image/png"
            onChange={this.handleUpload("image")} />
      </div>
    )
  }

  uploadTrack (){
    return (
        <label>
          <input
            className='upload-track-button'
            type="file"
            accept="track/mp3"
            onChange={this.handleUpload("track")} />
        </label>
    )
  }

  render () {
    return (
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
                  <textarea className='textArea textfield' rows="10" cols="47"
                    style={{resize: 'none'}}
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder='Describe your track'>
                  </textarea>
                </label>
              </div>

              <div className='form-submit'>
                <div className='cancel'>
                  <Link to='/upload'>
                    <span className='small-link'>Cancel</span>
                  </Link>
                  <span className='or'>or</span>
                </div>
                <div className='save-button'>
                  <input
                    className='button'
                    type="submit"
                    value='Save'
                    />
                </div>
              </div>

            </div>

          </div>

        </form>


      </div>
      // </div>
    )
  }

}

export default TrackForm;
