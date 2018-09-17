import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { setDetail } from '../actions/actions'
import { connect } from 'react-redux'

class ProjectCard extends Component {

  render (){
    const { name, images, github, demo, slug } = this.props.project
    const { setDetail } = this.props

    return (
      <div className="project-card" >
        <div className="overlay"> <Link to={`/projects/${slug}`}
          onClick={() => setDetail(this.props.project)}>MORE INFO</Link>
        </div>
        <img alt={name} src={'/images/' + images[0]} />
        <h1>{name.toUpperCase()}</h1>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer" >CODE</a>
          {demo ? [" | " ,  <a href={demo} target="_blank" rel="noopener noreferrer" > DEMO</a> ]: null }
        </p>
      </div>
    )
  }
}

export default connect(null, { setDetail })(ProjectCard)
