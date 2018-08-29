import React from 'react'
import { connect } from 'react-redux'

const CoreInterest = props => {
  const mappedInterests = props.interests.slice(0,4).map(int => {
    return (
    <div key={ int.interest } className='interest-tube'>
      <h3>{ int.interest } { int.emoji }</h3>
    </div>
    )
  })

  return (
    <div>
      <img className="cylinder" alt='cylinder' src='https://vectr.com/aalexander/c3zOUyi2aZ.svg?width=300&height=300&select=c3zOUyi2aZpage0&source=page'></img>
      <div className='cylinder-container'><h3>I'm a {props.interests[0].interest}</h3></div>
      <button> - </button>
      <button> + </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    interests: state.about.coreInterests
  }
}

export default connect(mapStateToProps)(CoreInterest)
