import React from 'react'

const Modal = ({ modalClose, modalOpen }) => {

  const showHide = modalOpen ? "modal display-block" : "modal display-none"

  return (
    <div className={showHide}>
      <section >
        <button onClick={modalClose}>Close</button>
      </section>
    </div>
  )
}

export default Modal