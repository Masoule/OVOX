import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () => this.props.history.goBack())
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  hideModal(e) {
    if (e.currentTarget.className === "modal-background"){
    this.props.history.goBack();}
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

  render (){
    let formHeader, linkPath, linkName, passwordText, redirectText
    if (this.props.formType === "Login") {
      formHeader = 'Welcome back!'
      linkPath = '/signup';
      linkName = 'Sign Up';
      passwordText = 'Password';
      redirectText="Don't have an account?";
    } else {
      formHeader = 'Create your OVOX account';
      linkPath = '/login';
      linkName = 'Sign In';
      passwordText = 'Choose a password';
      redirectText="Already have an account?";
    }

    return (
      <div className="modal-background"
        onClick={this.hideModal}>

        <div
          className='auth-modal'
          onClick={ (e)=> e.stopPropagation() }
          >

          <div className='auth-modal-content'>

            <form
              className='auth-form'
              onSubmit={this.handleSubmit}>

              <h1 className='form-title'>
                {formHeader}
              </h1>

              <div className='form-input'>
                <label className='form-label'></label>
                <input
                  className='textfield'
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  />
              </div>

              <div className='form-input'>
                <label className='form-label'>
                  {passwordText}
                </label>
                <input
                  className='textfield'
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  />
              </div>

              <div className='form-button'>
                <input
                  className='button'
                  type="submit"
                  value={this.props.formType}
                  />
              </div>

              <div className='errors'>
                {this.renderErrors()}
              </div>
            </form>

            <div className='small-link'>
              <span className='small-text'>{redirectText}</span>
              <Link to={linkPath}>
                {linkName}
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default SessionForm;
