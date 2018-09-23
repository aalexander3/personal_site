import React from 'react'
import { connect } from 'react-redux'
import { toggleAbout } from '../actions/actions'

const HomeCard = props => {
  const { page, toggleAbout } = props

  return (
    <div className="page-card">
      <h1>{page.headline}</h1>
      <h3>{props.defaultInt.interest}</h3>
      <a onClick={ toggleAbout } className="card-link">More about me</a>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    defaultInt: state.about.defaultInt
  }
}

export default connect(mapStateToProps, { toggleAbout })(HomeCard)
