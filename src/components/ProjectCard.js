import React from 'react'


const ProjectCard = props => {
  const { name, description, images, github, demo } = props.project

  return (
    <div className="project-card">
      <img alt={name} src={'/images/' + images[0]} />
      <h1>{name.toUpperCase()}</h1>
      <p><a href={github} target="_blank" rel="noopener noreferrer" >CODE</a> | <a href={demo} target="_blank" rel="noopener noreferrer" >DEMO</a></p>
    </div>
  )
}

export default ProjectCard
