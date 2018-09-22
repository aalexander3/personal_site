import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const HomeCard = props => {
  const { page } = props

  return (
    <div className="page-card">
      <h1>{page.headline}</h1>
      <h3>{props.defaultInt.interest}</h3>
      <Link to="/about" className="card-link">More about me</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    defaultInt: state.about.defaultInt
  }
}

export default connect(mapStateToProps)(HomeCard)
