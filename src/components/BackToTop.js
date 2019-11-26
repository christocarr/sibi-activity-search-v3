import React from 'react'

class BackToTop extends React.Component {
  state = {
    intervalId: 0
  }
  render() {
    return (
      <button className="back-to-top">
        ^
      </button>
    )
  }
}

export default BackToTop