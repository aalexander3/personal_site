import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'
import CoreInterest from './CoreInterest'

class HomePage extends Component {

  state = {
    image: {
      src: ''
    }
  }

  componentDidMount(){
    let primaryImage = new Image()
    primaryImage.onload = () => {
      this.setState({
        image: {
          ...this.state.image,
          src: '/images/arren-cartoon.jpg'
        }
      })
    }
    primaryImage.src = '/images/arren-cartoon.jpg'
  }

  render(){
    const { home } = this.props
    const rotate = this.props.aboutToggle ? 'rotate' : ''
    const left = this.props.navToggle ? 'toggle-left' : ''

    return (
      <div className={`home-page ${rotate} ${left}`} >
        <div className='home-divider'>
          <HomeCard page={ home } />
          <img
            className='profile-image'
            alt="arren"
            src={this.state.image.src} />
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
