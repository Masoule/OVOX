import React from 'react';
import { Link } from 'react-router-dom';
import FileUploadProgress  from 'react-fileupload-progress';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleUpload(){

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

        <label>Update image
          <input
            className='upload-button'
            type="file"
            accept="image/jpeg,image/pjpeg,image/gif,image/png"
            onChange={this.handleUpload("image")} />
        </label>
      </div>
    )
  }

  uploadTrack (){
    return (
      <div className='track-upload'>

        <label>Choose a file to Uplod
          <input
            className='upload-button'
            type="file"
            accept="track/mp3"
            onChange={this.handleUpload("track")} />
        </label>
      </div>
    )
  }

  render () {

    return (

        <div
          className='track-form'
          onClick={ (e)=> e.stopPropagation() }
          >

          <div className='track-form-content'>

            <form
              className='track-form'
              onSubmit={this.handleSubmit}>

              <h1 className='form-title'>
                Upload to OVOX
              </h1>

              {this.uploadTrack()}

              <div className='form-input'>

                {this.uploadImage()}

                <label className='form-label'>Title</label>
                <input
                  className='textfield'
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder='Title'
                  />
              </div>

              <label>
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

              <div className='form-input'>
                <label className='form-label'>
                  Description
                </label>
                <textarea className='textArea' rows="10" cols="47"
                  style={{resize: 'none'}}
                  value={this.state.description}
                  onChange={this.update('description')}
                  placeholder='Describe your track'>
                </textarea>

              </div>

              <label>
              </label>

              <div className='small-link'>
                <span className='small-text'>Cancel</span>
                <Link to='/upload'>
                  Cancel
                </Link>
              </div>

              <div className='form-button'>
                <input
                  className='button'
                  type="submit"
                  value='Save'
                  />
              </div>

            </form>


          </div>
        </div>
      // </div>
    )
  }

}

export default TrackForm;
