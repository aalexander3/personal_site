import React, { Component } from 'react';
import '../stylesheets/App.css';
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  state= {
    active: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        active: !prevState.active
      }
    })
  }

  render() {
    return (
      <div className='app' >
        <NavBar />
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

export default App;
