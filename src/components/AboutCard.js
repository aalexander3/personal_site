import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleAbout } from '../actions/actions'

const AboutCard = props => {

  const { bio, bio2 , aboutToggle } = props.about
  const { toggleAbout } = props

  const showText = () => {
    return (
      <Fragment>
        <img src="https://cdn4.iconfinder.com/data/icons/user-interface-54/18/Reject-512.png"
          alt="close"
          onClick={ toggleAbout } />
        <h1>{ bio }</h1>
        <h4>{ bio2 }</h4>
      </Fragment>
    )
  }

  return (
    <div className={aboutToggle ? "about-card active" : "about-card hidden"} >
      {aboutToggle ? showText() : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps, { toggleAbout })(AboutCard)
