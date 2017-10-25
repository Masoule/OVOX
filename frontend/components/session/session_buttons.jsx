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
              <h2>
                welcome {this.props.currentUser.username}
              </h2>
              <button
                className='button logout-btn'
                onClick={this.props.logout}>
                Logout
              </button>
            </div>)
            :(
              <div>
                <div>
                  <Link to={`/signup`}>
                    Signup
                  </Link>
                </div>

                <div>
                  <Link to={`/login`}>
                    Login
                  </Link>
                </div>
              </div>
          )
        }
      </div>
    );
  }



}


export default SessionButtons;
