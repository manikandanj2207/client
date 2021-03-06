import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks(){
    if (this.props.authenticated){
      /* Show a link to sign out */
       return <li className="nav-item">
        <Link className="nav-link text-light" to="/signout">Sign Out</Link>
      </li>
    } else {
      /* Show a link to sign in or sign up */
       return [
         <li className="nav-item" key={1}>
           <Link className="nav-link text-light" to="/signin">Sign in</Link>
         </li>,
         <li className="nav-item" key={2}>
           <Link className="nav-link text-light" to="/signup">Sign up</Link>
         </li>
       ];
    }
  }

  render(){
    return (
      <nav className="navbar navbar-expand-sm bg-dark text-light">
        <Link to="/" className="navbar-brand text-light">Redux Auth</Link>
        <ul className="navbar-nav">
          { this.renderLinks() }
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header);
