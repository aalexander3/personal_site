import React from 'react'
import { connect } from 'react-redux'
import { showAbout } from '../actions/actions'


const FastFacts = { showAbout } => {
  return (
    <div className="about-page">
      FAST FACTS
      <div className="right-nav" data-name='about' onClick={showAbout}>About Me</div>
    </div>
  )
}

export default connect(null, { showAbout })(FastFacts)
