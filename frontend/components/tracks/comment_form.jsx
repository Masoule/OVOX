import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(comment)
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
    return (
      <form
        className='auth-form'
        onSubmit={this.handleSubmit}>

        <div className='form-input'>
          <label className='form-label'></label>
          <input
            className='textfield'
            type="text"
            value={this.state.username}
            onChange={this.update('body')}
            />
        </div>

        <div className='form-button'>
          <input
            className='button'
            type="submit"
            value={"Submit"}
            />
        </div>
      </form>
    )
  }
}

export default CommentForm;
