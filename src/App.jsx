import React, { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import ScrollToTop from './components/ui/scroll-to-top'
import LoadingSpinner from './components/ui/loading-spinner'

// Lazy load less critical components
const Industries = lazy(() => import('./components/sections/Industries'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Resources = lazy(() => import('./components/sections/Resources'))
const Blog = lazy(() => import('./components/sections/Blog'))

// Lazy load all resource pages
const AIInnovationFramework = lazy(() => import('./pages/resources/AIInnovationFramework'))
const HITRUSTAISecurity = lazy(() => import('./pages/resources/HITRUSTAISecurity'))
const PaymentIntegrityCaseStudy = lazy(() => import('./pages/resources/PaymentIntegrityCaseStudy'))
const StrategicEnablement = lazy(() => import('./pages/resources/StrategicEnablement'))
const MedicarePaymentBlog = lazy(() => import('./pages/resources/MedicarePaymentBlog'))
const AIStrategyOffering = lazy(() => import('./pages/resources/AIStrategyOffering'))
const PaymentIntegritySolution = lazy(() => import('./pages/resources/PaymentIntegritySolution'))
const PaymentIntegrityPerspective = lazy(() => import('./pages/resources/PaymentIntegrityPerspective'))
const FraudDiscoveryCaseStudy = lazy(() => import('./pages/resources/FraudDiscoveryCaseStudy'))
const SecureAuditableAI = lazy(() => import('./pages/resources/SecureAuditableAI'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
    const clickHandler = (e) => {
      if (e.target.tagName === 'A') {
        handleAnchorClick(e)
      }
    }
    
    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}

// Full Solutions page component
const SolutionsPage = () => {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1>
      </div>
      <Services />
      <Suspense fallback={<LoadingSpinner />}>
        <Industries />
        <Testimonials />
      </Suspense>
    </main>
  )
}

// Insights page component  
const InsightsPage = () => {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Insights & Resources</h1>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Resources />
        <Blog />
      </Suspense>
    </main>
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
        <Route path="/resources/ai-innovation-framework" element={<Suspense fallback={<LoadingSpinner />}><AIInnovationFramework /></Suspense>} />
        <Route path="/resources/hitrust-ai-security" element={<Suspense fallback={<LoadingSpinner />}><HITRUSTAISecurity /></Suspense>} />
        <Route path="/resources/payment-integrity-case-study" element={<Suspense fallback={<LoadingSpinner />}><PaymentIntegrityCaseStudy /></Suspense>} />
        <Route path="/resources/strategic-enablement" element={<Suspense fallback={<LoadingSpinner />}><StrategicEnablement /></Suspense>} />
        <Route path="/resources/medicare-payment-blog" element={<Suspense fallback={<LoadingSpinner />}><MedicarePaymentBlog /></Suspense>} />
        <Route path="/resources/ai-strategy-offering" element={<Suspense fallback={<LoadingSpinner />}><AIStrategyOffering /></Suspense>} />
        <Route path="/resources/payment-integrity-solution" element={<Suspense fallback={<LoadingSpinner />}><PaymentIntegritySolution /></Suspense>} />
        <Route path="/resources/payment-integrity-perspective" element={<Suspense fallback={<LoadingSpinner />}><PaymentIntegrityPerspective /></Suspense>} />
        <Route path="/resources/fraud-discovery-case-study" element={<Suspense fallback={<LoadingSpinner />}><FraudDiscoveryCaseStudy /></Suspense>} />
        <Route path="/resources/secure-auditable-ai" element={<Suspense fallback={<LoadingSpinner />}><SecureAuditableAI /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<LoadingSpinner />}><NotFound /></Suspense>} />
      </Routes>
    </div>
  )
}

export default App
