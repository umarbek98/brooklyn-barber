import { useEffect, useRef } from 'react'

const ConfirmationModal = ({ isOpen, onClose, selectedService, formData }) => {
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="confirmation-title"
      aria-describedby="confirmation-message"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="modal-content confirmation-modal" ref={modalRef}>
        <div className="confirmation-icon" aria-hidden="true">✅</div>
        <h3 id="confirmation-title" className="modal-title">
          APPOINTMENT BOOKED!
        </h3>
        <div className="confirmation-details">
          <p id="confirmation-message">Thank you! Your appointment has been successfully booked.</p>
          <p>We'll call you within 24 hours to confirm your appointment details.</p>
          
          <div className="appointment-summary" role="region" aria-labelledby="summary-title">
            <h4 id="summary-title">Appointment Summary:</h4>
            <div role="list">
              <p role="listitem"><strong>Service:</strong> {selectedService?.name}</p>
              <p role="listitem"><strong>Date:</strong> {formData.date ? new Date(formData.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) : ''}</p>
              <p role="listitem"><strong>Time:</strong> {formData.time}</p>
              <p role="listitem"><strong>Duration:</strong> {selectedService?.duration} minutes</p>
              <p role="listitem"><strong>Price:</strong> ${selectedService?.price}</p>
            </div>
          </div>
          
          <div className="contact-info" role="contentinfo" aria-label="Contact information">
            <p aria-label="Phone number">📞 (718) 555-CUTS</p>
            <p aria-label="Address">📍 123 Atlantic Avenue, Brooklyn Heights</p>
          </div>
        </div>
        
        <button 
          ref={closeButtonRef}
          onClick={onClose}
          className="btn-primary"
          aria-label="Close confirmation and return to main page"
        >
          PERFECT!
        </button>
      </div>
    </div>
  )
}

export default ConfirmationModal
