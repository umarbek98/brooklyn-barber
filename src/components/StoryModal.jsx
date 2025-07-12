import { useEffect, useRef } from 'react'

const StoryModal = ({ isOpen, onClose, onBookingClick }) => {
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
      aria-labelledby="story-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="modal-content story-modal" ref={modalRef}>
        <div className="modal-header">
          <h3 id="story-title" className="modal-title">
            OUR STORY
          </h3>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="modal-close"
            aria-label="Close story modal"
            title="Close modal (Press Escape)"
          >
            ✕
          </button>
        </div>
        
        <div className="story-content">
          <div className="story-hero">
            <div className="story-year">EST. 1952</div>
            <h2>Three Generations, One Tradition</h2>
            <div className="story-tagline">"Where Every Cut Tells a Story"</div>
          </div>

          <div className="story-section">
            <h3>Our Journey</h3>
            
            <div className="story-chapter">
              <div className="chapter-year">1952</div>
              <h4>The Foundation</h4>
              <p>
                Antonio "Tony" Benedetto arrived in Brooklyn Heights with his family's century-old 
                straight razor and a vision. Working 16-hour days, he transformed a small storefront 
                on Atlantic Avenue into Brooklyn's premier barbershop.
              </p>
            </div>

            <div className="story-chapter">
              <div className="chapter-year">1978</div>
              <h4>Evolution & Growth</h4>
              <p>
                Michael Benedetto inherited not just a business, but a responsibility to honor his 
                father's legacy while adapting to changing times. He introduced modern chair styling 
                and expanded the hot towel service menu.
              </p>
            </div>

            <div className="story-chapter">
              <div className="chapter-year">2005</div>
              <h4>Modern Mastery</h4>
              <p>
                Anthony "Little Tony" Benedetto represents the perfect blend of heritage and innovation. 
                Today's Brooklyn Barber Co. maintains its authentic character while incorporating 
                contemporary grooming techniques.
              </p>
            </div>
          </div>

          <div className="story-values">
            <h3>Our Values</h3>
            <div className="values-simple">
              <div className="value-simple">
                <span className="value-icon">🏛️</span>
                <div>
                  <strong>Tradition</strong>
                  <p>Classic barbering techniques passed down through generations</p>
                </div>
              </div>
              <div className="value-simple">
                <span className="value-icon">✨</span>
                <div>
                  <strong>Excellence</strong>
                  <p>Meticulous attention to detail in every service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-quote">
            <blockquote>
              "When you sit in our chair, you're not just getting a haircut. You're becoming part 
              of a story that started over 70 years ago."
            </blockquote>
            <cite>— Anthony "Little Tony" Benedetto</cite>
          </div>
        </div>
        
        <div className="story-footer">
          <button 
            onClick={() => {
              onClose()
              onBookingClick()
            }}
            className="btn-primary"
          >
            BOOK YOUR APPOINTMENT
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary"
            aria-label="Close story modal"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}

export default StoryModal
