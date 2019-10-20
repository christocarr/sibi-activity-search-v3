import React from 'react'

const Modal = ({ modalClose, modalOpen }) => {

  const showHide = modalOpen ? "modal display-block" : "modal display-none"

  return (
    <div className={showHide}>
      <section >
        
      </section>
    </div>
  )
}

export default Modal