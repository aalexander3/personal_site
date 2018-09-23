import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'
import CoreInterest from './CoreInterest'

class HomePage extends Component {

  render(){
    const { home } = this.props

    return (
      <div className='home-page' >
        <div className='home-divider'>
          <HomeCard page={ home } />
          <img
            className='profile-image'
            alt="arren"
            src='/images/arren-cartoon.jpg' />
        </div>
        <CoreInterest />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    home: state.home,
   }
}

export default connect(mapStateToProps)(HomePage)
