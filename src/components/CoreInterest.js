import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showAbout, setInterest } from '../actions/actions'

class CoreInterest extends Component {

  state = {
    defaultInt: {}
  }

  updateInt = int => {
    this.props.setInterest(int)
  }

  mappedInterests = () => {
    return this.props.interests.map(int => {
      return (
        <div key={ int.interest } className='interest' onMouseOver={() => this.updateInt(int)}>
          <img className="interest-icon" src={int.source} alt={int.interest} />
        </div>
      )
    })
  }

  render() {
    return (
        <div className="core-interests">
          <div className="mapped-interests">
            {this.mappedInterests()}
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    interests: state.about.coreInterests,
    defaultInt: state.about.defaultInt
  }
}

export default connect(mapStateToProps, { showAbout, setInterest })(CoreInterest)
