import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav';
import GeneralNav from './general_nav';

class Header extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return(
      <div>

        <div className='logo'>
          <div className='logo-img'>
            
          </div>
          <h1 className='logo-text'>
            OVOX
          </h1>
        </div>

        <div className='buttons'>
          {
            (this.props.currentUser) ?  (
              <div className='user-nav'>
                <UserNav
                  currentUser={this.props.currentUser}
                  logout={this.props.logout}
                  />
              </div>
            ):(
              <div className='general-nav'>
                <GeneralNav />
              </div>
            )
          }
        </div>
      </div>
    );
  }



}


export default Header;
