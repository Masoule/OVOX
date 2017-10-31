import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserNav from './user_nav';
import VisitorNav from './visitor_nav';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return (
      this.props.currentUser ?
      <UserNav
        currentUser={this.props.currentUser}
        logout={this.props.logout}
        />
      :
      <VisitorNav />
    )
  }

}

export default withRouter(Header);
