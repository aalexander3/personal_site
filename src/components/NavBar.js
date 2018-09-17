import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Icon } from 'antd'
import '../stylesheets/NavBar.css'

import { showAbout } from '../actions/actions'

class NavBar extends Component {

  state = {
    toggled: false
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({toggled: !prevState.toggled}))
  }

  render(){
    let { toggled } = this.state
    let path = this.props.location.pathname

    return (
      <React.Fragment>
        <div className="navbar horizontal">
          <span className={toggled ? "span horizontal open" : "span horizontal" } style={{paddingTop:'3px'}}>ARREN ALEXANDER</span>
        </div>
        <div onMouseLeave={() => this.setState({ toggled: false })} className={toggled ? "navbar vertical open" : "navbar vertical"}>
          <img src={toggled ? "https://cdn4.iconfinder.com/data/icons/user-interface-54/18/Reject-512.png":"https://static.thenounproject.com/png/153-200.png"} alt="hamburger icon" onClick={this.toggleCollapsed}/>
          <Link to="/">
            {(toggled && path === '/') ? <p className="nav-words active"> HOME </p>
              : toggled ? <p className="nav-words"> HOME </p>
              :  <Icon type="home" className="nav-words icons" />}
          </Link>
          <Link to="/about">
            {(toggled && path === '/about') ? <p className="nav-words active" data-name="about" onClick={this.props.showAbout}> ABOUT </p>
              : toggled ? <p className="nav-words" data-name="about" onClick={this.props.showAbout}> ABOUT </p>
              : <Icon type="user" className="nav-words icons" data-name="about" onClick={this.props.showAbout} />}
          </Link>
          <Link to='/projects'>
            {(toggled && path === '/projects') ? <p className="nav-words active"> PROJECTS </p>
              : toggled ? <p className="nav-words"> PROJECTS </p>
              : <Icon type="bulb" className="nav-words icons" />}
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(connect(null, { showAbout })(NavBar))
