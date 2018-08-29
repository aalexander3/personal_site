import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../stylesheets/aboutPage.css'

import AboutCard from './AboutCard'

class AboutPage extends Component {

  whatPage = () => {
    switch (this.props.display) {
      case 'about':
        return <AboutCard handleClick={ this.handleClick } />
      case 'core':
        return <h1>CORE INTERESTS</h1>
      case 'fast':
        return <h1>FAST FACTS</h1>
      default:
        return <AboutCard handleClick={ this.handleClick } />
    }
  }

  render(){
    return (
      <div className="about-page">
        {this.whatPage()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { display: state.about.display }
}

export default connect(mapStateToProps)(AboutPage)
