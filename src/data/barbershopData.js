// Barber data
export const barbers = [
  {
    id: 'sofia',
    name: 'Sofia Martinelli',
    title: 'Master Barber & Owner',
    experience: '12+ years',
    specialties: ['Classic Cuts', 'Modern Styles', 'Beard Artistry'],
    image: '👩‍🦱',
    workDays: [1, 2, 3, 4, 5, 6], // Monday to Saturday
    startTime: '9:00',
    endTime: '18:00'
  },
  {
    id: 'michael',
    name: 'Michael Martinelli',
    title: 'Senior Master Barber',
    experience: '25+ years',
    specialties: ['Traditional Cuts', 'Straight Razor', 'Hot Towel'],
    image: '👨‍🦳',
    workDays: [1, 2, 3, 4, 5], // Monday to Friday
    startTime: '10:00',
    endTime: '17:00'
  },
  {
    id: 'antonio',
    name: 'Antonio "Tony" Benedetto',
    title: 'Founding Master Barber',
    experience: '45+ years',
    specialties: ['Classic Italian Style', 'Vintage Cuts', 'Mentorship'],
    image: '👴',
    workDays: [2, 4, 6], // Tuesday, Thursday, Saturday
    startTime: '11:00',
    endTime: '16:00'
  }
]

// Individual services
export const services = [
  { 
    id: 'classic-cut', 
    name: 'Classic Cut', 
    price: 35, 
    duration: 45,
    icon: '✂️',
    description: 'Traditional scissor cut with classic styling',
    image: '/src/assets/services/classic cut.jpg',
    category: 'individual'
  },
  { 
    id: 'beard-trim', 
    name: 'Beard Trim', 
    price: 25, 
    duration: 30,
    icon: '🧔',
    description: 'Professional beard shaping and trimming',
    image: '/src/assets/services/beard-trim.jpg',
    category: 'individual'
  },
  { 
    id: 'straight-shave', 
    name: 'Straight Razor Shave', 
    price: 45, 
    duration: 60,
    icon: '🪒',
    description: 'Classic straight razor shave with hot towel',
    image: '/src/assets/services/shave.jpg',
    category: 'individual'
  },
  { 
    id: 'mustache-trim', 
    name: 'Mustache Trim', 
    price: 15, 
    duration: 15,
    icon: '🥸',
    description: 'Precision mustache grooming and styling',
    image: '/src/assets/services/mustache.jpg',
    category: 'individual'
  },
  { 
    id: 'hot-towel', 
    name: 'Hot Towel Treatment', 
    price: 20, 
    duration: 30,
    icon: '🔥',
    description: 'Relaxing hot towel face treatment',
    image: '/src/assets/services/hot towel.jpg',
    category: 'individual'
  }
]

// Service Packages
export const servicePackages = [
  {
    id: 'gentleman-package',
    name: 'The Gentleman Package',
    price: 75,
    originalPrice: 90,
    duration: 120,
    icon: '👑',
    description: 'Complete grooming experience: Cut + Beard Trim + Hot Towel',
    services: ['classic-cut', 'beard-trim', 'hot-towel'],
    category: 'package',
    popular: true
  },
  {
    id: 'executive-package',
    name: 'Executive Package',
    price: 95,
    originalPrice: 115,
    duration: 150,
    icon: '💼',
    description: 'Premium service: Cut + Straight Razor Shave + Mustache + Hot Towel',
    services: ['classic-cut', 'straight-shave', 'mustache-trim', 'hot-towel'],
    category: 'package',
    premium: true
  },
  {
    id: 'classic-combo',
    name: 'Classic Combo',
    price: 65,
    originalPrice: 80,
    duration: 105,
    icon: '💈',
    description: 'Traditional experience: Cut + Straight Razor Shave',
    services: ['classic-cut', 'straight-shave'],
    category: 'package'
  },
  {
    id: 'quick-touch',
    name: 'Quick Touch-Up',
    price: 35,
    originalPrice: 40,
    duration: 45,
    icon: '⚡',
    description: 'Fast and fresh: Cut + Mustache Trim',
    services: ['classic-cut', 'mustache-trim'],
    category: 'package'
  }
]
