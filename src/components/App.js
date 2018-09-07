import React, { Component } from 'react';
import '../stylesheets/App.css';
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
import NavBar from './NavBar'
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {

  render() {
    let { pathname } = this.props.location

    return (
      <div className='app' >
        <NavBar />
        <div className={pathname === '/' ? 'background' : 'background small'}></div>
        <img className={pathname === '/' ? 'profile-image' : 'profile-image small'} alt="arren" src={require('../images/arren-cartoon.jpg')} />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/about' component={ AboutPage } />
          <Route exact path='/projects' component={ ProjectPage } />
        </Switch>
        <ContactPage />
      </div>
    );
  }
}

export default withRouter(App);
