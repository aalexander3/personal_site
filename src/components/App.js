import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/aboutPage.css'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import ProjectDetail from './ProjectDetail'
import ContactPage from './ContactPage'
import AboutCard from './AboutCard'
import NavBar from './NavBar'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div className='app' >
        <NavBar />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/projects' component={ ProjectPage } />
          <Route exact path='/projects/:name' render={() =>  <ProjectDetail /> } />
        </Switch>
        <AboutCard />
        <ContactPage />
      </div>
    );
  }
}

export default withRouter(App);
