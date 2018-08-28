import React from 'react'

const PageCard = props => {
  const { page } = props

  return (
    <div className="page-card">
      <h1>{page.headline}</h1>
      <h3>{page.description}</h3>
    </div>
  )
}

export default PageCard
