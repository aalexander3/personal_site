import React from 'react'
import { connect } from 'react-redux'
import '../stylesheets/aboutPage.css'
import AboutCard from './AboutCard'
import CoreInterest from './CoreInterest'
import { CSSTransition } from 'react-transition-group';

const AboutPage = props => {

  const whatPage = () => {
    switch (props.display) {
      case 'about':
        return <AboutCard />
      case 'core':
        return <CoreInterest />
      case 'fast':
        return <h1>FAST FACTS</h1>
      default:
        return <AboutCard />
    }
  }

  return whatPage()
}

const mapStateToProps = state => {
  return { display: state.about.display }
}

export default connect(mapStateToProps)(AboutPage)
