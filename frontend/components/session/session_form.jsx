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
      <div className="modal-background">
        <div className='auth-modal'>
          <div className='auth-modal-content'>

            <form
              className='auth-form'
              onSubmit={this.handleSubmit}>

              <h1 className='form-title'>
                {formHeader}
              </h1>

              <div className='form-input'>
                <label>
                  <input
                    className='textfield'
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </label>
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

              <input
                className='button auth-submit'
                type="submit"
                value={this.props.formType}
                />

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
