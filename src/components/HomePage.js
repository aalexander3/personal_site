import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component{

  state = {
    currentIndex: 0,
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
    // rotates through 0 - 4 and sets the currentIndex
    this.setState(prevState => {
      if (prevState.currentIndex === 3){
        return { currentIndex: 0 }
      } else {
        return { currentIndex: prevState.currentIndex + 1 }
      }
    })
  }

  changePage = e => {
    // onClick changes the current page, as well as resets the interval to for nextPage
    const index = this.pageMap.indexOf(e.target.dataset.name)
    this.setState({
      currentIndex: index
    }, this.clearAndSet)
  }

  goToPage = e => {
    // push onto window history the new page
    console.log(e.target.dataset.name)
  }

  pageMap = ['home', 'projects', 'about', 'contact']

  render(){
    const current = this.props.home[this.pageMap[this.state.currentIndex]]
    const makeCircles = this.pageMap.map(page => {
      return (<div
          className={"small-circle" + ((this.pageMap[this.state.currentIndex] === page) ? ' active' : '')}
          key={page}
          data-name={page}
          onClick={this.changePage}
        >
        </div>
      )
    })

    return (
      <div className={"page " + current.color}>
        {/* make this into a component? then it'll know about props */}
        <div className="page-card"
          onClick={this.goToPage}
          data-name={this.pageMap[this.state.currentIndex]}
        >
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
