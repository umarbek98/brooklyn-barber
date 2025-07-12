const BrooklynHero = ({ onBookingClick, onStoryClick }) => {
  return (
    <section className="hero" role="main" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-subtitle" aria-label="Established 1952 in Brooklyn, New York">
          EST. 1952 • BROOKLYN, NY
        </div>
        <h1 id="hero-title" className="hero-title">
          CLASSIC CUTS
        </h1>
        <div className="hero-tagline" role="text" aria-label="Business tagline">
          "Where Tradition Meets Style"
        </div>
        <p className="hero-description">
          Three generations of master barbers serving Brooklyn with authentic cuts, 
          straight razor shaves, and old-school hospitality since 1952.
        </p>
        <div className="hero-buttons" role="group" aria-label="Primary actions">
          <button 
            onClick={onBookingClick}
            className="btn-primary"
            aria-label="Book an appointment with our barbers"
            title="Book an appointment now"
          >
            BOOK APPOINTMENT
          </button>
          <button 
            onClick={onStoryClick}
            className="btn-secondary"
            aria-label="Learn about our barbershop's history and story"
            title="Read our story"
          >
            OUR STORY
          </button>
        </div>
      </div>
    </section>
  )
}

export default BrooklynHero
