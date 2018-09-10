import React from 'react'
import { connect } from 'react-redux'
import { showFast, showInterest } from '../actions/actions'

const AboutCard = props => {

  const { showFast, showInterest } = props
  const { bio, bio2 } = props.about

  return (
    <div className="about-page">
      {/* <div className="left-nav" data-name='fast' onClick={ showFast }>Fast Facts</div> */}
      <div className="about-card">
        <h1>{ bio }</h1>
        <h4>{ bio2 }</h4>
      </div>
      <div className="right-nav" data-name='core' onClick={showInterest}>Core Interests</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps, { showFast, showInterest })(AboutCard)
