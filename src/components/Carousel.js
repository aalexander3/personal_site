import React, { Component } from 'react'

class Carousel extends Component {
  state = {
    imageIndex: 0,
    left: false
  }

  trackMouse = e => {
    let switchPoint = e.target.offsetWidth / 2
    if (e.screenX - 100 > switchPoint) {
      if (this.state.left) {
        this.setState({ left: false })
      }
    } else {
      if (!this.state.left) {
        this.setState({ left: true })
      }
    }
  }

  triggerCarousel = () => {
    this.state.left ? this.leftClick() : this.rightClick()
  }

  rightClick = () => {
    this.setState(prevState => {
      if (prevState.imageIndex === this.props.images.length - 1) {
        return {
          imageIndex: 0
        }
      } else {
        return {
          imageIndex: prevState.imageIndex + 1
        }
      }
    })
  }

  leftClick = () => {
    this.setState(prevState => {
      if (prevState.imageIndex === 0) {
        return {
          imageIndex: this.props.images.length - 1
        }
      } else {
        return {
          imageIndex: prevState.imageIndex - 1
        }
      }
    })
  }

  render() {
    const { imageIndex } = this.state
    const { images, name } = this.props

    return (
      <div className={ this.state.left ? "carousel left" : "carousel" } onMouseMove={this.trackMouse} onClick={this.triggerCarousel} >
        <img className={imageIndex === 0 ? "carousel-image active" : imageIndex === 1 ? "carousel-image deactive" : "carousel-image doubleactive" }
          alt={name} src={'/images/' + images[0]} />
        <img className={imageIndex === 0 ? "carousel-image active" : imageIndex === 1 ? "carousel-image deactive" : "carousel-image doubleactive" }
           alt={name} src={'/images/' + images[1]} />
        <img className={imageIndex === 0 ? "carousel-image active" : imageIndex === 1 ? "carousel-image deactive" : "carousel-image doubleactive" }
           alt={name} src={'/images/' + images[2]} />
      </div>
    )
  }
}

export default Carousel
