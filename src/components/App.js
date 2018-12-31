import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/aboutPage.css'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import ProjectDetail from './ProjectDetail'
import ContactPage from './ContactPage'
import AboutCard from './AboutCard'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends Component {
  componentDidMount(){
    this.props.images.forEach(image => {
      const img = new Image();
      img.onload = () => {
        img.src = image
      }
    })
  }

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

const reduceImages = (projects) => {
  return projects.reduce((accumulator, project) => {
    return [...accumulator, ...project.images]
  }, [])
}

const mapStateToProps = state => {
  let images = reduceImages(state.projects.projects)
  return {
    images
  }
}

export default withRouter(connect(mapStateToProps)(App));
