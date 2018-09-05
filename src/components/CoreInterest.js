import React, { Component } from 'react'
import { connect } from 'react-redux'

class CoreInterest extends Component {

  state = {
    defaultInt: "I write interactive code"
  }

  updateInt = int => {
    this.setState({
      defaultInt: int.interest
    })
  }

  mappedInterests = this.props.interests.map(int => {
    return (
      <div key={ int.interest } className='interest' onMouseOver={() => this.updateInt(int)}>
        <img className="interest-icon" src={int.source} />
      </div>
    )
  })


  render() {
    return (
      <div className="core-interests">
        <h1>{this.state.defaultInt}</h1>
        <div className="mapped-interests">
          {this.mappedInterests}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    interests: state.about.coreInterests
  }
}

export default connect(mapStateToProps)(CoreInterest)
