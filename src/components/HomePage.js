import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageCard from './PageCard'

class HomePage extends Component {

  render(){
    const { home } = this.props

    return (
      <div className='home-page' >
        <PageCard page={ home } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { home: state.home }
}

export default connect(mapStateToProps)(HomePage)
