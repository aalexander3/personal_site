import React from 'react'


const ProjectCard = props => {
  const { name, description, images, github, demo } = props.project

  return (
    <div className="project-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <img alt={name} src={require('../images/' + images[0])} />
    </div>
  )
}

export default ProjectCard
