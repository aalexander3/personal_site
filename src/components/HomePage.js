import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'
import CoreInterest from './CoreInterest'

class HomePage extends Component {

  render(){
    const { home } = this.props
    const rotate = this.props.aboutToggle ? 'rotate' : ''
    const left = this.props.navToggle ? 'toggle-left' : ''

    return (
      <div className={`home-page ${rotate} ${left}`} >
        <div className='home-divider'>
          <HomeCard page={ home } />
        </div>
        <CoreInterest />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    home: state.home,
    aboutToggle: state.about.aboutToggle,
    navToggle: state.nav.toggled
   }
}

export default connect(mapStateToProps)(HomePage)
