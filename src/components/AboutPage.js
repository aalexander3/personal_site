import React from 'react'
import { connect } from 'react-redux'
import '../stylesheets/aboutPage.css'
import AboutCard from './AboutCard'
import CoreInterest from './CoreInterest'
// import { CSSTransition } from 'react-transition-group';
// import FastFacts from './FastFacts'


const AboutPage = props => {

  const whatPage = () => {
    switch (props.display) {
      case 'about':
        return <AboutCard />
      case 'core':
        return <CoreInterest />
      // case 'fast':
      //   return <FastFacts />
      default:
        return <AboutCard />
    }
  }

  return (
    <div className="about-page">
      { whatPage() }
    </div>
    )
}

const mapStateToProps = state => {
  let { display } = state.about
  return { display }
}

export default connect(mapStateToProps)(AboutPage)
