import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostPost from '../post/PostPost';
import Notifications from './Notifications';
//import Resources from './Resources';
import './Navbar.css'
//import Main_Func from './Main_Func.js';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
//import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import ListAltIcon from '@material-ui/icons/ListAlt';

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar>
          {authenticated ? (
            <Fragment>
              <div className ="header">
            <div className = "header__left">
                <img src= "https://img-premium.flaticon.com/png/512/3089/3089758.png?token=exp=1621165299~hmac=f0915c0952cd929e8da60d22e41a6c27" alt = "" />

                <div className = "header__search">
                  <SearchIcon />
                  <input className = "input" type = "text"/>
                </div>
            </div>
            <div className = "header__right">
              <PostPost /> 
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Link to="/">
                <MyButton tip="My Network">
                  <SupervisorAccountIcon />
                </MyButton>
              </Link>
              <Notifications />
              <Link to="/">
                <MyButton tip="Messages">
                  <ChatIcon/>
                </MyButton>
              </Link>            
              <Link to="/">
                <MyButton tip="Jobs">
                  <BusinessCenterIcon />
                </MyButton>
              </Link>
              <Link to="/">
                <MyButton tip="Resources">
                  <ListAltIcon/>
                </MyButton>
              </Link>
              
            </div>
            </div>          
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign up
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
