import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { setDetail, closeAbout } from '../actions/actions'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'


class ProjectCard extends Component {

  projectClick = () => {
    this.props.closeAbout()
    this.props.setDetail(this.props.project)
  }

  render (){
    const { name, images, github, demo, slug } = this.props.project
    const { setDetail } = this.props

    return (
      <div className="project-card" >
        <MediaQuery minWidth={768}>
          <div className="overlay">
            <Link to={`/projects/${slug}`}
              onClick={this.projectClick}>
              MORE INFO
            </Link>
          </div>
        </MediaQuery>
        <div className="project-img">
          <img alt={name} src={'/images/' + images[0]} />
        </div>
        <h1>{name.toUpperCase()}</h1>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer" > CODE </a>
          {demo ? [" | ", <a href={demo} target="_blank" rel="noopener noreferrer" > DEMO </a>]: null }
          <MediaQuery maxWidth={767}>
            {[" | ", <Link to={`/projects/${slug}`}
              onClick={this.projectClick}>
               MORE INFO
            </Link>]}
          </MediaQuery>
        </p>
      </div>
    )
  }
}

export default connect(null, { setDetail, closeAbout })(ProjectCard)
