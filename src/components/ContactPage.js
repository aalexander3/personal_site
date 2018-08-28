import React, { Component } from 'react'
import { Icon } from 'antd'
import '../stylesheets/contact.css'


class ContactPage extends Component {

  state = { toggled: false }

  toggleInfo = () => {
    this.setState(prevState => ({toggled: !prevState.toggled}))
  }

  showInfo = () => {
    return (
      <div className='extra-contact'>
        <h4>Want to get in touch?</h4>
        <p>e-mail: <span>aralx73@gmail.com</span></p>
        <div style={{display: 'flex', justifyContent:'space-evenly', flexDirection: 'row'}}>
          <a href="https://github.com/aalexander3" target="_blank" rel="noopener noreferrer">
            <Icon type="github" className='contact-icons' />
          </a>
          <a href="https://www.linkedin.com/in/arren-alexander-10a361124/" target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" className='contact-icons' />
          </a>
          <a href="https://medium.com/@aralx73" target="_blank" rel="noopener noreferrer">
            <Icon type="medium" className='contact-icons' />
          </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <footer
        className="contact"
        onClick={this.toggleInfo}
        style={this.state.toggled ? {height: '140px'} : {height: '40px'}} >
        <h3 style={this.state.toggled ? {textDecoration: 'underline'} : null}>contact</h3>
        {this.state.toggled ? this.showInfo() : null}
      </footer>
    )
  }
}

export default ContactPage
