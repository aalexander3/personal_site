import React from 'react'
import { connect } from 'react-redux'
import ProjectCard from './ProjectCard'

const ProjectPage = ({ projects, aboutToggle, navToggle }) => {

  const mappedProjects = projects.map(project => <ProjectCard key={project.slug} project={project} />)
  const rotate = aboutToggle ? 'rotate' : ''
  const left = navToggle ? 'toggle-left' : ''

  return (
    <div className={`project-page ${rotate} ${left}`}>
      {mappedProjects}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
    aboutToggle: state.about.aboutToggle,
    navToggle: state.nav.toggled
  }
}

export default connect(mapStateToProps)(ProjectPage)
