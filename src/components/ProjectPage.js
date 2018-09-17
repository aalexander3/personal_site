import React from 'react'
import { connect } from 'react-redux'
import ProjectCard from './ProjectCard'
import '../stylesheets/projectPage.css'


const ProjectPage = props => {

  const mappedProjects = props.projects.map(project => <ProjectCard key={project.slug} project={project} />)


  return (
    <div className="project-page">
      {mappedProjects}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
    defaultProj: state.projects.defaultProj
  }
}

export default connect(mapStateToProps)(ProjectPage)
