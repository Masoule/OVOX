import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {

  constructor(props) {
    //
    super(props);
    this.state = { body: "", track_id: this.props.trackId};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    //
    this.props.createComment(comment)
    .then(()=>{this.setState({body: ''})})
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // componentDidMount(){
  //   this.props.clearErrors();
  // }

  render () {
    if (this.props.currentUser) {
      return (
        <form
          className='comment-form-inner'
          onSubmit={this.handleSubmit}>

          <div className='comment-form-input'>
            <div className='form-avatar'>
              <img className="artist-avatar"
                src={this.props.currentUser.imageUrl}></img>
            </div>
            <input
              className='comment-textfield'
              type="text"
              value={this.state.body}
              placeholder={"Write a comment"}
              onChange={this.update('body')}
              />
          </div>
        </form>
      )
    } else { return ""}
  }
}

export default CommentForm;




// <input
//   className='button'
//   type="submit"
//   value={"Submit"}
//   />
