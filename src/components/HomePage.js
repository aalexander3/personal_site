import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component{

  state = {
    currentPage: 0,
    interval: 0
  }

  componentDidMount = () => {
    this.setState({
      interval: setInterval(this.nextPage, 5000)
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
  }

  clearAndSet = () => {
    clearInterval(this.state.interval)
    this.setState({
      interval: setInterval(this.nextPage, 5000)
    })
  }

  nextPage = () => {
    // rotates through 0 - 4 and sets the currentPage
    this.setState(prevState => {
      if (prevState.currentPage === 3){
        return { currentPage: 0 }
      } else {
        return { currentPage: prevState.currentPage + 1 }
      }
    })
  }

  changePage = (e) => {
    // onClick changes the current page, as well as resets the interval to for nextPage
    const index = this.pageMap.indexOf(e.target.dataset.name)
    this.setState({
      currentPage: index
    }, this.clearAndSet)
  }

  pageMap = ['home', 'projects', 'about', 'contact']

  render(){
    const current = this.props.home[this.pageMap[this.state.currentPage]]
    const makeCircles = this.pageMap.map(page => {
      return (<div
          className={"small-circle" + ((this.pageMap[this.state.currentPage] === page) ? ' active' : '')}
          key={page}
          data-name={page}
          onClick={this.changePage}
        >
        </div>
      )
    })

    return (
      <div className={"page " + current.color}>
        <div className="page-card">
          <h1>{current.headline}</h1>
          <h3>{current.description}</h3>
        </div>
        <div className="circle-holder">{makeCircles}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {home: state.home}
}

export default connect(mapStateToProps)(HomePage)
