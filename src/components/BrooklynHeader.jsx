const BrooklynHeader = ({ appointments, onBookingClick, onAppointmentsClick }) => {
  return (
    <header className="header" role="banner">
      <div className="header-logo" role="img" aria-label="Brooklyn Barber Company Logo">
        🏙️ BROOKLYN BARBER Co.
      </div>
      <div className="header-right">
        <div className="header-contact" role="contentinfo" aria-label="Contact Information">
          <div aria-label="Phone number">📞 (718) 555-CUTS</div>
          <div aria-label="Location">📍 Brooklyn, NY</div>
        </div>
        <nav className="header-buttons" role="navigation" aria-label="Main navigation">
          <button 
            onClick={onAppointmentsClick}
            className="appointments-btn"
            aria-label={`View appointments. ${appointments.length} appointment${appointments.length !== 1 ? 's' : ''} booked.`}
            title="View your booked appointments"
          >
            📅 APPOINTMENTS ({appointments.length})
          </button>
          <button 
            onClick={onBookingClick}
            className="book-btn"
            aria-label="Book a new appointment"
            title="Book a new appointment with our barbers"
          >
            BOOK NOW
          </button>
        </nav>
      </div>
    </header>
  )
}

export default BrooklynHeader
