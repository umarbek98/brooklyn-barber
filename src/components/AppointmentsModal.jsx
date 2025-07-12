import { useEffect, useRef } from 'react'

const AppointmentsModal = ({ 
  isOpen, 
  onClose, 
  appointments, 
  setAppointments, 
  onBookingClick,
  services,
  servicePackages,
  barbers 
}) => {
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
      aria-labelledby="appointments-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="modal-content appointments-modal" ref={modalRef}>
        <div className="modal-header">
          <h3 id="appointments-title" className="modal-title">
            📅 BOOKED APPOINTMENTS
          </h3>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="modal-close"
            aria-label="Close appointments modal"
            title="Close modal (Press Escape)"
          >
            ✕
          </button>
        </div>
        
        {appointments.length === 0 ? (
          <div className="no-appointments" role="status">
            <p>No appointments booked yet.</p>
            <button 
              onClick={() => {
                onClose()
                onBookingClick()
              }}
              className="btn-primary"
              aria-label="Book your first appointment"
            >
              BOOK FIRST APPOINTMENT
            </button>
          </div>
        ) : (
          <div className="appointments-list" role="list" aria-label={`${appointments.length} booked appointment${appointments.length !== 1 ? 's' : ''}`}>
            {appointments.map((appointment) => {
              const service = [...services, ...servicePackages].find(s => s.id === appointment.service)
              const barber = barbers.find(b => b.id === appointment.barber)
              return (
                <article key={appointment.id} className="appointment-card" role="listitem">
                  <div className="appointment-header">
                    <h4>{appointment.name}</h4>
                    <span className="appointment-date">{appointment.date}</span>
                  </div>
                  
                  <div className="appointment-details" role="group" aria-labelledby={`appointment-${appointment.id}-details`}>
                    <h5 id={`appointment-${appointment.id}-details`} className="sr-only">Appointment Details</h5>
                    <div className="detail-row">
                      <span className="label">Barber:</span>
                      <span className="value">{barber?.name}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Service:</span>
                      <span className="value">
                        {service?.name}
                        {service?.category === 'package' && <span className="package-badge" aria-label="Package deal">Package</span>}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Time:</span>
                      <span className="value">{appointment.time}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Duration:</span>
                      <span className="value">{service?.duration} min</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Price:</span>
                      <span className="value">
                        ${service?.price}
                        {service?.originalPrice && (
                          <span className="original-price" aria-label={`Original price was ${service.originalPrice} dollars`}>(Was ${service.originalPrice})</span>
                        )}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Phone:</span>
                      <span className="value">{appointment.phone}</span>
                    </div>
                    {appointment.email && (
                      <div className="detail-row">
                        <span className="label">Email:</span>
                        <span className="value">{appointment.email}</span>
                      </div>
                    )}
                    {appointment.notes && (
                      <div className="detail-row">
                        <span className="label">Notes:</span>
                        <span className="value">{appointment.notes}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="appointment-footer">
                    <small>Booked: {appointment.createdAt}</small>
                    <button 
                      onClick={() => {
                        setAppointments(prev => prev.filter(apt => apt.id !== appointment.id))
                      }}
                      className="delete-btn"
                      aria-label={`Cancel appointment for ${appointment.name} on ${appointment.date} at ${appointment.time}`}
                    >
                      Cancel
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppointmentsModal
