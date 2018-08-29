import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Icon } from 'antd'
import '../stylesheets/NavBar.css'

import { handleAboutChange } from '../actions/actions'

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
          <Icon type="user" className="nav-words icons" data-name="about" onClick={this.props.handleAboutChange} />
          {this.state.toggled ? <span className="nav-words" data-name="about" onClick={this.props.handleAboutChange}>ABOUT </span> : null}
        </Link>

        <Link to='/projects'>
          <Icon type="bulb" className="nav-words icons" />
          {this.state.toggled ? <span className="nav-words">PROJECTS </span> : null}
        </Link>
        {!this.state.toggled ? <span style={{float: 'right', marginRight: '.3rem'}}>ARREN ALEXANDER</span> : null}
      </div>
    )
  }
}

export default connect(null, { handleAboutChange })(NavBar)
