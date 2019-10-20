import React from 'react'
import PDFDocument from './PDFDocument'

const Modal = ({ selectedType, selectedActivities, modalClose, modalOpen }) => {

  const showHide = modalOpen ? "modal display-block" : "modal display-none"

  return (
    <div className={showHide}>
      <section >
        <button onClick={modalClose}>Close</button>
        <PDFDocument
          activityTypes={selectedType}
          activities={selectedActivities} 
        />
      </section>
    </div>
  )
}

export default Modal