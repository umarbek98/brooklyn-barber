import { useState } from 'react'
import './styles.css'

import BrooklynHeader from './components/BrooklynHeader'
import BrooklynHero from './components/BrooklynHero'
import BrooklynServices from './components/BrooklynServices'
import BrooklynFooter from './components/BrooklynFooter'
import BookingModal from './components/BookingModal'
import ConfirmationModal from './components/ConfirmationModal'
import AppointmentsModal from './components/AppointmentsModal'
import StoryModal from './components/StoryModal'

import { barbers, services, servicePackages } from './data/barbershopData'

function App() {
  const [showBooking, setShowBooking] = useState(false)
  const [appointments, setAppointments] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    barber: '',
    date: '',
    time: '',
    notes: ''
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showAppointments, setShowAppointments] = useState(false)
  const [showStory, setShowStory] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.service || !formData.barber || !formData.date || !formData.time) {
      alert('Please fill in all required fields')
      return
    }

    const newAppointment = {
      id: Date.now(),
      ...formData,
      barberName: barbers.find(b => b.id === formData.barber)?.name,
      serviceName: [...services, ...servicePackages].find(s => s.id === formData.service)?.name,
      createdAt: new Date().toISOString()
    }

    setAppointments(prev => [...prev, newAppointment])
    setShowConfirmation(true)
    setShowBooking(false)
  }

  const closeModal = () => {
    setShowBooking(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      barber: '',
      date: '',
      time: '',
      notes: ''
    })
  }

  const handleConfirmationClose = () => {
    setShowConfirmation(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      barber: '',
      date: '',
      time: '',
      notes: ''
    })
  }

  const selectedService = [...services, ...servicePackages].find(s => s.id === formData.service)

  return (
    <div>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <BrooklynHeader 
        appointments={appointments}
        onBookingClick={() => setShowBooking(true)}
        onAppointmentsClick={() => setShowAppointments(true)}
      />

      <main id="main-content">
        <BrooklynHero 
          onBookingClick={() => setShowBooking(true)}
          onStoryClick={() => setShowStory(true)}
        />

        <BrooklynServices 
          services={services}
          onBookingClick={() => setShowBooking(true)}
        />
      </main>

      <BrooklynFooter />

      <BookingModal 
        isOpen={showBooking}
        onClose={closeModal}
        onSubmit={handleSubmit}
        barbers={barbers}
        services={services}
        servicePackages={servicePackages}
        appointments={appointments}
        formData={formData}
        setFormData={setFormData}
      />

      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        selectedService={selectedService}
        formData={formData}
      />

      <AppointmentsModal 
        isOpen={showAppointments}
        onClose={() => setShowAppointments(false)}
        appointments={appointments}
        setAppointments={setAppointments}
        onBookingClick={() => {
          setShowAppointments(false)
          setShowBooking(true)
        }}
        services={services}
        servicePackages={servicePackages}
        barbers={barbers}
      />

      <StoryModal 
        isOpen={showStory}
        onClose={() => setShowStory(false)}
        onBookingClick={() => {
          setShowStory(false)
          setShowBooking(true)
        }}
      />
    </div>
  )
}

export default App