import React from 'react'
// import { connect } from 'react-redux'
import '../stylesheets/aboutPage.css'
import AboutCard from './AboutCard'
// import CoreInterest from './CoreInterest'
import MediaQuery from 'react-responsive'

const AboutPage = props => {

  return (
    <div className="about-page">
      <MediaQuery minWidth={768}>
        <div></div>
      </MediaQuery>
      <AboutCard />
    </div>
    )
}

// const mapStateToProps = state => {
//   let { display } = state.about
//   return { display }
// }

export default AboutPage
