import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleAbout } from '../actions/actions'
import { Icon } from 'antd'

const AboutCard = ({ about: { bio, bio2 , aboutToggle }, toggleAbout }) => {

  const showText = () => {
    return (
      <Fragment>
        <Icon type="close-circle" className="nav-words icons about" onClick={ toggleAbout }  />
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
