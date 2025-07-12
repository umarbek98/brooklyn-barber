import { useState, useEffect, useRef } from 'react'

const BookingModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  barbers, 
  services, 
  servicePackages, 
  appointments,
  formData,
  setFormData 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [availableSlots, setAvailableSlots] = useState([])
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

  const generateTimeSlots = (barber, date, serviceDuration) => {
    if (!barber || !date) return []
    
    const selectedBarber = barbers.find(b => b.id === barber)
    if (!selectedBarber) return []
    
    const selectedDate = new Date(date)
    const dayOfWeek = selectedDate.getDay()
    
    if (!selectedBarber.workDays.includes(dayOfWeek)) return []
    
    const slots = []
    const startHour = parseInt(selectedBarber.startTime.split(':')[0])
    const endHour = parseInt(selectedBarber.endTime.split(':')[0])
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeSlot = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        const endTime = new Date(selectedDate)
        endTime.setHours(hour, minute + serviceDuration, 0, 0)
        
        if (endTime.getHours() <= endHour) {
          const isBooked = appointments.some(apt => 
            apt.barber === barber && 
            apt.date === date && 
            apt.time === timeSlot
          )
          
          if (!isBooked) {
            slots.push({
              time: timeSlot,
              display: hour >= 12 ? 
                `${hour > 12 ? hour - 12 : hour}:${minute.toString().padStart(2, '0')} PM` :
                `${hour}:${minute.toString().padStart(2, '0')} AM`
            })
          }
        }
      }
    }
    
    return slots
  }

  useEffect(() => {
    if (formData.barber && formData.date && formData.service) {
      const selectedService = [...services, ...servicePackages].find(s => s.id === formData.service)
      const duration = selectedService ? selectedService.duration : 45
      const slots = generateTimeSlots(formData.barber, formData.date, duration)
      setAvailableSlots(slots)
    } else {
      setAvailableSlots([])
    }
  }, [formData.barber, formData.date, formData.service, appointments, services, servicePackages, barbers])

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      days.push({
        day,
        date: currentDate,
        isToday: currentDate.getTime() === today.getTime(),
        isPast: currentDate < today,
        isWeekend: currentDate.getDay() === 0 // Sunday
      })
    }
    
    return days
  }

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="modal-content booking-modal" ref={modalRef}>
        <div className="modal-header">
          <div className="modal-subtitle" aria-label="Company name">
            BROOKLYN BARBER Co.
          </div>
          <h3 id="booking-modal-title" className="modal-title">
            BOOK YOUR APPOINTMENT
          </h3>
          <p id="booking-modal-description" className="sr-only">
            Complete the form below to book your appointment. All required fields are marked with an asterisk.
          </p>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="modal-close"
            aria-label="Close booking modal"
            title="Close modal (Press Escape)"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={onSubmit} className="booking-form" noValidate>
          <fieldset className="form-row">
            <legend className="sr-only">Personal Information</legend>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-describedby="name-error"
                placeholder="Enter your full name"
                autoComplete="name"
              />
              <div id="name-error" className="sr-only" aria-live="polite"></div>
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-describedby="phone-error phone-help"
                placeholder="(718) 555-0123"
                autoComplete="tel"
              />
              <div id="phone-help" className="sr-only">Enter your phone number including area code</div>
              <div id="phone-error" className="sr-only" aria-live="polite"></div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-describedby="email-help"
              placeholder="your.email@example.com"
              autoComplete="email"
            />
            <div id="email-help" className="sr-only">Optional: We'll send appointment confirmations to this email</div>
          </div>

          <fieldset className="form-group">
            <legend>Choose Your Barber *</legend>
            <div 
              className="barbers-grid" 
              role="radiogroup" 
              aria-required="true"
              aria-describedby="barber-help"
            >
              {barbers.map(barber => (
                <div 
                  key={barber.id}
                  className={`barber-card ${formData.barber === barber.id ? 'selected' : ''}`}
                  role="radio"
                  aria-checked={formData.barber === barber.id}
                  tabIndex={formData.barber === barber.id ? 0 : -1}
                  onClick={() => setFormData(prev => ({ ...prev, barber: barber.id }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setFormData(prev => ({ ...prev, barber: barber.id }))
                    }
                  }}
                  aria-labelledby={`barber-${barber.id}-name`}
                  aria-describedby={`barber-${barber.id}-details`}
                >
                  <div className="barber-avatar" aria-hidden="true">{barber.image}</div>
                  <div className="barber-info">
                    <h4 id={`barber-${barber.id}-name`}>{barber.name}</h4>
                    <p className="barber-title">{barber.title}</p>
                    <p className="barber-experience">{barber.experience}</p>
                    <div className="barber-specialties" id={`barber-${barber.id}-details`}>
                      {barber.specialties.slice(0, 2).map((specialty, index) => (
                        <span key={index} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="barber-help" className="sr-only">Use arrow keys to navigate between barber options</div>
            <input
              type="hidden"
              name="barber"
              value={formData.barber}
              required
              aria-hidden="true"
            />
          </fieldset>

          <fieldset className="form-group">
            <legend>Select Service *</legend>
            
            <div className="service-section">
              <h4 className="service-section-title" id="packages-heading">🎁 Popular Packages</h4>
              <div 
                className="services-grid packages-grid" 
                role="radiogroup" 
                aria-labelledby="packages-heading"
                aria-required="true"
              >
                {servicePackages.map(pkg => (
                  <div 
                    key={pkg.id}
                    className={`service-card package-card ${formData.service === pkg.id ? 'selected' : ''} ${pkg.popular ? 'popular' : ''} ${pkg.premium ? 'premium' : ''}`}
                    role="radio"
                    aria-checked={formData.service === pkg.id}
                    tabIndex={formData.service === pkg.id ? 0 : -1}
                    onClick={() => setFormData(prev => ({ ...prev, service: pkg.id }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setFormData(prev => ({ ...prev, service: pkg.id }))
                      }
                    }}
                    aria-labelledby={`package-${pkg.id}-name`}
                    aria-describedby={`package-${pkg.id}-details`}
                  >
                    {pkg.popular && <div className="badge popular-badge" aria-label="Most popular option">Most Popular</div>}
                    {pkg.premium && <div className="badge premium-badge" aria-label="Premium service">Premium</div>}
                    <div className="package-icon" aria-hidden="true">{pkg.icon}</div>
                    <div className="service-info">
                      <h4 id={`package-${pkg.id}-name`}>{pkg.name}</h4>
                      <p className="service-description">{pkg.description}</p>
                      <div className="package-pricing" id={`package-${pkg.id}-details`}>
                        <span className="package-price" aria-label={`Current price: ${pkg.price} dollars`}>${pkg.price}</span>
                        <span className="package-original-price" aria-label={`Original price: ${pkg.originalPrice} dollars`}>${pkg.originalPrice}</span>
                        <span className="package-savings" aria-label={`You save ${pkg.originalPrice - pkg.price} dollars`}>Save ${pkg.originalPrice - pkg.price}!</span>
                      </div>
                      <div className="package-duration" aria-label={`Duration: ${pkg.duration} minutes`}>{pkg.duration} minutes</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-section">
              <h4 className="service-section-title" id="services-heading">✂️ Individual Services</h4>
              <div 
                className="services-grid"
                role="radiogroup" 
                aria-labelledby="services-heading"
              >
                {services.map(service => (
                  <div 
                    key={service.id}
                    className={`service-card ${formData.service === service.id ? 'selected' : ''}`}
                    role="radio"
                    aria-checked={formData.service === service.id}
                    tabIndex={formData.service === service.id ? 0 : -1}
                    onClick={() => setFormData(prev => ({ ...prev, service: service.id }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setFormData(prev => ({ ...prev, service: service.id }))
                      }
                    }}
                    aria-labelledby={`service-${service.id}-name`}
                    aria-describedby={`service-${service.id}-details`}
                  >
                    <div className="service-image-small">
                      <img 
                        src={service.image} 
                        alt={`${service.name} - Professional barbering service`}
                        loading="lazy"
                      />
                      <div className="service-icon-small" aria-hidden="true">{service.icon}</div>
                    </div>
                    <div className="service-info">
                      <h4 id={`service-${service.id}-name`}>{service.name}</h4>
                      <p className="service-description">{service.description}</p>
                      <div className="service-details" id={`service-${service.id}-details`}>
                        <span className="service-price" aria-label={`Price: ${service.price} dollars`}>${service.price}</span>
                        <span className="service-duration" aria-label={`Duration: ${service.duration} minutes`}>{service.duration} min</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <input
              type="hidden"
              name="service"
              value={formData.service}
              required
              aria-hidden="true"
            />
          </fieldset>

          {formData.barber && (
            <fieldset className="form-group">
              <legend>Choose Date *</legend>
              <div className="calendar-container" role="application" aria-label="Date picker calendar">
                <div className="calendar-header">
                  <button 
                    type="button"
                    className="calendar-nav"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                    aria-label={`Previous month: ${new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
                  >
                    ‹
                  </button>
                  <h3 className="calendar-month" aria-live="polite">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button 
                    type="button"
                    className="calendar-nav"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                    aria-label={`Next month: ${new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
                  >
                    ›
                  </button>
                </div>
                
                <div className="calendar-grid" role="grid" aria-label="Calendar days">
                  <div className="calendar-days-header" role="row">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="calendar-day-header" role="columnheader">{day}</div>
                    ))}
                  </div>
                  
                  <div className="calendar-days">
                    {getDaysInMonth(currentMonth).map((day, index) => {
                      if (!day) return <div key={index} className="calendar-day empty" role="gridcell" aria-hidden="true"></div>
                      
                      const selectedBarber = barbers.find(b => b.id === formData.barber)
                      const isWorkDay = selectedBarber?.workDays.includes(day.date.getDay())
                      const dateString = formatDate(day.date)
                      const isSelected = formData.date === dateString
                      const isClickable = !day.isPast && isWorkDay
                      
                      return (
                        <div
                          key={index}
                          className={`calendar-day ${day.isPast ? 'past' : ''} ${!isWorkDay ? 'unavailable' : ''} ${isSelected ? 'selected' : ''} ${day.isToday ? 'today' : ''}`}
                          role="gridcell"
                          tabIndex={isClickable ? 0 : -1}
                          aria-selected={isSelected}
                          aria-label={`${day.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}${!isWorkDay ? ' - Barber not available' : ''}${day.isPast ? ' - Past date' : ''}${isSelected ? ' - Selected' : ''}`}
                          onClick={() => {
                            if (isClickable) {
                              setFormData(prev => ({ ...prev, date: dateString }))
                            }
                          }}
                          onKeyDown={(e) => {
                            if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault()
                              setFormData(prev => ({ ...prev, date: dateString }))
                            }
                          }}
                        >
                          {day.day}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="date"
                value={formData.date}
                required
                aria-hidden="true"
              />
            </fieldset>
          )}

          {formData.barber && formData.date && formData.service && (
            <fieldset className="form-group">
              <legend>Available Times *</legend>
              <div 
                className="time-slots" 
                role="radiogroup" 
                aria-required="true"
                aria-describedby="time-help"
              >
                {availableSlots.length > 0 ? (
                  availableSlots.map(slot => (
                    <button
                      key={slot.time}
                      type="button"
                      className={`time-slot ${formData.time === slot.time ? 'selected' : ''}`}
                      role="radio"
                      aria-checked={formData.time === slot.time}
                      tabIndex={formData.time === slot.time ? 0 : -1}
                      onClick={() => setFormData(prev => ({ ...prev, time: slot.time }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setFormData(prev => ({ ...prev, time: slot.time }))
                        }
                      }}
                      aria-label={`Available appointment time at ${slot.display}`}
                    >
                      {slot.display}
                    </button>
                  ))
                ) : (
                  <p className="no-slots" role="status" aria-live="polite">No available time slots for this date. Please select another date.</p>
                )}
              </div>
              <div id="time-help" className="sr-only">Select your preferred appointment time</div>
              <input
                type="hidden"
                name="time"
                value={formData.time}
                required
                aria-hidden="true"
              />
            </fieldset>
          )}

          <div className="form-group">
            <label htmlFor="notes">Special Requests</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any special requests or notes for your barber..."
              rows="3"
              aria-describedby="notes-help"
            />
            <div id="notes-help" className="sr-only">Optional: Add any specific requests or information for your barber</div>
          </div>

          <div className="form-actions" role="group" aria-label="Form actions">
            <button 
              type="button"
              onClick={onClose}
              className="btn-secondary"
              aria-label="Cancel appointment booking"
            >
              CANCEL
            </button>
            <button 
              type="submit"
              className="btn-primary"
              aria-label="Submit appointment booking form"
              disabled={!formData.name || !formData.phone || !formData.service || !formData.barber || !formData.date || !formData.time}
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
