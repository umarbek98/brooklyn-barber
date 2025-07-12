const BrooklynServices = ({ services, onBookingClick }) => {
  return (
    <section className="services" role="region" aria-labelledby="services-title">
      <div className="services-container">
        <div className="services-subtitle" aria-label="Services section subtitle">
          AUTHENTIC SERVICES
        </div>
        <h2 id="services-title" className="services-title">
          CLASSIC BARBERING
        </h2>
        <div className="services-divider" role="separator" aria-hidden="true"></div>
        
        <div className="services-grid main-services" role="list" aria-label="Available barbering services">
          {services.map((service, index) => (
            <article key={service.id} className="service-card main-service" role="listitem">
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={`${service.name} - Professional barbering service illustration`}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-icon-overlay" aria-hidden="true">{service.icon}</div>
              </div>
              <h3 className="service-name">
                {service.name}
              </h3>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <div className="service-meta" role="group" aria-label={`Service details: $${service.price}, ${service.duration} duration`}>
                <span className="service-price" aria-label={`Price: ${service.price} dollars`}>${service.price}</span>
                <span className="service-duration" aria-label={`Duration: ${service.duration}`}>{service.duration}</span>
              </div>
              
              <button 
                onClick={onBookingClick}
                className="service-book-btn"
                aria-label={`Book ${service.name} appointment for $${service.price}`}
                title={`Book ${service.name} - ${service.duration}, $${service.price}`}
              >
                BOOK NOW
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrooklynServices
