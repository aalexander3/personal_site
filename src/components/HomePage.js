import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'
import AboutPage from './AboutPage'

class HomePage extends Component {

  render(){
    const { home } = this.props

    return (
      <div className='home-page' >
        {/* <div className='background'></div> */}
        <img
          className='profile-image'
          alt="arren"
          src='/images/arren-cartoon.jpg' />
        <HomeCard page={ home } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { home: state.home }
}

export default connect(mapStateToProps)(HomePage)
