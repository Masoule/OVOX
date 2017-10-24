import React from 'react';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return(
      <div>
        {
          (this.props.currentUser) ?  (
            <div>
              welcome {this.props.currentUser.username}
              <button onClick={this.props.logout}>
                Logout
              </button>
            </div>)
            :(
              <div>
                <Link to={`/signup`}>
                  Signup
                </Link>
                <br></br>
                <Link to={`/login`}>
                  Login
                </Link>
              </div>
          )
        }
      </div>
    );
  }



}


export default SessionButtons;
