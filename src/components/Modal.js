import React from 'react'
import PDFDocument from './PDFDocument'

const Modal = ({ selectedTypes, selectedActivities, modalClose, modalOpen }) => {
  
  const showHide = modalOpen ? "modal display-block" : "modal display-none"

  return (
    <div className={showHide}>
      <section >
        <button className="modal-close-button" onClick={modalClose}>Close</button>
        <PDFDocument
          activityTypes={selectedTypes}
          activities={selectedActivities} 
        />
      </section>
    </div>
  )
}

export default Modal