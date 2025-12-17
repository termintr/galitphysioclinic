import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import ProfessionalInfo from './components/ProfessionalInfo'
import CookieConsent from './components/CookieConsent'
import { trackPageView, autoTrack, loadGoogleAnalytics, isAnalyticsEnabled } from './utils/analytics'

function AppContent() {
  const location = useLocation()

  // Initialize automatic tracking (only if analytics is enabled)
  useEffect(() => {
    if (isAnalyticsEnabled()) {
      autoTrack.externalLinks()
      autoTrack.forms()
    }
  }, [])

  // Handle cookie consent
  const handleCookieConsent = useCallback((accepted: boolean) => {
    if (accepted) {
      loadGoogleAnalytics().then(() => {
        // Initialize auto tracking after GA loads
        autoTrack.externalLinks()
        autoTrack.forms()
        // Track the current page
        trackPageView(location.pathname + location.search)
      })
    }
  }, [location.pathname, location.search])

  // Scroll to top on route change, but not when there's a hash
  useEffect(() => {
    const scrollToTop = () => {
      // Don't scroll to top if there's a hash in the URL
      if (window.location.hash) {
        return
      }
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        })
      }, 100)
    }
    
    scrollToTop()
    
    // Track page views with Google Analytics (only if enabled)
    if (isAnalyticsEnabled()) {
      trackPageView(location.pathname + location.search)
    }
  }, [location.pathname])

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/professional-info" element={<ProfessionalInfo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <CookieConsent onConsent={handleCookieConsent} />
    </>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  )
}

export default App
