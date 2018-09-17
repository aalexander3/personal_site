import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ProjectDetail extends Component {

  state = {
    selectedProject: this.props.projects.find(project => project.slug === this.props.match.params.name),
    imageIndex: 0
  }

  nextImage = () => {
    this.setState(prevState => {
      if (prevState.imageIndex === prevState.selectedProject.images.length - 1) {
        return {
          imageIndex: 0
        }
      } else {
        return {
          imageIndex: prevState.imageIndex + 1
        }
      }
    })
  }

  render(){

    const { name, images, github, slug,  } = this.state.selectedProject
    const { imageIndex } = this.state

    return (
      <div className="project-detail">
        <div className="carousel">
          <img className={imageIndex === 0 ? "carousel-image active" : imageIndex === 1 ? "carousel-image deactive" : "carousel-image doubleactive" }
            alt={name} src={'/images/' + images[0]} onClick={this.nextImage}/>
          <img className={imageIndex === 0 ? "carousel-image active" : imageIndex === 1 ? "carousel-image deactive" : "carousel-image doubleactive" }
             alt={name} src={'/images/' + images[1]} onClick={this.nextImage}/>
          <img className={imageIndex === 0 ? "carousel-image active" : imageIndex === 1 ? "carousel-image deactive" : "carousel-image doubleactive" }
             alt={name} src={'/images/' + images[2]} onClick={this.nextImage}/>
        </div>

        <div className="project-info">
          <h1>{name}</h1>
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
