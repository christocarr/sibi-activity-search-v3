import React from 'react'

class BackToTop extends React.Component {
  state = {
    intervalId: 0
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs)
    this.setState({ intervalId: intervalId })
  }

  render() {
    return (
      <button className="back-to-top" onClick={() => {this.scrollToTop()}}>
        ^
      </button>
    )
  }
}

export default BackToTop