import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav';
import GeneralNav from './general_nav';

class SessionButtons extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return(
      <div className='header'>

        <div className='logo'>
          <h1>OVOX</h1>
        </div>

        <div className='buttons'>
          {
            (this.props.currentUser) ?  (
              <UserNav
                currentUser={this.props.currentUser}
                />
            ):(
              <GeneralNav />
            )
          }
        </div>
      </div>
    );
  }



}


export default SessionButtons;
