import React from 'react'
import { connect } from 'react-redux'
import { toggleAbout } from '../actions/actions'

const HomeCard = ({ page, toggleAbout, headline, defaultInt, about }) => {

  return (
    <div className="page-card">
      <div className="page-headline">
        <h1>{ headline }</h1>
      </div>
      <h3>{defaultInt.interest}</h3>
      <a onClick={ toggleAbout } className="card-link">{ about ? 'Less about me' : 'More about me' }</a>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    defaultInt: state.about.defaultInt,
    about: state.about.aboutToggle
  }
}

export default connect(mapStateToProps, { toggleAbout })(HomeCard)
