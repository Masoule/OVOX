import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './user_nav';
import VisitorNav from './visitor_nav';
import WelcomeNav from './welcome_nav';

class Header extends React.Component {

  constructor(props){
    super(props);
  }

  logo () {
    return (
      <div className='logo-box'>
        <div className='logo'>
          <img className="logo-img"
            src={window.logo}></img>
        </div>
        <h1 className='logo-text'>
          OVOX
        </h1>
      </div>
    )
  }

  userHeader () {
    return (
      <div className='user-nav'>
        <UserNav
          currentUser={this.props.currentUser}
          logout={this.props.logout}
          />
      </div>
    )
  }

  visitorHeader (){
    return (
      <div className='small-nav'>
        <VisitorNav />
      </div>
    )
  }

  render (){
    return (

      <div>
        {this.logo()}
        <div className='buttons'>
          {this.props.currentUser ? this.userHeader() : this.visitorHeader()}
        </div>
      </div>
    )
  }
}

export default Header;


//
// <div>
//
//   <div className='logo'>
//     <div className='logo-img'>
//
//     </div>
//     <h1 className='logo-text'>
//       OVOX
//     </h1>
//   </div>
//
//   <div className='buttons'>
//     {
//       (this.props.currentUser) ?  (
//         <div className='user-nav'>
//           <UserNav
//             currentUser={this.props.currentUser}
//             logout={this.props.logout}
//             />
//         </div>
//       ):(
//         <div className='general-nav'>
//           <GeneralNav />
//         </div>
//       )
//     }
//   </div>
// </div>
