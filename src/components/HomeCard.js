import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = props => {
  const { page } = props

  return (
    <div className="page-card">
      <h1>{page.headline}</h1>
      <h3>{page.description}</h3>
      <Link to="/about" className="card-link">More about me</Link>
    </div>
  )
}

export default HomeCard
