import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './index.css'
import HeroSection from './hero.jsx'
import Services from './Service.jsx'
import About from './about.jsx'
import ContactUs from './contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeroSection/>
    <Services/>
    <About/>
    <ContactUs/>
  </StrictMode>,
)
