import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from './Carousel'

class ProjectDetail extends Component {

  state = {
    selectedProject: this.props.projects.find(project => project.slug === this.props.match.params.name),
  }

  componentDidMount(){
    this.state.selectedProject.images.forEach(image => {
      const img = new Image();
      img.src = `/images/${image}`
    })
  }

  render(){

    const { name, images, github, description, demo, environment } = this.state.selectedProject

    return (
      <div className="project-detail">
        <Carousel images={images} name={name} />

        <div className="project-info">
          <h1>{name.toUpperCase()}</h1>
          <h4>{description}</h4>
          <p>Built with: {environment}</p>
          <a href={github} target="_blank" rel="noopener noreferrer" >GITHUB</a>
          { demo && <a href={demo} target="_blank" rel="noopener noreferrer" >VIEW</a> }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  }
}


export default withRouter(connect(mapStateToProps)(ProjectDetail))
