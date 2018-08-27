import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Icon } from 'antd'
import '../stylesheets/NavBar.css'


class NavBar extends Component {

  state = {
    toggled: false
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({toggled: !prevState.toggled}))
  }

  render(){
    return (
      <div className="navbar">

        <Icon type={this.state.toggled ? 'minus-square-o' : 'plus-square-o'} className="nav-words icons" onClick={this.toggleCollapsed}/>
        <Link to="/">
          <Icon type="home" className="nav-words icons" />
          {this.state.toggled ? <span className="nav-words">HOME </span> : null}
        </Link>

        <Link to="/about">
          <Icon type="user" className="nav-words icons" />
          {this.state.toggled ? <span className="nav-words">ABOUT </span> : null}
        </Link>

        <Link to='/projects'>
          <Icon type="bulb" className="nav-words icons" />
          {this.state.toggled ? <span className="nav-words">PROJECTS </span> : null}
        </Link>

        <Link to='/contact'>
          <Icon type="mail" className="nav-words icons" />
          {this.state.toggled ? <span className="nav-words">CONTACT </span> : null}
        </Link>
      </div>
    )
  }
}

export default NavBar
