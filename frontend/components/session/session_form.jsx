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
    this.props.processForm(user).then( () =>
      this.props.history.push('/')
    );
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  // componentWillReceiveProps(newProps){
  //   // debugger
  //   if (newProps.location.pathname !== this.props.location.pathname) {
  //     this.clearErrors();
  //     // this.renderErrors();
  //   }
  //
  // }

  // clearErrors() {
  //   this.props.errors = [];
  // }

  hideModal(e) {
    if (e.currentTarget.className === "modal-background"){
    this.props.history.push('/');}
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
    const linkPath = this.props.formType === "Login" ? '/signup' : '/login';
    const linkName = this.props.formType === "Login" ? 'Sign Up' : 'Login';
    const formHeader = this.props.formType === "Login" ? 'Create your OVOX account' : 'Login';

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
                <label></label>
                <input
                  className='textfield'
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  />
              </div>

              <div className='form-input'>
                <label>Choose a password</label>
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

          </div>
        </div>
      </div>
    );
  }

}

export default SessionForm;
