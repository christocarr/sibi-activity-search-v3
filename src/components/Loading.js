import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading type="spinningBubbles"  color='blue' height='10%' width='10%' />
    </div>
    
  )
}

export default Loading