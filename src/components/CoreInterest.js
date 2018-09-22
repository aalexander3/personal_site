import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showAbout, setInterest } from '../actions/actions'


class CoreInterest extends Component {

  state = {
    defaultInt: {}
  }

  // componentDidMount = () => {
  //   this.updateInt(this.props.interests[2])
  // }

  updateInt = int => {
    this.props.setInterest(int)
  }

  mappedInterests = () => {

    let { interests } = this.props
    // index === -1 ? interests = this.props.interests : interests = [...this.props.interests.slice(index), ...this.props.interests.slice(0,index)]
    return interests.map(int => {
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
          {/* <h1>{this.props.defaultInt.interest}</h1> */}
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
