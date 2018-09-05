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
      <div className='extra-contact' >
        <a href='mailto:aralx73@gmail.com'>
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquicons/128/Email.png" />
        </a>
        <a href="https://github.com/aalexander3" target="_blank" rel="noopener noreferrer">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Github.png" />
        </a>
        <a href="https://www.linkedin.com/in/arren-alexander-10a361124/" target="_blank" rel="noopener noreferrer">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Linkedin.png" />
        </a>
        <a href="https://medium.com/@aralx73" target="_blank" rel="noopener noreferrer">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Blogger.png" />
        </a>
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
        {this.state.toggled ? <h4>Want to get in touch?</h4> : null}
        {this.state.toggled ? this.showInfo() : null}
      </footer>
    )
  }
}

export default ContactPage
