import React from 'react'
import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Industries from './components/sections/Industries'
import Testimonials from './components/sections/Testimonials'
import Resources from './components/sections/Resources'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Testimonials />
      <Resources />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
