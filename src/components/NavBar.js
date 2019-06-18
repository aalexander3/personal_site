import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import { showAbout, toggleAbout, closeAbout, toggleNav } from '../actions/actions'

class NavBar extends Component {

  toggleCollapsed = () => {
    this.props.toggleNav({ toggled: !this.props.toggled })
    this.handleClose()
  }

  closeNav = () => {
    this.props.toggleNav({ toggled: false })
  }

  divClick = () => {
    this.props.toggleAbout()
    this.closeNav()
  }

  linkClick = () => {
    this.props.closeAbout()
    this.closeNav()
  }

  handleClose = () => (this.props.toggled ? null : this.props.closeAbout())

  render(){
    let { toggled } = this.props
    let path = this.props.location.pathname

    return (
      <Fragment>
        <div className="navbar horizontal">
          <span className={toggled ? "span horizontal open" : "span horizontal" } style={{paddingTop:'3px'}}>
          <img
            className='profile-image'
            alt="arren"
            src='/images/arren-cartoon.jpg' />
            {toggled ? "AA" : "ARREN ALEXANDER" }
          </span>
        </div>
        <nav onMouseLeave={this.closeNav} className={toggled ? "navbar vertical open" : "navbar vertical"}>
          <div onClick={this.toggleCollapsed} >
            <Icon type="plus-circle" className={toggled ? "nav-words icons toggled" :" nav-words icons not-toggled"} />
          </div>
          <Link to="/" onClick={this.linkClick}>
            {(toggled && path === '/') ? <p className="nav-words active"> HOME </p>
              : toggled ? <p className="nav-words"> HOME </p>
              :  <Icon type="home" className="nav-words icons" />}
          </Link>
          <div onClick={this.divClick} >
            {(toggled && path === '/about') ? <p className="nav-words active" data-name="about" > ABOUT </p>
              : toggled ? <p className="nav-words" data-name="about" > ABOUT </p>
              : <Icon type="user" className="nav-words icons" data-name="about" />}
          </div>
          <Link to='/projects' onClick={this.linkClick} >
            {(toggled && path.includes('/projects')) ? <p className="nav-words active"> PROJECTS </p>
              : toggled ? <p className="nav-words"> PROJECTS </p>
              : <Icon type="bulb" className="nav-words icons" />}
          </Link>
        </nav>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    toggled: state.nav.toggled
  }
}

export default withRouter(connect(mapStateToProps, { showAbout, toggleAbout, closeAbout, toggleNav })(NavBar))
