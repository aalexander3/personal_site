import React, { Component } from 'react'


class ProjectCard extends Component {
  state = {
    hovered: false
  }

  overlayProject = () => {
    this.setState(prevState => ({hovered: !prevState.hovered }))
  }

  render (){
    const { name, images, github, demo } = this.props.project
    const { hovered } = this.state

    return (
      <div className="project-card">
        { hovered ? <div className="overlay"> <button>MORE INFO</button></div> : null }
        <img alt={name} src={'/images/' + images[0]} onMouseOver={this.overlayProject} onMouseLeave={this.overlayProject}/>
        <h1>{name.toUpperCase()}</h1>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer" >CODE</a>
          {demo ? [" | " ,  <a href={demo} target="_blank" rel="noopener noreferrer" > DEMO</a> ]: null }
        </p>
      </div>
    )
  }
}

export default ProjectCard
