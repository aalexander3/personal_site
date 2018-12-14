import React from 'react'
import { connect } from 'react-redux'
import ProjectCard from './ProjectCard'
import '../stylesheets/projectPage.css'


const ProjectPage = props => {

  const mappedProjects = props.projects.map(project => <ProjectCard key={project.slug} project={project} />)
  const rotate = props.aboutToggle ? 'rotate' : ''
  const left = props.navToggle ? 'left' : ''

  return (
    <div className={`project-page ${rotate} ${left}`}>
      {mappedProjects}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
    defaultProj: state.projects.defaultProj,
    aboutToggle: state.about.aboutToggle,
    navToggle: state.nav.toggled
  }
}

export default connect(mapStateToProps)(ProjectPage)
