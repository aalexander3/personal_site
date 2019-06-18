import React from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'
import CoreInterest from './CoreInterest'

const HomePage = ({ home, aboutToggle, navToggle }) => {
  const rotate = aboutToggle ? 'rotate' : ''
  const left = navToggle ? 'toggle-left' : ''

  return (
    <div className={`home-page ${rotate} ${left}`} >
      <div className='home-divider'>
        <HomeCard page={ home } />
      </div>
      <CoreInterest />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    home: state.home,
    aboutToggle: state.about.aboutToggle,
    navToggle: state.nav.toggled
   }
}

export default connect(mapStateToProps)(HomePage)
