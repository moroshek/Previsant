import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import ProgressIndicator from './components/ui/progress-indicator'
import ScrollToTop from './components/ui/scroll-to-top'

// Import resource pages
import AIInnovationFramework from './pages/resources/AIInnovationFramework'
import HITRUSTAISecurity from './pages/resources/HITRUSTAISecurity'
import PaymentIntegrityCaseStudy from './pages/resources/PaymentIntegrityCaseStudy'
import StrategicEnablement from './pages/resources/StrategicEnablement'
import MedicarePaymentBlog from './pages/resources/MedicarePaymentBlog'
import AIStrategyOffering from './pages/resources/AIStrategyOffering'
import PaymentIntegritySolution from './pages/resources/PaymentIntegritySolution'
import PaymentIntegrityPerspective from './pages/resources/PaymentIntegrityPerspective'
import FraudDiscoveryCaseStudy from './pages/resources/FraudDiscoveryCaseStudy'
import SecureAuditableAI from './pages/resources/SecureAuditableAI'
import NotFound from './pages/NotFound'

// Home page component - Simplified
const HomePage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const navHeight = 80 // Account for fixed navigation
          const targetPosition = targetElement.offsetTop - navHeight
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add event listeners to all anchor links
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        handleAnchorClick(e)
      }
    })

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      <ProgressIndicator />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  )
}

// Full Solutions page component
const SolutionsPage = () => {
  return (
    <>
      <ProgressIndicator />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1>
        </div>
        <Services />
        <Industries />
        <Testimonials />
      </main>
    </>
  )
}

// Insights page component  
const InsightsPage = () => {
  return (
    <>
      <ProgressIndicator />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Insights & Resources</h1>
        </div>
        <Resources />
        <Blog />
      </main>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="/solutions" element={
          <>
            <Navigation />
            <SolutionsPage />
            <Footer />
          </>
        } />
        <Route path="/insights" element={
          <>
            <Navigation />
            <InsightsPage />
            <Footer />
          </>
        } />
        <Route path="/resources/ai-innovation-framework" element={<AIInnovationFramework />} />
        <Route path="/resources/hitrust-ai-security" element={<HITRUSTAISecurity />} />
        <Route path="/resources/payment-integrity-case-study" element={<PaymentIntegrityCaseStudy />} />
        <Route path="/resources/strategic-enablement" element={<StrategicEnablement />} />
        <Route path="/resources/medicare-payment-blog" element={<MedicarePaymentBlog />} />
        <Route path="/resources/ai-strategy-offering" element={<AIStrategyOffering />} />
        <Route path="/resources/payment-integrity-solution" element={<PaymentIntegritySolution />} />
        <Route path="/resources/payment-integrity-perspective" element={<PaymentIntegrityPerspective />} />
        <Route path="/resources/fraud-discovery-case-study" element={<FraudDiscoveryCaseStudy />} />
        <Route path="/resources/secure-auditable-ai" element={<SecureAuditableAI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
