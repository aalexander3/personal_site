import React, { Component } from 'react'
import '../stylesheets/contact.css'


class ContactPage extends Component {

  state = { toggled: false }

  toggleInfo = () => {
    this.setState(prevState => ({toggled: !prevState.toggled}))
  }

  showInfo = () => {
    return (
      <div className='extra-contact' >
        <a href="mailto:aralx73@gmail.com">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquicons/128/Email.png" alt="email" />
        </a>
        <a href="https://github.com/aalexander3" target="_blank" rel="noopener noreferrer">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/arren-alexander-10a361124/" target="_blank" rel="noopener noreferrer">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Linkedin.png" alt="linkedin" />
        </a>
        <a href="https://medium.com/@aralx73" target="_blank" rel="noopener noreferrer">
          <img className='contact-icons' src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Blogger.png" alt="blogger" />
        </a>
      </div>
    )
  }

  render() {
    return (
      <footer
        className={this.state.toggled ? "contact open" : "contact closed"}
        onClick={this.toggleInfo}
        onMouseLeave={() => this.setState({ toggled: false })}
        >
        <h3 style={this.state.toggled ? {textDecoration: 'underline'} : null}>CONTACT</h3>
        {this.state.toggled ? <h4>Want to get in touch?</h4> : null}
        {this.state.toggled ? this.showInfo() : null}
      </footer>
    )
  }
}

export default ContactPage
