import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({ loading }) => {

  const showHide = loading ? "loading-container display-block" : "loading-container display-none"

  return (
    <div className={showHide}>
      <ReactLoading type="spinningBubbles"  color='blue' height='10%' width='10%' />
    </div>
    
  )
}

export default Loading