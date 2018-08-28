import React from 'react'
import { connect } from 'react-redux'
import '../stylesheets/aboutPage.css'

const AboutPage = props => {
  return (
    <div className="about-page">
      <div className="left-nav">Fast Facts</div>
      <div className="about-card">
        <h3>{ props.about.bio }</h3>
        <h5>{ props.about.bio2 }</h5>
      </div>
      <div className="right-nav">Core Interests</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps)(AboutPage)
