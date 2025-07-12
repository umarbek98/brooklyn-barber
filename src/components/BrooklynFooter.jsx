const BrooklynFooter = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-logo" aria-label="Brooklyn Barber Company">
          🏙️ BROOKLYN BARBER Co.
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h4>LOCATION</h4>
            <address>
              📍 123 Atlantic Avenue<br/>
              Brooklyn Heights, NY 11201<br/>
              Near Brooklyn Bridge
            </address>
          </div>
          
          <div className="footer-section">
            <h4>HOURS</h4>
            <div role="list" aria-label="Business hours">
              <div role="listitem"><strong>MON-FRI:</strong> 8:00 AM - 8:00 PM</div>
              <div role="listitem"><strong>SATURDAY:</strong> 8:00 AM - 6:00 PM</div>
              <div role="listitem"><strong>SUNDAY:</strong> 10:00 AM - 5:00 PM</div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>CONTACT</h4>
            <div role="list" aria-label="Contact information">
              <div role="listitem" aria-label="Phone number">📞 (718) 555-CUTS</div>
              <div role="listitem" aria-label="Email address">✉️ info@brooklynbarber.co</div>
              <div role="listitem">🌐 Walk-ins Welcome</div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Brooklyn Barber Co. | Proudly serving NYC since 1952</p>
          <p>
            "Three generations, one tradition"
          </p>
        </div>
      </div>
    </footer>
  )
}

export default BrooklynFooter
