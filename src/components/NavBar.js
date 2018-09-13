import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
    return (
      <React.Fragment>
        <div className="navbar horizontal">
          <span className={toggled ? "span horizontal open" : "span horizontal" } style={{paddingTop:'3px'}}>ARREN ALEXANDER</span>
        </div>
        <div className={toggled ? "navbar vertical open" : "navbar vertical"}>
          <img src="https://static.thenounproject.com/png/153-200.png" alt="hamburger icon" onClick={this.toggleCollapsed}/>
          <Link to="/">
            <Icon type="home" className="nav-words icons" />
            {toggled ? <span className="nav-words">HOME </span> : null}
          </Link>
          <Link to="/about">
            <Icon type="user" className="nav-words icons" data-name="about" onClick={this.props.showAbout} />
            {toggled ? <span className="nav-words" data-name="about" onClick={this.props.showAbout}>ABOUT </span> : null}
          </Link>

          <Link to='/projects'>
            <Icon type="bulb" className="nav-words icons" />
            {toggled ? <span className="nav-words">PROJECTS </span> : null}
          </Link>
          {!toggled ? <span style={{float: 'right', paddingTop:'3px', marginRight: '.3rem'}}>ARREN ALEXANDER</span> : <span style={{float: 'right', paddingTop:'3px', marginRight: '.3rem'}}>A/A</span>}
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, { showAbout })(NavBar)
