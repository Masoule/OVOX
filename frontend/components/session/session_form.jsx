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

    return (
      <div>
        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>

          <h2>
            {this.props.formType}
          </h2>

          <label>Username
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>

          <label>Password
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>

          <input type="submit"
            value={this.props.formType}
            />

        </form>

        <Link to={linkPath}>
          {linkName}
        </Link>
      </div>
    );
  }

}

export default SessionForm;
